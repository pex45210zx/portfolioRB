import React, { useState, useEffect } from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import profileHi from '../assets/img/personal-Avatar.png'
import linkedIn from '../assets/img/nav-icon1.svg'
import faceBook from '../assets/img/nav-icon2.svg'
import githubIcon from '../assets/img/github-Icon.svg'

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }
    return (
        <Navbar expan='ig' className={scrolled ? 'scrolled' : ''}>
            <Container>
                <Navbar.Brand href='#home'>
                    <img src={profileHi} alt='Logo' className='custom-profile' />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbarNavbar-nav'>
                    <span className='navbar-toggler-icon'></span>
                </Navbar.Toggle>
                <Navbar.Collapse id='basic-navbarNavbar-nav'>
                    <Nav className='me-auto'>
                        <Nav.Link href='#home' className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href='#skills' className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                        <Nav.Link href='#project' className={activeLink === 'project' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('project')}>Projects</Nav.Link>
                    </Nav>
                    <span className='navbar-text'>
                        <div className='social-icon'>
                            <a href='https://www.linkedin.com/in/siravat-matarach-30b4882bb/' target='_blank' rel='noopener noreferrer'>
                                <img src={linkedIn} alt='LinkedIn' />
                            </a>
                            <a href='https://www.facebook.com/DamnsonYeYo/' target='_blank' rel='noopener noreferrer'>
                                <img src={faceBook} alt='Facebook' />
                            </a>
                            <a href='https://github.com/pex45210zx?tab=overview&from=2023-12-01&to=2023-12-31' target='_blank' rel='noopener noreferrer'>
                                <img src={githubIcon} alt='GitHub' />
                            </a>
                        </div>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
