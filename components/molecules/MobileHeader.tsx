import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { signOut, useSession } from "next-auth/react"
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { HiMenuAlt1, HiOutlineX } from 'react-icons/hi'
import MobileMenu from './MobileMenu'

const MobileHeader = () => {
    const session = useSession()
    const [open, setOpen] = React.useState(false)
    return (
        <div className="lg:hidden w-screen z-[20] sticky top-0 flex flex-col">
            <div className="h-16 flex justify-between border-grhey border-b bg-black">
                <div className="bg-black flex justify-start items-center">
                    {!open ? <HiMenuAlt1 onClick={() => setOpen(!open)} className="ml-4 text-whyte hover:cursor-pointer" size={22} /> : <HiOutlineX onClick={() => setOpen(!open)} className="ml-4 text-whyte hover:cursor-pointer" size={22} />}
                    <div className="h-16 flex items-center gap-16">
                        <Link href="/">
                            <div className="hover:cursor-pointer text-lg text-whyte font-black h-full flex items-center justify-between lg:pl-16 sm:pl-12 pl-8">
                                <span>OddsChaser</span><span className="align-super">API</span>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="flex gap-4">
                    {session.data && (
                        <DropdownMenu.Root>
                            <DropdownMenu.Trigger className="flex items-center justify-center hover:cursor-pointer">
                                {session.data?.user?.image ? <Image className="rounded-full" src={session.data?.user?.image} height={32} width={32} alt="avatar" /> : <Image style={{ filter: "blur(12px)", borderRadius: "9999px" }} src="/Avatar.png" height={32} width={32} />}
                            </DropdownMenu.Trigger>
                            <DropdownMenu.Portal>
                                <DropdownMenu.Content className="z-[100]" sideOffset={8}>
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
            </div>
            {open && <MobileMenu />}
        </div>
    )
}

export default MobileHeader