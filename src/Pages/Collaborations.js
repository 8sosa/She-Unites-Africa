import React from 'react';
import './Collaborations.css';
import { Col, Container, Row } from 'react-bootstrap';
import Miriam from "../Images/partners/Miriam.jpg";
import Suspads from "../Images/partners/Suspads.jpg";
import Girl from "../Images/partners/Girl.PNG";
import Ladies from "../Images/partners/Ladies.PNG";
import Utunyange from "../Images/partners/Utunyange.JPG";

export default function Collaborations() {
  const partners = [
    {src: Girl, alt: "Girl Up Rwanda"},
    {src: Ladies, alt: "Ladies with Stories"},
    {src: Utunyange, alt: "Utunyange Initiative"},
    {src: Miriam, alt: "Miriam Ujunwa Girls Foundation"},
    {src: Suspads, alt: "Sus Pads"}
  ];

  return (
    <>
      <div className='homeHero mont'>
        <Container className='homeHeroCont'>
          <h1 className='aboutTitle'>Stronger Together:</h1>
          <h1 className='aboutTitle'>Building a Better Future.</h1>
          <button className='atcBtn'>collaborate</button>
        </Container>
      </div>
      <div className='abtYtBg2 p-5 mont'>
        <Container className='d-flex flex-column mt-5 p-5 full align-self-center'>
          <p className='colSectionText'>At SHEUNITESAFRICA, we believe in the power of partnerships to amplify our mission and create lasting impact. By collaborating with organizations, businesses, and individuals who share our vision, we can inspire and empower women and girls to drive meaningful change in their communities and beyond.</p>
          <h1 className='colSectionTitle mb-5'>Why Partner With Us?</h1>
          <h1 className='homeSectionTitle mb-3 mt-5 tal'>1. Shared Vision</h1>
          <p className='colSectionText'>We align with partners who are passionate about creating opportunities for women and girls, ensuring that every collaboration contributes to our mission of empowerment and sustainable development.</p>
          <h1 className='homeSectionTitle mb-3 tal'>2. Amplified Impact</h1>
          <p className='colSectionText'>Together, we can achieve more. By pooling resources, expertise, and networks, our partnerships allow us to expand our reach and deepen our impact in underserved communities.</p>
          <h1 className='homeSectionTitle mb-3 tal'>3. Brand Alignment</h1>
          <p className='colSectionText'>Collaborate with a trusted organization known for integrity, transparency, and commitment to making a difference. Showcase your dedication to social responsibility and women’s empowerment.</p>
        </Container>
      </div>
      <div className='lytPurpBg p-5'>
        <Container className='lytPurpBgCont mont'>
          <h1 className='tal'>How We Collaborate</h1>
          <Row className='abtCardBox p-5'>
            <Col>
              <div className='ytCard tall align-items-start p-5 jcsb'>
                <h1 className='tal'>Sponsorships</h1>
                <p className='tal'>Support our events, programs, or initiatives through financial or in-kind sponsorships that directly impact the lives of women and girls.</p>
              </div>
            </Col>
            <Col>
              <div className='ytCard tall align-items-center p-5 jcsb'>
                <h1 className='tal'>Skill-Sharing Programs</h1>
                <p className='tal'>Offer your expertise through workshops, mentorship, or training sessions that equip women and girls with practical skills for personal and professional growth.</p>
              </div>
            </Col>
            <Col>
              <div className='ytCard tall align-items-center p-5 jcsb'>
                <h1 className='tal'>Joint Initiatives</h1>
                <p className='tal'>Co-create programs or campaigns that align with your organization’s goals and our mission, leveraging mutual strengths to achieve shared objectives.</p>
              </div>
            </Col>
            <Col>
              <div className='ytCard tall align-items-center p-5 jcsb'>
                <h1 className='tal'>Product Partnerships</h1>
                <p className='tal'>Collaborate with us to develop co-branded merchandise or services that benefit both parties while contributing to our initiatives.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className='abtYtBg2'>
        <Container className='d-flex flex-column align-items-center'>
          <h1 className='shopTitle purp mont'>partners</h1>   
          <div className='partners'>
              {partners.map((partner, index) => (
              <img src={partner.src} alt={partner.alt} className='partnerLogo' key={index}/>
              ))}
          </div>
        </Container>
      </div>
        <div className='lytPurpBg p-5'>
          <Container className='lytPurpBgCont mont align-items-center'>
            <h1>Let’s work together to create sustainable impact. Partner with us to empower women and girls and transform communities across Africa.</h1>
            <button className='atcBtn'>Partner With Us</button>
          </Container>
        </div>
    </>
  )
}   