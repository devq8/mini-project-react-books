import React from "react";
import "../App.css";
import { Navbar, Nav, Button } from "react-bootstrap";
import List from "./List";

function Home() {
  return (
    <>
      <div className="landing-page">
        <div className="background-image"></div>
        <div className="landing-content">
          <h1 className="title">
            TO SUCCESS
            <br />
            YOU MUST READ
          </h1>
          <Button variant="primary" href="#books-list" className="explore-btn">
            Explore our Books
          </Button>
        </div>
        <Navbar bg="transparent" expand="lg" className="nav-bar">
          <Navbar.Brand href="/">
            <span className="logo-text">Book Shop</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="#books-list">Our Books</Nav.Link>
            </Nav>
            <Nav className="ml-auto">
              <Button variant="outline-light" href="/add-book">
                Add Book
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <List />
    </>
  );
}

export default Home;
