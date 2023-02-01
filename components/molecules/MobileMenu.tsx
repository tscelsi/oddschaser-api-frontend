import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import classNames from 'classnames'
import Button from '../atoms/Button'
import { signIn, useSession } from "next-auth/react"
import docSections from '../../lib/docs/docSections'


const MobileMenu = () => {
    const session = useSession()
    const router = useRouter()
    return (
        <div className="h-[calc(100%-16rem)] flex flex-col grow bg-black">
            {!session.data && (
                <div className="flex flex-col gap-y-6 mx-6 my-4 font-medium">
                    <Button stretch size="large"><a
                        href={`/api/auth/signin`}
                        // className={styles.buttonPrimary}
                        onClick={(e) => {
                            e.preventDefault()
                            signIn()
                        }}
                    >
                        Sign in
                    </a></Button>
                </div>)}
            <div className="opacity-60 bg-gradient-to-r from-[#68E3F9] via-[#F55A9B] to-[#6F6FDD] h-px"></div>
            <div className="mx-8 my-6 font-medium">
                <div className="text-whyte text-lg font-bold">Menu</div>
                <Link href="/docs/overview">
                    <div className="mt-6 ml-4 text-whyte flex items-center hover:cursor-pointer hover:text-violet-100 transition-colors">
                        Docs
                    </div>
                </Link>
                <div className="mt-6 ml-4 text-grhey flex items-center hover:cursor-default">
                    Roadmap
                </div>
            </div>
            <div className="opacity-60 bg-gradient-to-r from-[#68E3F9] via-[#F55A9B] to-[#6F6FDD] h-px"></div>
            <div className="grow flex flex-col gap-y-6 mx-8 my-6 font-medium">
                {docSections.map((item, index) => {
                    return (
                        <div className="text-whyte text-lg font-bold" key={index}>
                            <div>{item.name}</div>
                            <div>
                                {item.paths.map((subItem, subIndex) => {
                                    return (
                                        <div className={classNames("text-base ml-4 mt-6 font-medium hover:cursor-pointer hover:text-violet-100 transition-colors", {
                                            "text-violet-300": router.asPath === `/docs/${subItem.path}`,
                                            "text-grhey": subItem.disabled,
                                            "hover:text-grhey": subItem.disabled,
                                            "hover:cursor-default": subItem.disabled,
                                            "line-through": subItem.disabled,
                                        })} key={subIndex}>
                                            {!subItem.disabled ? <Link href={`/docs/${subItem.path}`}>
                                                {subItem.name}
                                            </Link> : `${subItem.name} (coming soon)`}
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })
                }
            </div>
            <div className="grow flex flex-col justify-end">
                <div className="opacity-60 bg-gradient-to-r from-[#68E3F9] via-[#F55A9B] to-[#6F6FDD] h-px"></div>
                <div className="flex gap-2 justify-start pl-8 items-center text-sm h-16">
                    <svg width="18" height="18" stroke="white" viewBox="0 0 208 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="mask0_901_660" maskUnits="userSpaceOnUse" x="0" y="0" width="200" height="200">
                            <circle cx="100" cy="100" r="99.5" fill="#D9D9D9" stroke="white" />
                        </mask>
                        <g mask="url(#mask0_901_660)">
                            <mask id="path-2-inside-1_901_660" fill="white">
                                <path d="M141 75H200V125H141V75Z" />
                            </mask>
                            <path d="M141 79H200V71H141V79ZM200 121H141V129H200V121Z" fill="white" mask="url(#path-2-inside-1_901_660)" />
                            <circle cx="100" cy="100" r="98" stroke="white" strokeWidth="16" />
                            <circle cx="100" cy="100" r="48" stroke="white" strokeWidth="16" />
                        </g>
                    </svg>
                    <div className="text-whyte">
                        <span className="font-bold">Version</span> <span className="text-xs align-super">0.0.1</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MobileMenu