import { Col, Container, Row, Tab, Nav } from "react-bootstrap";
import { ProjectCards } from "./ProjectCards";
import colorSharp2 from "../assets/img/color-sharp2.png"
import projImg1 from "../assets/img/project-img1.png"
import projImg2 from "../assets/img/project-img2.png"
import projImg3 from "../assets/img/project-img3.png"

export const Projects = () => {
    const projects = [
        {
            title: 'business Startup',
            description: 'Design & Development',
            imgUrl: projImg1,
        },
        {
            title: 'business Startup',
            description: 'Design & Development',
            imgUrl: projImg2,
        },
        {
            title: 'business Startup',
            description: 'Design & Development',
            imgUrl: projImg3,
        },
        {
            title: 'business Startup',
            description: 'Design & Development',
            imgUrl: projImg1,
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
                                    <Nav.Link eventKey="first">Tab one</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab two</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">
                                        Tab three
                                    </Nav.Link>
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
                                <Tab.Pane eventKey="second">
                                    Tab two
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    Tab three
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
