import React from 'react'
import './Events.css'
import { EventCarousel } from '../Components/EventCarousel'
import ImpactCarousel from '../Components/impactCarousel';
import { Button, Container, Row, Col } from 'react-bootstrap';
// import Poster from '../Images/poster.png'
import Gallery from '../Components/Gallery';

export default function Events() {
  return (
    <>
      <div className='homeHero'>
        <Container className='homeHeroCont'>
          <h1 className='aboutTitle mont'>she unites africa</h1>
          <h1 className='aboutTitle mont'>events</h1>
        </Container>
      </div>
      {/* <div className='p-5'>
        <Container className='mt-5'>
          <h1 className='eventSectionTitle mont'>highlight</h1>
          <Row className='m-5'>
            <Col xs={4}><img src={Poster} alt='Highlight Event Poster' className='poster' /></Col>
            <Col className='p-5'>
              <div className='d-flex flex-row jcsb full'>
                <p className='abtSectionText mont'>Event Title</p>
                <p className='abtSectionText mont tar'>Event Date</p>
              </div>
              <p className='abtSectionText mont full'>Proin tortor ex, vestibulum eget nunc eu, posuere maximus nibh. Nullam lobortis enim quis eros elementum bibendum et eget enim. Curabitur consectetur sed sem a imperdiet. Ut lectus quam, dictum ac varius elementum, aliquam sit amet odio. Ut sagittis elit ac sapien fermentum auctor.</p>
            </Col>
          </Row>
        </Container>
      </div> */}
      <div>
        <Container>
          {/* <h1 className='eventSectionTitle mont'>upcoming Events</h1>
          <EventCarousel /> */}
          <h1 className='eventSectionTitle mont'>past Events</h1>
          <EventCarousel />
        </Container>
      </div>
      <div>
        <Gallery />
      </div>
      <div className='ytBg'>
        <Container className='d-flex flex-column align-items-center'>
          <h1 className='homeSectionTitle mont mb-5'>impact</h1>
          <ImpactCarousel />
          <span className='moreLink mont mt-5 mb-5'>See More...</span>
        </Container>
      </div>
      <div className='p-5'>
        <Container className='diff m-5'>
          <h1 className='mont'>Join Us in Making a Difference</h1>
          <p className='mont'>SHEUNITESAFRICA thrives on the strength and support of our community. Whether you’re looking to volunteer, collaborate, or make a meaningful contribution, there are many ways to get involved. Together, we can empower women and girls across Africa to drive positive change and build a brighter future.</p>
          <Row className='abtCardBox'>
            <Col>
              <div className='purpCard tall align-items-center p-5 jcsb'>
                <p className='cardText mont mt-5 mb-5'>Looking to make an impact? Join our community by volunteering, becoming a partner, or offering your unique skills.</p>
                <Button className='button'>Get Involved</Button>
              </div>
            </Col>
            <Col>
              <div className='purpCard tall align-items-center p-5'>
                <p className='cardText mont mt-5 mb-5'>Help us reach more women and girls with the resources they need to succeed. Your contribution directly supports our programs and makes our mission possible.</p>
                <Button className='button'>Donate Now</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}
