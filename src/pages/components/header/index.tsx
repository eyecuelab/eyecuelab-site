import React from 'react';
import eyecuelogo from "../../../images/w-eyecuelogo.png";
import { Button, Nav, Navbar, } from 'react-bootstrap';

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
    return (
        <Navbar expand="lg" bg='dark' className='p-2'>
            <Navbar.Brand href="#home" className='m-3'><img src={eyecuelogo} alt="EyeCueLab" className='me-4' width="57px" height="57px" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav" className='row'>
                <Nav className="me-auto">
                    {headerLinks.map((nav, idx) => {
                        const navBarKey = `navbar_${idx}`
                        return <Nav.Link href={`${nav.href}`} key={navBarKey} className="ms-4 text-white">{nav.title}</Nav.Link>
                    })}
                    <Nav className="ms-auto me-3"><Button variant="outline-light" className="ps-5 pe-5 rounded-0">Contact Us</Button></Nav>
                </Nav>
            </Navbar.Collapse>
        </Navbar >
    )
}
