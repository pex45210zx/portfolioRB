import { Col, Container, Row, Tab, Nav } from "react-bootstrap";
import { ProjectCards } from "./ProjectCards";
import colorSharp2 from "../assets/img/color-sharp2.png"
import AquaticCH from "../assets/img/Aquatic-Chiller-proj.svg"
import hrms from "../assets/img/HRMS-proj.svg"

export const Projects = () => {
    const projects = [
        {
            title: 'Final Project',
            description: 'โปรเจ็คจบ เครื่องควบคุมอุณหภูมิน้ำในตู้ปลานาโน ซึ่งทำเพื่อแก้ปัญหาการแกว่งของอุณหภูมิน้ำในตู้เนื่องจากตู้นาโนมีปริมาตรน้ำค่อนข้างน้อย ส่งผลให้เกิดปัญหาต่างๆกับสิ่งมีชีวิตในตู้ เช่น ปลาเป็นโรคจุดขาว น็อคน้ำ พืชไม้น้ำละลาย หยุดการเจริญเติบโต ขอบเขตในการเลี้ยงสิ่งมีชีวิตน้อยลง เป็นต้น และยังมีฟังชันแจ้งเตือนผ่าน Line Application หากอุณภูมิสูงหรือต่ำเกินขอบเขตที่กำหนด โดยโปรเจ็คนี้มีการพัฒนาด้าน Hardware และ Software',
            imgUrl: AquaticCH,
        },
        {
            title: 'Cooperative education',
            description: 'โปรเจ็คสหกิจศึกษา ระบบสารสนเทศการบริหารจัดการความเสี่ยงของสถานพยาบาล(HRMS) เป็นระบบที่ใช้ในการรายงานเหตุความเสี่ยงต่างๆที่เกิดขึ้นโรงพยายามเป็นมาตรฐานอยู่เเล้ว แต่มีปัญหาในความล่าช้าในการดำเนินการเนื่องจากระบบใช้เอกสารในการดำเนินการขั้นตอนต่างๆ ผู้จัดทำจึงได้เล็งเห็นปัญหาดักล่าวจึงได้พัฒนาจากระบบเดิมที่เป็นเอกสารไปเป็น Web Application เผื่อความรวดเร็วในการรายงานเหตุความเสี่ยงและการดำเนินงานแก้ไขความเสี่ยงนั้นๆ โดยเมื่อมีการรายงานความเสี่ยงระบบจะส่งแจ้งเตือนไปยัง Line กลุ่มของเจ้าหน้าที่ตรวจสอบความเสี่ยงเพื่อยืนยันความเสี่ยงและดำเนินการแก้ไขความเสี่ยงนั้นๆได้อย่างทันท่วงที',
            imgUrl: hrms,
        },
    ];


    return (
        <section className='project' id='project'>
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>โปรเจ็คที่เคยทำในช่วงที่เรียนและช่วงฝึกสหกิจศึกษา</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">P1</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">P2</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">P3</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                    <ProjectCards
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane className='second' eventKey="second">
                                </Tab.Pane>
                                <Tab.Pane className='third' eventKey="third">
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} />
        </section>
    )
}
