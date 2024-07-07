import { Container, Row, Col } from "react-bootstrap";

export const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <div>
            <center><span className="tagline">My Portfolio</span>
            
             <h1>Agila A !! </h1>
              <p>
                Hello! I am Agila A studying at RMK engineering college</p>
                <p>BTech IT - 2nd year. I've been learning about all about</p>
                <p>Full stack developmnet and this is my first project using </p>
                <p>React.js and I will continue to sharpen my skills and I </p>
                <p>will make better projects.</p>
              </center>
              
            </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Banner;