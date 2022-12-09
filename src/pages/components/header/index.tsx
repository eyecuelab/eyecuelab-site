import React, { useState } from 'react';
import { Link, animateScroll as scroll, } from 'react-scroll'
import { MenuAlt4Icon, XIcon } from '@heroicons/react/outline';
import logo from "../../../images/w-eyecuelogo.png";
import headerLinks from './headerLinks';
import cn from "classnames"

export default function Header() {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    const handleClose = () => setNav(!nav)
    console.log(nav)
    return (
        <>
            <div className={cn('w-screen h-[105px] z-10 md-bg-transparent bg-zinc-900 fixed drop-shadow-lg', {
                "bg-teal-600 drop-shadow-none": nav,
            })}>
                <div className='px-2 flex justify-between items-center w-full h-full'>
                    <div className='flex items-center'>
                        <div className='p-6' id="brand">
                            <img src={logo} alt="EyeCueLab" className="h-[57px] w-[57px]" />
                        </div>
                    </div>
                    <div className='md:hidden mr-4 text-white' onClick={handleClick}>
                        {!nav ? <MenuAlt4Icon className='w-5' /> : <XIcon className='w-5' />}
                    </div>
                </div>

            </div>
            <ul className={!nav ? "hidden" : 'absolute bg-teal-600 w-full h-full px-8'}>
                <div onClick={handleClose}>hello</div>
            </ul>
        </>
    );
}