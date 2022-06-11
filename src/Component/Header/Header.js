import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";

import "../hooks/UseFirebase";
import UseFirebase from "../hooks/UseFirebase";
const Header = () => {
  const { user, logOut } = UseFirebase();
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
              {user.email ? (
                <Button
                  onClick={logOut}
                  variant="warning"
                  className="mx-3 px-3"
                >
                  Log Out
                </Button>
              ) : (
                <Nav.Link as={HashLink} to="/login">
                  Login
                </Nav.Link>
              )}
              <Navbar.Text className="mx-3">
                Signed in As: <a href="#login">{user.displayName}</a>
              </Navbar.Text>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
