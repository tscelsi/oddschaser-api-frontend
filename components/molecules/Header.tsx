import React from 'react'
import MobileHeader from './MobileHeader'
import DesktopHeader from './DesktopHeader'

type Props = {} & React.PropsWithChildren

const Container = (props: Props) => (
    <div className="font-averta bg-black">
        {props.children}
    </div>
)

const Header = (props: Props) => {
    return (
        <>
            <DesktopHeader />
            <MobileHeader />
        </>
    )
}

export default Header