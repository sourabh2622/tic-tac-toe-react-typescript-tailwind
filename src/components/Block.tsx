import React from 'react'

interface BlockProps {
    value?: string | null,
    onClick?: () => void
}

const Block: React.FC<BlockProps> = (props) => {
    return (
        <div onClick={props.onClick} className="border-1 border-white text-white h-24 w-24 flex items-center justify-center text-2xl">
            {props.value}
        </div>
    )
}

export default Block
