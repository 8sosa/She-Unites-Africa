import React from 'react';
import './About.css';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { FaFistRaised, FaUsers, FaBalanceScale, FaHandsHelping } from "react-icons/fa";
import Partn from '../Images/partn.png'
import ImpactCarousel from '../Components/impactCarousel';
import Team from "../Images/team.png";

export default function About() {
  return (
    <>
      <div className='homeHero'>
        <Container className='homeHeroCont'>
          <h1 className='aboutTitle mont'>about</h1>
          <h1 className='aboutTitle mont'>she unites africa</h1>
        </Container>
      </div>
      <div className='donateBg'>
        <Container className='abtCardCont'>
          <div className='abtCard'>
            <h1 className='mont'>our mission</h1>
            <p className='mont'>The mission of Women's Empowerment is to educate and empower females over Africa with the skills and confidence necessary to get a job, maintain a healthy lifestyle,  and be the best version of themselves that they can be.</p>
          </div>
          <div className='abtCard'>
            <h1 className='mont'>our vission</h1>
            <p className='mont'>A world where every African female is able to use their voice and be heard, make informed choices as well as decisions and participate in contributing to the economic success of their local and global environment.</p>
          </div>
        </Container>
      </div>
      <div className='abtYtBg1'>
        <Container>
          <h1 className='abtSectionTitle mont'>herstory</h1>
          <p className='abtSectionText mont'>Sheunitesafrica was founded and established by Miss Anastacia Amarachi Nickson and Miss Chidimma Okoye in 2020. Sheunitesafrica is an organization with special interest in inspiring and motivating females to contribute in transforming the society positively and impacting a positive change. </p>
          <p className='abtSectionText mont'>After careful consideration in the research that SUA conducts in vulnerable communities, women and girls experience the scourge of poverty in many ways resulting in missing out on school or females being left out on becoming financially secure. Our initiatives support females to have equal opportunities as men and boys.</p>
          <p className='abtSectionText mont'>Empowering females through our programs means a better life and development of communities, ending poverty, food security, improved health awareness and sustainable development goals, education, meeting the needs and challenges of socially and economically disadvantaged females,and preparing them for personal, career, and economic success. We are dedicated to empowering females to become the very best of themselves.</p>
        </Container>
      </div>
      <div className='abtYtBg2'>
        <Container>
          <h1 className='abtSectionTitle mont'>values</h1>
          <p className='abtSectionText mont'>At SHEUNITESAFRICA, our values are the guiding principles that shape every initiative, decision, and interaction within our organization. These values reflect our commitment to empowering women and girls across Africa, creating a community grounded in support, collaboration, and sustainable impact.</p>
          <Row xs={2}>
            <Col>
              <FaFistRaised className='abtIcon' />
              <h1 className='abtSectionHeader mont'>empowerment</h1>
              <p className='abtSectionText mont'>We believe in the power of uplifting women and girls to unlock their full potential. By providing the resources, support, and encouragement they need, we foster confidence and independence, empowering them to be active change-makers in their communities.</p>
            </Col>
            <Col>
              <FaUsers className='abtIcon mt-4' />
              <h1 className='abtSectionHeader mont'>inclusivity</h1>
              <p className='abtSectionText mont'>Our mission thrives on the foundation of diversity and inclusion. We welcome women and girls from all backgrounds and strive to create an environment where everyone feels valued, respected, and heard.</p>
            </Col>
            <Col>
              <FaBalanceScale className='abtIcon' />
              <h1 className='abtSectionHeader mont'>integrity</h1>
              <p className='abtSectionText mont'>We operate with transparency, honesty, and accountability. Our commitment to ethical practices ensures that we maintain the trust of our community and supporters as we work towards our mission.</p>
            </Col>
            <Col>
              <FaHandsHelping className='abtIcon' />
              <h1 className='abtSectionHeader mont'>compassion</h1>
              <p className='abtSectionText mont'>We lead with compassion and empathy, understanding the unique challenges that women and girls face. This guides us to provide not only resources but also a supportive community where each person is valued.</p>
            </Col>
          </Row>
        </Container>
      </div>
      <div className='purpBg'>
        <Container className='d-flex flex-column align-items-center'>
          <h1 className='shopTitle mont'>The Team</h1>   
          <div class="team">
            <div class="team-item"><img src={Team} alt='our selves'/></div>
            <div class="team-item"><img src={Team} alt='our selves'/></div>
            <div class="team-item"><img src={Team} alt='our selves'/></div>
            <div class="team-item"><img src={Team} alt='our selves'/></div>
            <div class="team-item"><img src={Team} alt='our selves'/></div>
            <div class="team-item"><img src={Team} alt='our selves'/></div>
            <div class="team-item"><img src={Team} alt='our selves'/></div>
            <div class="team-item"><img src={Team} alt='our selves'/></div>
            <div class="team-item"><img src={Team} alt='our selves'/></div>
        </div>
        </Container>
      </div>
      <div className='ytBg'>
        <Container className='d-flex flex-column align-items-center'>
          <h1 className='homeSectionTitle mont mb-5'>impact</h1>
          <ImpactCarousel />
          <span className='moreLink mont mt-5 mb-5'>See More...</span>
        </Container>
      </div>
      <div className='purpBg'>
        <Container className='d-flex flex-column align-items-center'>
          <h1 className='shopTitle mont'>partners</h1>   
          <div className='partners'>
            <img src={Partn} alt='a partner' className='partnerLogo'/>
            <img src={Partn} alt='a partner' className='partnerLogo'/>
            <img src={Partn} alt='a partner' className='partnerLogo'/>
            <img src={Partn} alt='a partner' className='partnerLogo'/>
          </div>
        </Container>
      </div>
      <div className='p-5'>
        <Container className='diff m-5'>
          <h1 className='mont'>Join Us in Making a Difference</h1>
          <p className='mont'>SHEUNITESAFRICA thrives on the strength and support of our community. Whether you’re looking to volunteer, collaborate, or make a meaningful contribution, there are many ways to get involved. Together, we can empower women and girls across Africa to drive positive change and build a brighter future.</p>
          <div className='abtCardBox'>
              <div className='purpCard align-items-center p-5 jcsb'>
                <p className='cardText mont mt-5 mb-5'>Looking to make an impact? Join our community by volunteering, becoming a partner, or offering your unique skills.</p>
                <Button className='button'>Get Involved</Button>
              </div>
              <div className='purpCard align-items-center p-5'>
                <p className='cardText mont mt-5 mb-5'>Help us reach more women and girls with the resources they need to succeed. Your contribution directly supports our programs and makes our mission possible.</p>
                <Button className='button'>Donate Now</Button>
              </div>
          </div>
        </Container>
      </div>
    </>
  )
}
