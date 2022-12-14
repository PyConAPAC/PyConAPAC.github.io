import './header.css';

import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";

export default function Header() {
  return (
    <>
      <Navbar expand="xl" className="pb-4 pt-4">
        <Container>
          <Navbar.Brand href="/">
            <img src="images/logo.png" alt="PyCon APAC" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand`}>
            <img src="images/menu-toggle.png" alt="toggle" />
          </Navbar.Toggle>
          <Navbar.Offcanvas
              id={`offcanvasNavbar-expand`}
              aria-labelledby={`offcanvasNavbarLabel-expand`}
              placement="start"
              scroll
            >
              <Offcanvas.Header className="bg-black-100" closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand`}>
                  <img src="images/logo.png" alt="PyCon APAC" />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body style={{ alignItems: 'center '}}>
                <Nav className="justify-content-end flex-grow-1 pe-3 pl-3 pr-3">
                  <Nav.Link href="#top" className="text-white scroll-to-section active">Home</Nav.Link>
                  <Nav.Link href="#about" className="text-white scroll-to-section">About</Nav.Link>
                  <Nav.Link href="#what-we-do" className="text-white scroll-to-section">What We Do</Nav.Link>
                  <Nav.Link href="#events" className="text-white scroll-to-section">Events</Nav.Link>
                  <Nav.Link href="#code-of-conduct" className="text-white scroll-to-section">Code of Conduct</Nav.Link>
                </Nav>
                <a href="#contact-us">
                  <button className="button-primary">Contact Us</button>
                </a>
              </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  )
}