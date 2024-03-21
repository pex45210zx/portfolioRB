import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import avatar from '../assets/img/profile-pic.svg';
import { ArrowDownCircle } from 'react-bootstrap-icons';

export const Banner = () => {
    const handleClick = () => {
        const skillsSection = document.getElementById('skills');
        skillsSection.scrollIntoView({ behavior: 'smooth' });
    };

    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ['Web Developer', 'Web Designer', 'UI/UX Designer'];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => {
            clearInterval(ticker);
        };
    }, [text]);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updateText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updateText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updateText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updateText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    };

    return (
        <section className='banner' id='home'>
            <Container>
                <Row className='allign-item-center'>
                    <Col xs={12} md={6} xl={7}>
                        <span className='tagline'>Welcome to my Portfolio</span>
                        <h1>{`Hi! I'm Spextre `}<span className='wrap'>{text}</span></h1>
                        <p>สวัสดีครับ ผมชื่อเป็กซ์ครับนักศึกษาจบใหม่สนใจในทำงานด้าน Front-End Develop/Web Develop/Web Design/UX/UI Design ตอนนี้กำลังศึกษา Next.js, typeScript, Tailwind CSS เเละด้าน Back-End Node.js Express.js และต้องการประสบการณ์ใหม่ๆจากการทำงาน และพร้อมที่จะเรียนรู้สิ่งใหม่ๆตลอดเวลา</p>
                        <button onClick={handleClick}><ArrowDownCircle size={25} />  Let's See</button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={avatar} alt='Headder Img' />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
