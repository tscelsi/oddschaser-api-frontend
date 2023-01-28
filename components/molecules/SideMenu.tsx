import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import classNames from 'classnames'
import ReactComponent from '../../public/oc.svg'

type Props = {}

const menuItems = [
    {
        name: "Account",
        subItems: [
            { name: "Overview", link: "/account/overview" }
        ]
    }
]

const SideMenu = (props: Props) => {
    const router = useRouter()
    return (
        <div className="w-[200px] flex flex-col justify-between bg-darkGrhey cursor-default border-r border-grhey">
            <div className="p-8 font-bold">
                {menuItems.map((item, index) => {
                    return (
                        <div key={index}>
                            <div>{item.name}</div>
                            <div>
                                {item.subItems.map((subItem, subIndex) => {
                                    return (
                                        <div className={classNames("text-sm pl-4 pt-4 font-medium hover:cursor-pointer", {
                                            "text-violet-100": router.pathname === subItem.link
                                        })} key={subIndex}>
                                            <Link href="/account/overview">
                                                {subItem.name}
                                            </Link>
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
                    <span className="font-bold">Version</span> <span className="text-xs align-super">1.0.0</span>
                </div>
            </div>
        </div>
    )
}

export default SideMenu