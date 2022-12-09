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

    return (
        <>
            <div className={cn('grid grid-cols-3 lg:grid-cols-12 sticky w-screen', {
                "bg-nav-blue drop-shadow-none": nav,
                "bg-transparent": !nav
            })}>
                <span className='p-3 flex justify-items-center'>
                    <img src={logo} alt="EyeCueLab" />
                </span>
                <ul className='hidden lg:col-span-11 lg:grid lg:grid-cols-11 lg:items-center lg:text-white lg:whitespace-nowrap'>
                    {headerLinks.map((nav, idx) => {
                        const navKey = `${idx}_navKey`;
                        return (
                            <li className="last:col-start-10 last:col-end-11 last:flex last:justify-center last:items-center last:w-56 last:h-10 last:border" onClick={handleClose} key={navKey}>
                                <p className=''>
                                    {nav.title}
                                </p>
                            </li>
                        )
                    })}
                </ul>
                <button className="lg:hidden text-white px-6 py-2 whitespace-nowrap flex justify-center items-center">
                    <p className={nav ? 'hidden' : 'border px-6 py-2'}>
                        Contact Us
                    </p>
                </button>
                <span className='lg:hidden text-white flex justify-end items-center pr-3' onClick={handleClick}>
                    {!nav ? <MenuAlt4Icon className='w-5 hover:scale-95' /> : <XIcon className='w-5 hover:scale-95' />}
                </span>
            </div>
            <div>
                <ul className={!nav ? "hidden" : 'lg:hidden absolute bg-gradient-to-t from-nav-light-blue to-nav-blue w-screen h-screen p-3 flex flex-col justify-start'}>
                    {headerLinks.map((nav, idx) => {
                        const navKey = `${idx}_navKey`;
                        return <li className="last:mt-36 text-white last:text-center font-semibold last:py-2 last:px-4 last:border last:border-white-400 mt-11 first:mt-32 text-2xl" onClick={handleClose} key={navKey}>{nav.title}</li>
                    })}
                </ul>
            </div>
        </>
    );
}