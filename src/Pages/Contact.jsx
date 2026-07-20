import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

import CustomNavbar from "../components/Navbar";
import "./Contact.css";

function Contact() {
  return (
    <>
      <CustomNavbar />

      <section className="contact-section py-5">
        <Container>
          <Row className="shadow rounded-4 p-4 bg-white">

            {/* Left Side */}
            <Col lg={3}>
              <h2>Contact Us</h2>
              <p>Have questions? We're here to help!</p>

              <p><FaPhoneAlt /> +91 98765 43210</p>
              <p><FaEnvelope /> support@pestishop.com</p>
              <p>
                <FaMapMarkerAlt />
                123 Green Fields,Agriculture Road,Nashik - 422001<br />
              </p>

              <div className="social-icons">
                <FaFacebookF className="facebook" />
                <FaInstagram className="instagram" />
                <FaYoutube className="youtube" />
                <FaTwitter className="twitter" />
                <FaWhatsapp className="whatsapp" />
              </div>
            </Col>

            {/* Center */}
            <Col lg={5}>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Control type="text" placeholder="Your Name" />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Control type="email" placeholder="Email Address" />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Control
                    as="textarea"
                    rows={5}
                    placeholder="Your Message"
                  />
                </Form.Group>

                <Button
                   type="submit"
                   variant=""
                   className="send-btn"
                 >
                   Send Message
              </Button>
              </Form>
            </Col>

            {/* Right */}
            <Col lg={4}>
              <h3>Our Location</h3>

              <img
                src="https://via.placeholder.com/350x300?text=Map"
                alt="Map"
                className="img-fluid rounded"
              />
            </Col>

          </Row>
        </Container>
      </section>
    </>
  );
}

export default Contact;