import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Button from '../../components/atoms/Button'
import { signIn } from "next-auth/react"

const Signin = () => {
    const router = useRouter()
    return (
        <div className="font-averta h-screen flex flex-col text-whyte">
            <main className="grow bg-black flex justify-center items-center">
                <div className="mt-[-8rem] w-4/5 lg:w-1/5 md:w-1/2 flex flex-col gap-8 justify-center items-start">
                    <div className="text-whyte text-xl font-black">OddsChaser</div>
                    <div className="flex flex-col w-full p-8 gap-4 bg-darkGrhey rounded-lg drop-shadow-md">
                        <div className="font-medium">Sign in to your account</div>
                        <Button onClick={() => signIn("google", router?.query?.callbackUrl ? {
                            callbackUrl: router?.query?.callbackUrl as string
                        } : undefined)} stretch size="large" image="/goog.png">Google</Button>
                    </div>
                </div>
                <div className="absolute top-8 left-8 font-medium underline hover:cursor-pointer hover:opacity-80">
                    <Link href="/">Back</Link>
                </div>
            </main>
        </div>
    )
}

export default Signin