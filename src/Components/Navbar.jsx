import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  FaSearch,
  FaShoppingCart,
  FaUserCircle,
} from "react-icons/fa";

function CustomNavbar() {
  return (
    <Navbar bg="white" expand="lg" className="shadow-sm py-3">
      <Container>

        <Navbar.Brand as={Link} to="/" className="fw-bold text-success fs-3">
          🌿 PestiShop
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="mx-auto">

            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>

            <Nav.Link as={Link} to="/products">
              Products
            </Nav.Link>

            <Nav.Link as={Link} to="/guides">
              Guides
            </Nav.Link>

            <Nav.Link as={Link} to="/about">
              About Us
            </Nav.Link>

            <Nav.Link as={Link} to="/contact">
              Contact Us
            </Nav.Link>

          </Nav>

          <div className="nav-icons">

            <button className="icon-btn">
              <FaSearch />
            </button>

            <Link to="/cart" className="icon-btn cart-icon">
              <FaShoppingCart />
              <span className="cart-count">0</span>
            </Link>

            <Link to="/login" className="icon-btn">
              <FaUserCircle />
            </Link>

          </div>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default CustomNavbar;