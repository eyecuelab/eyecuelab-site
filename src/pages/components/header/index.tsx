import React, { useState } from 'react';
import eyecuelogo from "../../../images/w-eyecuelogo.png";
import { Button, Nav, Navbar, } from 'react-bootstrap';
import cn from "classnames";
import styled from "styled-components"
import { EyeCueNavBar, } from './styles';

const headerLinks = [
    {
        title: "Who We Are",
        href: "Who We Are"
    },
    {
        title: "Case Studies",
        href: "Case Studies"
    },
    {
        title: "What We Do",
        href: "What We Do"
    },
    {
        title: "Innovation Assessment",
        href: "Innovation Assessment"
    },
]

export default function Header() {
    const [navToggle, setNavToggle] = useState(false);

    return (
        <EyeCueNavBar toggled={navToggle} expand='lg' sticky='top' className='d-flex align-items-center justify-content-between' onToggle={(a) => setNavToggle(a)} >
            <Navbar.Brand href="#home" className='m-3'><img src={eyecuelogo} alt="EyeCueLab" className='me-4' width="57px" height="57px" /></Navbar.Brand>
            {navToggle ? null : <Nav className="m-3"><Button variant="outline-light" className="rounded-0">Contact Us</Button></Nav>}
            <Navbar.Toggle className="m-3" onClick={(a) => console.log(a)} />
            <Navbar.Collapse>
                <Nav className={cn("me-auto", {
                    "d-flex align-items-start mt-4": navToggle
                })}>
                    {headerLinks.map((nav, idx) => {
                        const navBarKey = `navbar_${idx}`;
                        return <Nav.Link href={`${nav.href}`} key={navBarKey} className={cn("ms-3 text-white navLinks", {
                            "mb-2": navToggle
                        })}>{nav.title}</Nav.Link>
                    })}
                    {navToggle ? <Nav className="m-3"><Button variant="outline-light" className="rounded-0">Contact Us</Button></Nav> : null}
                </Nav>
            </Navbar.Collapse>
        </EyeCueNavBar>
    );
}
