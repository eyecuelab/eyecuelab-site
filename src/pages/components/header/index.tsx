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
        <div className=''>
            <div className={cn('w-screen h-[105px] z-10 md:bg-transparent bg-zinc-900 drop-shadow-lg', {
                "bg-teal-600 drop-shadow-none": nav,
            })}>
                <div className='px-2 flex justify-between items-center w-full h-full'>
                    <div className='flex items-center'>
                        <img src={logo} alt="EyeCueLab" className="h-[57px] w-[57px] m-4" />
                    </div>
                    <div className={nav ? "hidden" : "md:hidden" }>
                        <button className="bg-transparent text-white hover:shadow-md font-semibold py-2 px-4 border border-gray-400 shadow">
                            Contact Us
                        </button>
                    </div>
                    <div className='md:hidden mr-3 text-white' onClick={handleClick}>
                        {!nav ? <MenuAlt4Icon className='w-5 hover:scale-95' /> : <XIcon className='w-5 hover:scale-95' />}
                    </div>
                </div>

            </div>
            <div>
                <ul className={!nav ? "hidden" : 'md:hidden absolute bg-teal-600 w-full h-full px-8'}>
                    {headerLinks.map((nav, idx) => {
                        const navKey = `${idx}_navKey`;
                        const isContact = nav.title === "Contact Us";
                        return <li className={isContact ? "mt-12 text-white text-center hover:shadow-md font-semibold py-2 px-4 border border-white-400 shadow" : "text-white mt-12"} onClick={handleClose} key={navKey}>{nav.title}</li>
                    })}
                </ul>

            </div>
        </div>
    );
}