import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import linkedIn from '../assets/img/nav-icon1.svg'
import faceBook from '../assets/img/nav-icon2.svg'
import githubIcon from '../assets/img/github-Icon.svg'

export const Footer = () => {
    return (
        <footer className='footer'>
            <Container>
                <Row className='align-items-center'>
                    <Col sm={6}>
                        {/* <img src={logo} alt='Logo'/> */}
                    </Col>
                        <Col sm={6} className='text-center text-sm-end'>

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

                            <p>Email : pex_der@outlook.co.th</p>
                            <p>CopyRight 2024. All Right Reserved</p>
                        </Col>
                </Row>
            </Container>
        </footer>
    )
}
