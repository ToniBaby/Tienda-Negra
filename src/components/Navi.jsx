import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import logo from "../assets/img/logo8.png";

import "../App.css";
const Navi = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, seScrolled] = useState(false);

  useEffect(() => {
    if (window.scrollY > 50) {
      seScrolled(true);
    } else {
      seScrolled(false);
    }

    window.addEventListener("scroll", onscroll);
  }, []);

  const onUpdateActiveLink = value => {
    setActiveLink(value);
  };

  return (
    <Navbar>
      <Container className="navbar">
        <Navbar.Brand href="#home">
          <img src={logo} alt="logo" />
        </Navbar.Brand>

        <Navbar.Collapse className="navi-links">
          <Nav.Link
            href="#home"
            className={
              activeLink === "home" ? "active navbar-link" : "navbar-link"
            }
            onClick={() => onUpdateActiveLink("home")}
          >
            Home
          </Nav.Link>
          <Nav.Link
            href="#brands"
            eventKey="Brands"
            className={
              activeLink === "Brands" ? "active navbar-link" : "navbar-link"
            }
            onClick={() => onUpdateActiveLink("Brands")}
          >
            Brands
          </Nav.Link>
          <Nav.Link
            href="mailto:mainini.tomi@gmail.com"
            className={
              activeLink === "proovedores"
                ? "active navbar-link"
                : "navbar-link"
            }
            onClick={() => onUpdateActiveLink("proovedores")}
          >
            Contact Us
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navi;
