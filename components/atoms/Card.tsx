import React from 'react'

type Props = {} & React.PropsWithChildren

const Card = (props: Props) => {
    return (
        <div className="w-inherit h-auto bg-darkGrhey border-grhey rounded-lg">{props.children}</div>
    )
}

export default Card