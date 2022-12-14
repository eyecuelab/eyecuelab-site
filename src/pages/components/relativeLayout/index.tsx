import React, { ReactNode } from 'react'
interface RelativeFullScreenProps {
    classNames: string,
    children?: ReactNode
}
export default function RelativeFullScreen({ classNames, children }: RelativeFullScreenProps) {
    return (
        <div className={`relative top-0 h-full ${classNames}`} >
            {children}
        </div >
    )
}
