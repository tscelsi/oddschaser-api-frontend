import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { signIn, signOut, useSession } from "next-auth/react"
import Button from '../atoms/Button'
import classNames from 'classnames'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

type Props = {} & React.PropsWithChildren

const Container = (props: Props) => (
    <div className="font-averta bg-black">
        {props.children}
    </div>
)

const Header = (props: Props) => {
    const session = useSession()
    return (
        <div className="bg-black flex justify-between items-center border-grhey border-b">
            <div className="h-16 flex items-center gap-16">
                <Link href="/">
                    <div className="hover:cursor-pointer text-lg text-whyte font-black h-full flex items-center justify-between lg:pl-16 sm:pl-12 pl-8">
                        <span>OddsChaser</span><span className="align-super">API</span>
                    </div>
                </Link>
                <Link href="/docs/overview">
                    <div className="text-whyte text-sm h-full flex items-center hover:cursor-pointer hover:text-violet-100 transition-colors">
                        Docs
                    </div>
                </Link>
                <div className="text-grhey text-sm h-full flex items-center hover:cursor-default">
                    Roadmap
                </div>
            </div >
            <div className={classNames("flex", {
                "gap-16": !session,
                "gap-6": session,
            })}>
                {!session.data ? <div className="flex items-center justify-center gap-4">
                    <Button><a
                        href={`/api/auth/signin`}
                        // className={styles.buttonPrimary}
                        onClick={(e) => {
                            e.preventDefault()
                            signIn()
                        }}
                    >
                        Sign in
                    </a></Button>
                    <Button><a
                        href={`/api/auth/signin`}
                        // className={styles.buttonPrimary}
                        onClick={(e) => {
                            e.preventDefault()
                            signIn()
                        }}
                    >
                        Join Now
                    </a></Button>
                </div> : (
                    <DropdownMenu.Root>
                        <DropdownMenu.Trigger className="flex items-center justify-center hover:cursor-pointer">
                            {session.data?.user?.image ? <Image className="rounded-full" src={session.data?.user?.image} height={32} width={32} alt="avatar" /> : <Image style={{ filter: "blur(12px)", borderRadius: "9999px" }} src="/Avatar.png" height={32} width={32} />}
                        </DropdownMenu.Trigger>
                        <DropdownMenu.Portal>
                            <DropdownMenu.Content sideOffset={8}>
                                <DropdownMenu.Item className="hover:opacity-60 text-white font-medium pl-4 rounded-t-lg bg-darkGrhey w-[100px] h-10 text-sm flex items-center justify-start hover:cursor-pointer hover:border-none border border-grhey">
                                    <Link href="/account/overview">Account</Link>
                                </DropdownMenu.Item>
                                <DropdownMenu.Item onClick={() => { signOut({ callbackUrl: "/" }) }} className="hover:opacity-60 text-white font-medium pl-4 rounded-b-lg bg-darkGrhey w-[100px] h-10 text-sm flex items-center justify-start hover:cursor-pointer hover:border-none border border-grhey border-t-0">
                                    Sign out
                                </DropdownMenu.Item>
                            </DropdownMenu.Content>
                        </DropdownMenu.Portal>
                    </DropdownMenu.Root>
                )}
                <Link href="https://github.com/tscelsi/oddschaser-api-frontend">
                    <a className="flex items-center w-5 mr-4 hover:cursor-pointer hover:opacity-60" target="_blank" rel="noopener noreferrer">
                        <Image src="/github-mark-white.svg" height={24} width={24} alt="github-logo" />
                    </a>
                </Link>
            </div>
        </div >
    )
}

export default Header