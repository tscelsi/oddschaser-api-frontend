import React from 'react'
import { unstable_getServerSession } from 'next-auth/next'
import Header from '../../components/molecules/Header'
import SideMenu from '../../components/molecules/SideMenu'
import AccountCard from '../../components/molecules/AccountCard'
import { authOptions } from '../api/auth/[...nextauth]'
import { MongoClient, Db } from "mongodb"
import clientPromise from "../../lib/mongodb"
import { useGenerateApiKey } from "../../lib/services"
import useWindowSize from '../../hooks/useWindowSize'


type Props = {
    session: {
        accesses: number
        name: string
        email: string
        _key: string
    }
}

const COLLECTION = "users"

export async function getServerSideProps(context: any) {
    try {
        const session = await unstable_getServerSession(context.req, context.res, authOptions)

        if (!session || !session.user) {
            return {
                redirect: {
                    destination: '/',
                    permanent: false,
                },
            }
        }
        const client: MongoClient = await clientPromise
        const db: Db = client.db(process.env.MONGODB_DB)
        const user = await db.collection(COLLECTION).findOne({ email: session.user.email })
        if (!user) {
            return {
                redirect: {
                    destination: '/',
                    permanent: false,
                },
            }
        }
        const { _id, ...rest } = user
        return {
            props: {
                session: {
                    ...rest,
                    ...session
                },
            },
        }
    } catch (error) {
        console.log(error)
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        }
    }
}

const TAILWIND_LG_BREAKPOINT = 1024

const Account = (props: Props) => {
    const { width } = useWindowSize()
    const generateApiKey = useGenerateApiKey()
    return (
        <div className="font-averta h-screen flex flex-col text-whyte">
            <Header />
            <main className="flex grow bg-black">
                {width && width > TAILWIND_LG_BREAKPOINT && <SideMenu />}
                <div className="grow flex mt-16 lg:px-12 p-4 w-screen">
                    <AccountCard
                        session={props.session}
                        generateApiKey={generateApiKey}
                    />
                </div>
            </main>
        </div>
    )
}

export default Account