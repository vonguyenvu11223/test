'use client'
import Container from 'react-bootstrap/Container';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';
import Link from 'next/link';

function Header() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link href={'/'} className='nav-link'>Home</Link>
                        <span> - </span>
                        <Link href={'/masonry'} className='nav-link'>masonry</Link>
                        <span> - </span>
                        <Link href={'/listDoctor'} className='nav-link'>Listdoctor</Link>
                        <span> - </span>
                        <Link href={'/countdown'} className='nav-link'>countdown</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;