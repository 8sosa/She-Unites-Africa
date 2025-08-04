import React from 'react';
import './About.css';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { FaFistRaised, FaUsers, FaBalanceScale, FaHandsHelping } from "react-icons/fa";
import ImpactCarousel from '../Components/impactCarousel';
import Andrew from "../Images/team/Andrew.jpg";
import Binta from "../Images/team/Binta.jpg";
import Von from "../Images/team/Von.jpg";
import Ana from "../Images/team/Ana.png";
import Chidinma from "../Images/team/Chidinma.jpg";
import Elizabeth from "../Images/team/Elizabeth.jpg";
import Jericho from "../Images/team/Jericho.jpg";
import Meymuna from "../Images/team/Meymuna.JPG";
import Nduka from "../Images/team/Nduka.jpg";
import Ivy from "../Images/team/ivy.jpg";
import Sarah from "../Images/team/Sarah.jpg";
import Catherine from "../Images/team/Catherine.jpg";
import Tendai from "../Images/team/Tendai.jpg";
import Theresa from "../Images/team/Theresa.jpg";
import { Partners } from '../Components/Partners';


export default function About() {
  const team = [
    { firstName: "Anastacia", lastName: "Amarachi Nickson", role:"Founder", src: Ana },
    { firstName: "Chidimma", lastName: "Frances Okoye", role:"Co-Founder", src: Chidinma },
    { firstName: "Yvonne", lastName: "Amaria", role:"Development Director", src: Von },
    { firstName: "Nduka-aku", lastName: "Oluchi Rejoice", role:"Rep for SUA Nigeria", src: Nduka },
    { firstName: "Meymuna", lastName: "Awad Idris", role:"Rep for SUA Ethiopia x Rwanda", src: Meymuna },
    { firstName: "Binta", lastName: "Badije", role:"Rep for SUA Gambia", src: Binta },
    { firstName: "Ivy", lastName: "Kabu", role:"Rep for SUA Ghana", src: Ivy },
    { firstName: "Jericho", lastName: "Nyirenda", role:"Rep for Malawi", src: Jericho },
    { firstName: "Theresa", lastName: "Muparazdi", role:"Rep for SUA Zambia", src: Theresa },
    { firstName: "Elizabeth", lastName: "Phiri", role:"Deputy rep for SUA Zambia", src: Elizabeth },
    { firstName: "Catherine", lastName: "Ndau", role:"Assistant Rep for SUA Malawi ", src: Catherine },
    { firstName: "Sarah", lastName: "Garba", role:"Community Manager", src: Sarah },
    { firstName: "Andrew", lastName: "Phiri", role:"Volunteer Coordinator", src: Andrew },
    { firstName: "Tendai", lastName: "Nyakuhwa", role:"Assistant program coordinator", src: Tendai },
];

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
            <p className='mont'>Our mission is to educate and empower women all over Africa with the skills and confidence for financial independence, maintain a healthy lifestyle, and be the best version of themselves that they can be.</p>
          </div>
          <div className='abtCard'>
            <h1 className='mont'>our vission</h1>
            <p className='mont'>A world where every African female is able to use their voice and be heard, make informed choices as well as decisions and participate in contributing to the economic success of their local and global environment.</p>
          </div>
        </Container>
      </div>
      <div className='abtYtBg1'>
        <Container>
          <h1 className='abtSectionTitle mont'>her story</h1>
          <p className='abtSectionText mont'>Violet Care Foundation for Women and Nature, Powered by SheUnitesAfrica</p>
          <p className='abtSectionText mont'>Originally founded as SheUnitesAfrica (SUA) in 2020 by Miss Anastacia Amarachi Nickson and Miss Chidimma Frances Okoye, our organization was established with a deep commitment to inspiring and empowering females to contribute to societal transformation and positive change. Due to legal registration requirements, we have now evolved into Violet Care Foundation for Women and Nature, powered by SheUnitesAfrica. While our name has changed, our mission remains unwavering: to create a world where women and girls have equal opportunities to thrive.</p>
          <p className='abtSectionText mont'>Through careful research and engagement with vulnerable communities, we recognize that women and girls experience the scourge of poverty in ways that limit their education, financial security, and overall well-being. Our initiatives are designed to bridge this gap, ensuring that females can access the same opportunities as men and boys.</p>
          <p className='abtSectionText mont'>Empowering females through our programs leads to a better quality of life, community development, poverty reduction, food security, improved health awareness, and progress toward sustainable development goals. We are dedicated to meeting the needs of socially and economically disadvantaged females, preparing them for personal, career, and economic success.</p>
          <p className='abtSectionText mont'>At Violet Care Foundation for Women and Nature, our commitment remains strong: to empower females to become the very best version of themselves, ensuring a future where they can lead, inspire, and create lasting change.</p>
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
          <Row className='team'>
            {team.map((member, index) => (
              <Col xs={12} className='team-item' key={index}>
                <img src={member.src} alt={member.firstName} className='teamImg' />
                <h3 className='teamBody shadow1 mont'>{member.firstName}<span className='bold1'> {member.lastName}</span></h3>
                <p className='teamBody altMont'>{member.role}</p>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      <div className='ytBg'>
        <Container className='d-flex flex-column align-items-center'>
          <h1 className='homeSectionTitle mont mb-5'>impact</h1>
          <ImpactCarousel />
          {/* <span className='moreLink mont mt-5 mb-5'>See More...</span> */}
        </Container>
      </div>
      <div className='purpBg'>
        <Container className='d-flex flex-column align-items-center'>
          <h1 className='shopTitle mont'>partners</h1>   
          <Partners />
        </Container>
      </div>
      <div className='ytBg'>
        <Container className='diff'>
          <h1 className='mont'>Join Us in Making a Difference</h1>
          <p className='mont'>SHEUNITESAFRICA thrives on the strength and support of our community. Whether you’re looking to volunteer, collaborate, or make a meaningful contribution, there are many ways to get involved. Together, we can empower women and girls across Africa to drive positive change and build a brighter future.</p>
          <Row className='abtCardBox'>
            <Col>
              <div className='purpCard tall align-items-center jcsb'>
                <p className='cardText mont mb-5'>Looking to make an impact? Join our community by volunteering, becoming a partner, or offering your unique skills.</p>
                <a href='/Collaborations'><Button className='heroBtn mont'>Get Involved</Button></a>
              </div>
            </Col>
            <Col>
              <div className='purpCard tall align-items-center'>
                <p className='cardText mont mb-5'>Help us reach more women and girls with the resources they need to succeed. Your contribution directly supports our programs and makes our mission possible.</p>
                <a href='/Donate-to-us'><Button className='button'>Donate Now</Button></a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}
