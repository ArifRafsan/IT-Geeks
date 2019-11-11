import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";

export default class CustomNavbar extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">IT Geeks</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            {/* <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link> */}
          </Nav>
          <Nav>
            <Nav.Link eventKey={1} href="/" to="">
              Home
            </Nav.Link>
            <Nav.Link eventKey={2} href="/about" to="/about">
              About
            </Nav.Link>
            <Nav.Link eventKey={3} href="/news" to="/news">
              News
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
