import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';
import { Container, Col, Row } from 'react-bootstrap';
import Logo from '../Images/Logo.png';



export default function Footer() {
    const navLinks = [
        { to: "/about-us", label: "About", ariaLabel: "About Us" },
        { to: "/Events", label: "Events", ariaLabel: "Events" },
        // { to: "/Merch-shop", label: "Merch Shop", ariaLabel: "Merch Shop" },
        { to: "/Donate-to-us", label: "Donate To Us", ariaLabel: "Donate To Us" },
        { to: "/She-Unites-Business", label: "She Unites Business", ariaLabel: "She Unites Business" },
        { to: "/Collaborations", label: "Collaborations", ariaLabel: "Collaborations" },
        // { to: "/Cart", label: "Cart", ariaLabel: "Cart" },
    ];
    const socialLinks = [
        {to: "https://www.facebook.com/SheunitesAfrica", label: "Facebook"},
        {to: "https://www.instagram.com/sheunitesafrica", label: "Instagram"},
        {to: "https://www.linkedin.com/company/violet-care-foundation-powered-by-sheunitesafrica/", label: "LinkedIn"},
        {to: "https://wa.me/+2349013455798", label: "WhatsApp"}
    ]

  return (
    <>
        <div className='footer'>
            <Container className='footerBody'>
                <Row>
                    <Col><img src={Logo} alt="She Unites Business Logo" className='footerLogo'/></Col>
                    <Col>
                        <ul>
                            <li className='footerLinkHeader'>Quick links</li>
                            {navLinks.map(({ to, label, ariaLabel }, index) => (
                            <li key={index} className='footerLinkBody'>
                                <NavLink to={to} aria-label={ariaLabel} className="footerLink">
                                {label}
                                </NavLink>
                            </li>
                            ))}
                        </ul>
                    </Col>
                    <Col>
                        <ul>
                            <li className='footerLinkHeader'>get involved</li>
                            <li className='footerLinkBody'>
                                <NavLink to="/Collaborations" aria-label="Volunteer" className="footerLink">
                                Volunteer
                                </NavLink>
                            </li>
                            <li className='footerLinkBody'>
                                <NavLink to="/Collaborations" aria-label="Become a Partner" className="footerLink">
                                Become a Partner
                                </NavLink>
                            </li>
                            <li className='footerLinkBody'>
                                <NavLink to="/Donate-to-us" aria-label="Donate Now" className="footerLink">
                                Donate Now
                                </NavLink>
                            </li>
                        </ul>
                    </Col>
                    <Col>
                        <ul>
                            <li className='footerLinkHeader' key={'social media'}>social media</li>
                            {socialLinks.map(({to, label}, index) => (
                                <a href={to}><li key={index} className='footerLinkBody'>{label}</li></a>
                            ))}
                        </ul>
                    </Col>
                </Row>
                <Row className='bottomFooter'>
                    <Col xs={9} className='d-flex justify-content-center'><p>© 2024 SHEUNITESAFRICA</p></Col>
                    <Col className='policy'>
                        <p>Privacy Policy</p>
                        <p>Terms of Service</p>
                    </Col>
                </Row>
            </Container>
        </div>
    </>
  )
}
