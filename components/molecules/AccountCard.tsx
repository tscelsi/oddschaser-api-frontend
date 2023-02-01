import React from 'react'
import classNames from 'classnames'
import Button from '../atoms/Button'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { IoCopyOutline } from 'react-icons/io5'
import useWindowSize from '../../hooks/useWindowSize'

type Props = {
    session: {
        accesses: number
        name: string
        email: string
        _key: string
    }
    generateApiKey: any
}

const TAILWIND_LG_BREAKPOINT = 1024

const AccountCard = ({ session, generateApiKey }: Props) => {
    const { width } = useWindowSize()
    const [apiKey, setApiKey] = React.useState<string | null>(null)
    const accessNumber: "high" | "medium" | "low" = session.accesses > 18 ? "high" : session.accesses > 10 ? "medium" : "low"
    const queryClient = useQueryClient()
    const { data: user } = useQuery({ queryKey: ['users'], queryFn: () => axios.get('/api/users').then(res => res.data) })
    const handleGenerateApiClick = () => {
        generateApiKey.mutateAsync().then((res: { raw_api_key: string }) => {
            setApiKey(res.raw_api_key)
            queryClient.invalidateQueries(['users'])
        })
    }

    const copy = () => {
        navigator.clipboard.writeText(apiKey ?? "")
    }

    const isDesktop = width && width > TAILWIND_LG_BREAKPOINT

    return (
        <div className="w-full flex flex-col gap-16 grow text-whyte">
            <div className="font-bold bg-darkGrhey rounded-lg">
                <div className="h-16 px-6 lg:px-10 flex items-center justify-start border-grhey border-b">
                    Account Information
                </div>
                <div className="font-medium px-6 lg:px-10 h-12 my-6 flex gap-x-8 lg:gap-x-16 items-center justify-start">
                    Name
                    <input disabled className="grow h-full rounded-lg pl-4 text-sm text-grhey font-medium bg-black" placeholder='...' value={session.name ?? ""} />
                </div>
                <div className="font-medium px-6 lg:px-10 h-12 my-6 flex gap-x-8 lg:gap-x-16 items-center justify-start">
                    Email
                    <input disabled className="grow h-full rounded-lg pl-4 text-sm text-grhey font-medium bg-black" placeholder='...' value={session.email ?? ""} />
                </div>
            </div>
            <div className="font-bold bg-darkGrhey rounded-lg">
                <div className="h-16 px-6 lg:px-10 flex items-center justify-start border-grhey border-b">
                    API Information
                </div>
                <div className="font-medium px-6 lg:px-10 h-12 my-6 flex gap-x-8 lg:gap-x-16 items-center justify-start">
                    <div>API Key</div>
                    {session._key && !apiKey ? <Button onClick={handleGenerateApiClick} variant="error" size="large" loading={generateApiKey.isLoading}>Create new API Key</Button>
                        : apiKey ? (
                            <div className="flex flex-col gap-2 min-w-0">
                                <div className="flex items-center gap-x-2">
                                    <span onClick={copy} className="overflow-x-scroll font-normal text-sm rounded-lg bg-black p-2 lg:p-3 whitespace-nowrap">{apiKey}</span>
                                    {isDesktop && <IoCopyOutline onClick={copy} className="hover:opacity-60 hover:cursor-pointer" />}
                                </div>
                                <span className="font-normal text-xs text-red-400">{!isDesktop ? <span><strong>Press the text to copy.</strong></span> : <span>Copy this key somewhere safe! It disappears when you navigate away."</span>}</span>
                            </div>
                        ) : <Button loading={generateApiKey.isLoading} onClick={handleGenerateApiClick} size="large">Generate API Key</Button>
                    }
                </div>
                <div className="font-medium px-6 lg:px-10 h-12 my-6 flex gap-x-8 lg:gap-x-16 items-center justify-start">
                    <span>Quota</span>
                    {user?.has_key ? <span className={classNames({
                        "text-red-500": accessNumber === "high",
                        "text-yellow-500": accessNumber === "medium",
                        "text-green-500": accessNumber === "low"
                    })}>{user?.accesses ?? 0} / {user?.limit ?? ""}</span> : <span className="text-sm text-grhey">Generate an API key</span>}
                </div>
            </div>
        </div>
    )
}

export default AccountCard