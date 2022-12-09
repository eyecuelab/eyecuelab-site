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
        <div className=''>
            <div className={cn('w-screen h-[105px] z-10 md:bg-transparent bg-zinc-900 drop-shadow-lg', {
                "bg-nav-blue drop-shadow-none": nav,
            })}>
                <div className='flex justify-between items-center w-full h-full p-3'>
                    <img src={logo} alt="EyeCueLab" className="" width="57px" height="57px" />
                    <button className={nav ? "hidden" : "md:hidden bg-transparent text-white hover:shadow-md px-7 py-2.5 border border-gray-400 shadow "}>
                        Contact Us
                    </button>
                    <span className='md:hidden text-white' onClick={handleClick}>
                        {!nav ? <MenuAlt4Icon className='w-5 hover:scale-95' fontSize="24px" /> : <XIcon className='w-5 hover:scale-95' />}
                    </span>
                </div>
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
        </div >
    );
}