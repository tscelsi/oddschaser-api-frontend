// This is an example of to protect an API route
import { unstable_getServerSession } from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]"
import { MongoClient, Db } from "mongodb"
import clientPromise from "../../../lib/mongodb"
import { StatusCodes } from 'http-status-codes'
import { generateApiKey } from 'generate-api-key'
import sha256 from 'crypto-js/sha256';
import type { NextApiRequest, NextApiResponse } from "next"

const COLLECTION = 'users'
const DEFAULT_API_LIMIT = 20
const DEFAULT_USER_TYPE = 'user'
const INIT_ACCESSES = 0

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === "POST") {
        const session = await unstable_getServerSession(req, res, authOptions)

        if (!session || !session.user) {
            return res.status(StatusCodes.UNAUTHORIZED).send({
                error:
                    "Failed to get session.",
            })
        }
        const client: MongoClient = await clientPromise
        const db: Db = client.db(process.env.MONGODB_DB)
        const key = generateApiKey({ method: 'string', length: 32 }) as string
        const keyHash = sha256(key)
        const user = await db.collection(COLLECTION).findOneAndUpdate({ email: session.user.email }, {
            $set: {
                _key: keyHash,
                has_key: true,
                limit: DEFAULT_API_LIMIT,
                _type: DEFAULT_USER_TYPE,
                accesses: INIT_ACCESSES,
            }
        }, { returnDocument: 'after' })
        if (user) {
            res.status(StatusCodes.OK).json({ raw_api_key: key })
        } else {
            return res.status(StatusCodes.BAD_REQUEST).send({
                error:
                    "Failed to get session.",
            })
        }
    } else {
        res.status(StatusCodes.METHOD_NOT_ALLOWED).json({ error: 'Method not allowed' })
    }
}
