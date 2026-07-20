import { Container, Row, Col, Button } from "react-bootstrap";
import CustomNavbar from "../components/Navbar";
import "./Home.css";

function Home() {
  return (
    <>
      <CustomNavbar />

      <section className="hero">
        <Container>
          <Row className="align-items-center">

            <Col md={6}>
              <h1>Smart Solutions for Healthy Crops</h1>

              <p>
                Buy quality pesticides, protect your crops and
                improve productivity with PestiShop.
              </p>

              <Button className="hero-btn">
                Get Started
              </Button>
            </Col>

            <Col md={6}>
              <img
                 src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=700"
                 alt="Hero"
                 className="img-fluid"
              />
            </Col>

          </Row>
        </Container>
      </section>
    </>
  );
}

export default Home;