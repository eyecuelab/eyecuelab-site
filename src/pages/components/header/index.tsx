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
            <div className={cn('grid grid-cols-3 md:grid-cols-12 sticky', {
                "bg-nav-blue drop-shadow-none": nav,
                "bg-transparent": !nav
            })}>
                <span className='p-3 flex justify-items-center'>
                    <img src={logo} alt="EyeCueLab" />
                </span>
                <ul className='hidden md:col-span-11 md:grid md:grid-cols-11 md:items-center md:text-white md:whitespace-nowrap'>
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
                <button className="md:hidden text-white px-6 py-2 whitespace-nowrap flex justify-center items-center">
                    <p className={nav ? 'hidden' : 'border px-6 py-2'}>
                        Contact Us
                    </p>
                </button>
                <span className='md:hidden text-white flex justify-end items-center pr-3' onClick={handleClick}>
                    {!nav ? <MenuAlt4Icon className='w-5 hover:scale-95' /> : <XIcon className='w-5 hover:scale-95' />}
                </span>
            </div>
            <div>
                <ul className={!nav ? "hidden" : 'md:hidden absolute bg-gradient-to-t from-nav-light-blue to-nav-blue w-screen h-screen p-3 flex flex-col justify-start'}>
                    {headerLinks.map((nav, idx) => {
                        const navKey = `${idx}_navKey`;
                        const isContact = nav.title === "Contact Us";
                        return <li className={isContact ? "mt-36 text-white text-center hover:shadow-md font-semibold py-2 px-4 border border-white-400 shadow" : "text-white mt-11 first:mt-32 text-2xl"} onClick={handleClose} key={navKey}>{nav.title}</li>
                    })}
                </ul>
            </div>
        </>
    );
}