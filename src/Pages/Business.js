import React, { useState } from 'react';
import { Container, Modal } from 'react-bootstrap';
import TestimonialCarousel from '../Components/Testimonial';
import EventPic from '../Images/eventPic.png'


export default function Business() {
  const [show, setShow] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', tag: '', description: '', pic1: '', pic2: ''});

  const handleClose = () => setShow(false);
  const handleShow = (content) => {
    setModalContent(content);
    setShow(true);
  };
  
  const Businesses = [
    {
      business: 'Farming',
      tag: 'We are farmers and we farm. Do you want to farm, also?',
      description: 'This farming venture has transformed the lives of women by providing them with sustainable income opportunities and fostering economic independence. Through training programs and access to resources, women have gained valuable agricultural skills, enabling them to increase crop yields and improve food security for their families. The venture has also created a supportive community where women collaborate, share knowledge, and inspire each other, ultimately empowering them to take on leadership roles and contribute meaningfully to their households and society.',
      pic1: EventPic,
    },
    {
      business: 'Coding',
      tag: 'We are coders and we code. Do you want to code, also?',
      description: 'This farming venture has transformed the lives of women by providing them with sustainable income opportunities and fostering economic independence. Through training programs and access to resources, women have gained valuable agricultural skills, enabling them to increase crop yields and improve food security for their families. The venture has also created a supportive community where women collaborate, share knowledge, and inspire each other, ultimately empowering them to take on leadership roles and contribute meaningfully to their households and society.',
      pic1: EventPic,
    },
    {
      business: 'Dressing',
      tag: 'We are dressers and we dress. Do you want to dress, also?',
      description: 'This farming venture has transformed the lives of women by providing them with sustainable income opportunities and fostering economic independence. Through training programs and access to resources, women have gained valuable agricultural skills, enabling them to increase crop yields and improve food security for their families. The venture has also created a supportive community where women collaborate, share knowledge, and inspire each other, ultimately empowering them to take on leadership roles and contribute meaningfully to their households and society.',
      pic1: EventPic,
    },
  ];

  return (
    <>
      <Modal show={show} onHide={handleClose} centered className='mont'>
        <Modal.Header closeButton>
          <Modal.Title>{modalContent.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className='modalBody'>
          <div className='d-flex flex-row gap-3'>
            <img src={modalContent.pic1} alt='first activity'/>
          </div>
          <p>{modalContent.description}</p>
        </Modal.Body>
      </Modal>


      <div className='homeHero mont'>
        <Container className='homeHeroCont'>
          <h1 className='aboutTitle'>Empowering Entrepreneurs</h1>
          <h1 className='aboutTitle'>Building Futures</h1>
        </Container>
      </div>
      <div className='abtYtBg2 p-5'>
        <Container className='abtYtBg2Cont mont'>
          <h1 className='homeSectionTitle mb-5'>She unites africa business</h1>
          <p className='tal mb-5'>At SHEUNITESAFRICA, we believe that empowering women in business is a powerful catalyst for societal transformation. Through She Unites Business, we create opportunities for women entrepreneurs to grow their ventures, develop essential skills, and connect with a supportive community dedicated to economic empowerment and sustainable impact.</p>
          <h1 className='homeSectionTitle mb-5 tal'>what we offer...</h1>
          <ol>
            <li>Business Training Programs</li>
            <li>Networking Opportunities</li>
            <li>Showcasing Women-Owned Businesses</li>
          </ol>
          <div className='d-flex flex-column gap-5 align-items-center'>
            {Businesses.map((item, index) => (
              <div key={index} onClick={() => handleShow({ title: item.business, description: item.description, tag: item.tag, pic1: item.pic1, pic2: item.pic2 })} className="business-card">
                <h1>{item.business}</h1>
                <p>{item.tag}</p>
              </div>
            ))}
          </div>
        </Container>
      </div>
      <div className='lytPurpBg p-5'>
        <Container className='lytPurpBgCont mont'>
          <h1 className='tal'>How to Get Involved</h1>
          <div className='htgi'>
              <div className='ytCard align-items-start p-5 jcsb'>
                <h1 className='tal'>Entrepreneurs</h1>
                <p className='tal'>Are you a woman with a business idea or an existing venture? Join our programs to gain the skills, funding, and network you need to take your business to the next level.</p>
              </div>
              <div className='ytCard align-items-center p-5 jcsb'>
                <h1 className='tal'>partners</h1>
                <p className='tal'>Support our mission by collaborating with us to provide resources, funding, or mentorship to women entrepreneurs. Together, we can amplify their impact and transform communities.</p>
              </div>
          </div>
        </Container>
      </div>
      <div className='abtYtBg2 p-1'>
        <Container className='abtYtBg2Cont mont'>
          <h1 className='homeSectionTitle mb-5 tal'>Success Stories</h1>
          <p className='tal mb-5'>From Startups to Sustainable Enterprises: Meet women whose lives and businesses have been transformed through our programs. Read inspiring testimonials about resilience, growth, and community impact.</p>
          <TestimonialCarousel />
        </Container>
      </div>
      <div className='lytPurpBg p-5'>
        <Container className='lytPurpBgCont mont align-items-center'>
          <h1>Together, we’re building a future where women entrepreneurs lead the way to economic prosperity and societal change.</h1>
          <div className='d-flex flex-row gap-5'>
            <button className='atcBtn'>Join Our Program</button>
            <button className='atcBtn'>Partner With Us</button>
          </div>
        </Container>
      </div>
    </>
  )
}
