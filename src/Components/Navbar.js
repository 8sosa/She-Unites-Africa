import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import { useState } from 'react';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import { NavLink } from 'react-router-dom';
import { RiMenu4Line } from "react-icons/ri";
import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa6";
import Logo from '../Images/Logo.png';

export default function NavBar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navLinks = [
      { to: "/about-us", label: "About", ariaLabel: "About Us" },
    { to: "/Events", label: "Events", ariaLabel: "Events" },
    // { to: "/Merch-shop", label: "Merch Shop", ariaLabel: "Merch Shop" },
    { to: "/Donate-to-us", label: "Donate To Us", ariaLabel: "Donate To Us" },
    { to: "/She-Unites-Business", label: "She Unites Business", ariaLabel: "She Unites Business" },
    { to: "/Collaborations", label: "Collaborations", ariaLabel: "Collaborations" },
    // { to: "/Cart", label: "Cart", ariaLabel: "Cart" },
  ];

  const renderNavLinks = (onClick = () => {}) =>
    navLinks.map(({ to, label, ariaLabel }) => (
      <Nav.Link
        key={to}
        as={to.includes("#") ? HashLink : NavLink}
        to={to}
        className="navLink inter"
        onClick={onClick}
        aria-label={ariaLabel}
        smooth="true"
      >
        {label}
      </Nav.Link>
    ));

  return (
    <Navbar collapseOnSelect expand="lg" className="navbar" as="nav">
      <Container className="navbarContainer">
        <Navbar.Brand href="/">
          <img src={Logo} alt="SUA Logo" className="suaLogo" />
        </Navbar.Brand>
        {/* Desktop Links */}
        <div className="navLinks">{renderNavLinks()}</div>
        {/* Mobile Menu Toggle */}
        <div >
          <RiMenu4Line onClick={handleShow} className="navbarToggle"/>
          <div className='navSocials mid'>
            <a href='https://www.facebook.com/SheunitesAfrica'><FaFacebookF className='navSocial'/></a>
            <a href= "https://www.instagram.com/sheunitesafrica"><FaInstagram className='navSocial'/></a>
            <a href="https://www.linkedin.com/company/violet-care-foundation-powered-by-sheunitesafrica/"><FaLinkedinIn className='navSocial'/></a>
          </div>
        </div>
      </Container>
      {/* Mobile Offcanvas Menu */}
      <Offcanvas show={show} onHide={handleClose} placement="end" className="navbarMenu">
        <Offcanvas.Header closeButton />
        <Offcanvas.Body className="d-flex flex-column align-items-center">
          {renderNavLinks(handleClose)}
          <div className='d-flex flex-row navSocials'>
            <a href='https://www.facebook.com/SheunitesAfrica'><FaFacebookF className='navSocial'/></a>
            <a href= "https://www.instagram.com/sheunitesafrica"><FaInstagram className='navSocial'/></a>
            <a href="https://www.linkedin.com/company/violet-care-foundation-powered-by-sheunitesafrica/"><FaLinkedinIn className='navSocial'/></a>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </Navbar>
  );
}