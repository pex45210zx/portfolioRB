import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from '../assets/img/bgsk.png';
import Level from '../assets/img/Level.png';
import basic from '../assets/img/Basic.png'
import intermediate from '../assets/img/intermediate.png'
import basicBootStrap from '../assets/img/frameworks/Basic-bootstrap.png'
import basicReactBootStrap from '../assets/img/frameworks/Basic-react-bootstrap.png'
import basicFlutter from '../assets/img/frameworks/Basic-flutter.png'
import intermediateReact from '../assets/img/frameworks/Intermediate-react.png'
import intermediateReactVite from '../assets/img/frameworks/intermediate-react-vite.png'
import intermediateAppScript from '../assets/img/frameworks/Intermediate-appScript.png'
import basicDart from '../assets/img/languages/basic-dart.png'
import basicHTML from '../assets/img/languages/basic-html.png'
import basicJavaScript from '../assets/img/languages/basic-javaScript.png'
import basicSQL from '../assets/img/languages/basic-sql.png'
import intermediateCSS from '../assets/img/languages/intermediate-css.png'
import intermediateCplusplus from '../assets/img/languages/intermediate-Cplusplus.png'
import basicAndroidStu from '../assets/img/tools/basic-androidstu.png'
import basicGitlab from '../assets/img/tools/basic-gitLab.png'
import basicMiro from '../assets/img/tools/basic-miro.png'
import intermediateFixma from '../assets/img/tools/intermediate-fixma.png'
import intermediateCanva from '../assets/img/tools/intermediate-canva.png'
import intermediateVScode from '../assets/img/tools/intermediate-vsCode.png'
import intermediateGithub from '../assets/img/tools/intermediate-github.png'
import intermediateDrawIo from '../assets/img/tools/intermediate-drawIO.png'
import advancedChatGpt from '../assets/img/tools/advanced-chatGPT.png'
import advancedSheet from '../assets/img/databases/advanced-gSheet.png'
import basicMySQL from '../assets/img/databases/basic-mySQL.png'


export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };



    return (
        <section className='skill' id='skills'>
            <Container>
                <Row>
                    <Col>
                        <div className='skill-bx'>
                            <h2>
                                Skills
                            </h2>
                            <p>รายละเอียดทักษะ(skills)ที่ทำได้ครับ</p>
                            <div className='skill-level'>
                                <img src={Level} alt='Image'/>
                            </div>
                            <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                                <div className='item'>
                                    <img src={intermediate} alt='Image'/>
                                    <h5>Front-End Development</h5>
                                </div>
                                <div className='item'>
                                    <img src={intermediate} alt='Image'/>
                                    <h5>Web Design</h5>
                                </div>
                                <div className='item'>
                                    <img src={basic} alt='Image'/>
                                    <h5>Logo Design</h5>
                                </div>
                                <div className='item'>
                                    <img src={basic} alt='Image'/>
                                    <h5>Back-End Development</h5>
                                </div>
                                <div className='item'>
                                    <img src={intermediate} alt='Image'/>
                                    <h5>Hardware Development</h5>
                                </div>
                                <div className='item'>
                                    <img src={intermediate} alt='Image'/>
                                    <h5>IOT</h5>
                                </div>
                            </Carousel>
                            <br /><br /><br />
                            <h2>
                                Frameworks
                            </h2>
                            <p>รายละเอียด Frameworks ที่เคยใช้งาน</p>
                            <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                                <div className='item'>
                                    <img src={intermediateReact} alt='Image'/>
                                    <h5>React</h5>
                                </div>
                                <div className='item'>
                                    <img src={basicFlutter} alt='Image'/>
                                    <h5>Flutter</h5>
                                </div>
                                <div className='item'>
                                    <img src={intermediateReactVite} alt='Image'/>
                                    <h5>React-Vite</h5>
                                </div>
                                <div className='item'>
                                    <img src={basicReactBootStrap} alt='Image'/>
                                    <h5>React-Bootstrap</h5>
                                </div>
                                <div className='item'>
                                    <img src={basicBootStrap} alt='Image'/>
                                    <h5>Bootstrap</h5>
                                </div>
                                <div className='item'>
                                    <img src={intermediateAppScript} alt='Image'/>
                                    <h5>Google App Script</h5>
                                </div>
                            </Carousel>
                            <br /><br /><br />
                            <h2>
                                Languages
                            </h2>
                            <p>รายละเอียดภาษาเขียนโปรแกรมที่เคยเขียนครับ</p>
                            <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                                <div className='item'>
                                    <img src={basicJavaScript} alt='Image'/>
                                    <h5>JavaScript</h5>
                                </div>
                                <div className='item'>
                                    <img src={intermediateCSS} alt='Image'/>
                                    <h5>CSS</h5>
                                </div>
                                <div className='item'>
                                    <img src={basicDart} alt='Image'/>
                                    <h5>Dart</h5>
                                </div>
                                <div className='item'>
                                    <img src={basicHTML} alt='Image'/>
                                    <h5>HTML</h5>
                                </div>
                                <div className='item'>
                                    <img src={intermediateCplusplus} alt='Image'/>
                                    <h5>C++</h5>
                                </div>
                                <div className='item'>
                                    <img src={basicSQL} alt='Image'/>
                                    <h5>SQL</h5>
                                </div>
                            </Carousel>
                            <br /><br /><br />
                            <h2>
                                Tools
                            </h2>
                            <p>รายละเอียดเครื่องมือตัวช่วยในการทำงานที่ใช้ครับ</p>
                            <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                                <div className='item'>
                                    <img src={advancedChatGpt} alt='Image'/>
                                    <h5>ChatGPT</h5>
                                </div>
                                <div className='item'>
                                    <img src={intermediateFixma} alt='Image'/>
                                    <h5>Fixma</h5>
                                </div>
                                <div className='item'>
                                    <img src={intermediateCanva} alt='Image'/>
                                    <h5>Canva</h5>
                                </div>
                                <div className='item'>
                                    <img src={intermediateVScode} alt='Image'/>
                                    <h5>Visual Studio Code</h5>
                                </div>
                                <div className='item'>
                                    <img src={intermediateGithub} alt='Image'/>
                                    <h5>Github</h5>
                                </div>
                                <div className='item'>
                                    <img src={basicGitlab} alt='Image'/>
                                    <h5>Gitlab</h5>
                                </div>
                                <div className='item'>
                                    <img src={basicMiro} alt='Image'/>
                                    <h5>Miro</h5>
                                </div>
                                <div className='item'>
                                    <img src={intermediateDrawIo} alt='Image'/>
                                    <h5>Draw IO</h5>
                                </div>
                                <div className='item'>
                                    <img src={basicAndroidStu} alt='Image'/>
                                    <h5>Android Studio</h5>
                                </div>
                            </Carousel>
                            <br /><br /><br />
                            <h2>
                                Databases
                            </h2>
                            <p>รายละเอียดฐานข้อมูลที่เคยใช้ครับ</p>
                            <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                                <div className='item'>
                                    <img src={advancedSheet} alt='Image'/>
                                    <h5>Google Sheet</h5>
                                </div>
                                <div className='item'>
                                    <img src={basicMySQL} alt='Image'/>
                                    <h5>MySQL</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className='background-image-left' src={colorSharp} />
        </section>
    )
}
