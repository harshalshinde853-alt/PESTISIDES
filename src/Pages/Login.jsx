import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaEye } from "react-icons/fa";
import "../assets/css/Login.css";

function Login() {
  return (
    <div className="login-page">
      <Container>
        <Row className="login-card shadow">

          {/* Left Side */}
          <Col md={5} className="left-panel">
            <div className="logo">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2909/2909762.png"
                alt="logo"
              />
              <div>
                <h4>PestiShop</h4>
                <p>Smart Crop Protection</p>
              </div>
            </div>

            <div className="welcome">
              <h1>Welcome Back!</h1>
              <p>Login to your account</p>
            </div>

            <img
              className="leaf"
              src="https://cdn-icons-png.flaticon.com/512/628/628324.png"
              alt="leaf"
            />
          </Col>

          {/* Right Side */}
          <Col md={7} className="right-panel">
            <h2>Login</h2>

            <Form>

              <Form.Group className="mb-3">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>

                <div className="password-box">
                  <Form.Control
                    type="password"
                    placeholder="Enter your password"
                  />
                  <FaEye className="eye" />
                </div>
              </Form.Group>

              <div className="d-flex justify-content-between mb-3">
                <Form.Check
                  type="checkbox"
                  label="Remember Me"
                />

                <a href="/">Forgot Password?</a>
              </div>

              <Button className="login-btn">
                Login
              </Button>

              <p className="text-center mt-3">
                Don't have an account?
                <a href="/"> Sign Up</a>
              </p>

            </Form>
          </Col>

        </Row>
      </Container>
    </div>
  );
}

export default Login;