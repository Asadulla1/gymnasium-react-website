import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import "../hooks/UseFirebase";
const Header = () => {
  return (
    <div>
      <Navbar
        sticky="top"
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Container>
          <Navbar.Brand href="#home" className="text-warning">
            Crossfit Gym
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link as={HashLink} to="/home#home" className="mx-3">
                Home
              </Nav.Link>
              <Nav.Link as={HashLink} to="/packages#packages" className="mx-3">
                Our Packages
              </Nav.Link>
              <Nav.Link as={HashLink} to="/trainer#trainer" className="mx-3">
                Our Trainer
              </Nav.Link>
              <Nav.Link as={HashLink} to="/pricesandplans" className="mx-3">
                Prices & Plans
              </Nav.Link>
              <Nav.Link as={HashLink} to="/schedule" className="mx-3">
                Schedule
              </Nav.Link>
              <Button variant="warning" className="mx-3 px-3">
                Log In
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
