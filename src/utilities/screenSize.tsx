import React, { useState, useEffect } from "react";

export function screenSize() {
    const isBrowser = () => typeof window !== "undefined";
    const [windowSize, setWindowSize] = useState({
        winWidth: 0,
        winHeight: 0,
    })

    const detectSize = () => {
        setWindowSize({
            winWidth: window.innerWidth,
            winHeight: window.innerHeight,
        })
    }

    useEffect(() => {
        if (isBrowser()) {
            window.addEventListener('resize', detectSize)
        }
        return () => {
            setWindowSize({
                winWidth: 0,
                winHeight: 0,
            })
            // window.removeEventListener('resize', detectSize)
        }
    }, [windowSize])

    return windowSize;
}