import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
// import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { TextCenter } from "react-bootstrap-icons";

export const Projects = () => {

  const projects = [
    {
      title: "Business Startup",
      description:  <a href="https://nour93alhuda.github.io/NH-Shopping/" target="_blank" style={{ fontSize: '24px',color:'white' }}> N H Shopping</a>,
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description:  <a href="https://laptopluxe.vercel.app/" target="_blank" style={{ fontSize: '24px',color:'white' }}> laptopluxe online</a>
      ,
      imgUrl: projImg2,
    },
    {
      title: "Gemini App",
      description:   <a href=" https://chatgpt-rho-amber.vercel.app/" target="_blank" style={{ fontSize: '24px',color:'white' }}> My Chat gpt</a>
      ,
      imgUrl: projImg3,
    },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: projImg1,
    // },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: projImg2,
    // },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: projImg3,
    // },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p></p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                    {/* <Nav.Item>
                      <Nav.Link eventKey="four">Tab 4</Nav.Link>
                    </Nav.Item> */}
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>

                    <Tab.Pane eventKey="second" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                         
                        <a href="https://laptopluxe.vercel.app/" target="_blank" style={{ fontSize: '24px' }}> laptopluxe online</a>
                    
                    </Tab.Pane>
                         {/* <Tab.Pane eventKey="second">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane> */}
                    <Tab.Pane eventKey="third" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                   
                    <a href=" https://chatgpt-rho-amber.vercel.app/" target="_blank" style={{ fontSize: '24px' }}> My Chat gpt</a>
                    
                    </Tab.Pane>
     {/* <Tab.Pane eventKey="third">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane> */}
                    
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
