import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import classNames from 'classnames'

type Props = {
    sections: DocSection[]
}

type DocSection = {
    name: string
    paths: DocPage[]
}

type DocPage = {
    name: string
    path: string
    disabled: boolean
}

const DocsSideMenu = ({ sections }: Props) => {
    const router = useRouter()
    return (
        <div className="none lg:flex min-w-[200px] w-[200px] flex-col justify-between bg-darkGrhey cursor-default border-r border-grhey">
            <div className="px-8 font-bold">
                {sections.map((item, index) => {
                    return (
                        <div className="mt-6" key={index}>
                            <div>{item.name}</div>
                            <div>
                                {item.paths.map((subItem, subIndex) => {
                                    return (
                                        <div className={classNames("text-sm ml-4 mt-4 font-medium hover:cursor-pointer hover:text-violet-100 transition-colors", {
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
            <div className="flex gap-2 justify-start pl-8 pb-4 items-center text-sm">
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
                <div>
                    <span className="font-bold">Version</span> <span className="text-xs align-super">0.0.1</span>
                </div>
            </div>
        </div>
    )
}

export default DocsSideMenu