import React from "react";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Navbar from "react-bootstrap/Navbar";
import { Button, Form, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">Cra-tutorial</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link>
            <Link to="/">Home</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/about">About</Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
