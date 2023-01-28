// This is an example of to protect an API route
import { unstable_getServerSession } from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]"
import { MongoClient, Db } from "mongodb"
import clientPromise from "../../../lib/mongodb"
import { StatusCodes } from 'http-status-codes'

import type { NextApiRequest, NextApiResponse } from "next"

const COLLECTION = 'users'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === "GET") {
        const session = await unstable_getServerSession(req, res, authOptions)

        if (!session || !session.user) {
            return res.status(StatusCodes.UNAUTHORIZED).send({
                error:
                    "Failed to get user session.",
            })
        }
        const client: MongoClient = await clientPromise
        const db: Db = client.db(process.env.MONGODB_DB)
        const user = await db.collection(COLLECTION).findOne({ email: session.user.email })
        if (user) {
            res.status(StatusCodes.OK).json(user)
        } else {
            res.status(StatusCodes.BAD_REQUEST).json({ error: 'Failed to get user' })
        }
    } else {
        res.status(StatusCodes.METHOD_NOT_ALLOWED).json({ error: 'Method not allowed' })
    }
}


