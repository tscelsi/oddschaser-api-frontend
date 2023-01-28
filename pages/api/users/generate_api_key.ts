// This is an example of to protect an API route
// import { unstable_getServerSession } from "next-auth/next"
// import { authOptions } from "../../auth/[...nextauth]"
import { MongoClient, Db } from "mongodb"
import clientPromise from "../../../lib/mongodb"
import bcryptjs from "bcryptjs"
import { StatusCodes } from 'http-status-codes'
import { generateApiKey } from 'generate-api-key'

import type { NextApiRequest, NextApiResponse } from "next"

const SALT_ROUNDS = 10
const COLLECTION = 'users'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === "POST") {
        // const session = await unstable_getServerSession(req, res, authOptions)

        // if (!session) {
        //     return res.status(StatusCodes.UNAUTHORIZED).send({
        //         error:
        //             "Failed to get session.",
        //     })
        // }
        const client: MongoClient = await clientPromise
        const db: Db = client.db(process.env.MONGODB_DB)
        const key = generateApiKey({ method: 'string', length: 32 }) as string
        const keyHash = bcryptjs.hashSync(key, SALT_ROUNDS)
        const user = await db.collection(COLLECTION).findOneAndUpdate({ email: "oddchaserdev@gmail.com" }, { $set: { _key: keyHash, has_key: true } }, { returnDocument: 'after' })
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
