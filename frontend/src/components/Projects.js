import React from "react";
import { Container, Row, Col} from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import "animate.css";
import TrackVisibility from "react-on-screen";
import projectImg1 from "../assets/img/project-img1.jpeg";
import projectimg02 from "../assets/img/projectimg02.jpeg";

const Projects = () => {
 
  const projects = [
    {
      title: "E-commerce Website",
      description: "My first e-commerce website that I created using HTML and CSS",
      imgUrl: projectImg1,
    },
    {
      title: "E-commerce Website",
      description: "My first e-commerce website that I created using HTML and CSS",
      imgUrl: projectimg02,
    },
    
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <Row>
                    {projects.map((project, index) => (
                      <Col md={4} key={index}>
                        <ProjectCard
                          title={project.title}
                          description={project.description}
                          imgUrl={project.imgUrl}
                        />
                      </Col>
                    ))}
                  </Row>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      
    </section>
  );
};

export default Projects;
