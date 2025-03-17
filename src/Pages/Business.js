import React, { useState } from 'react';
import { Container, Modal } from 'react-bootstrap';
import TestimonialCarousel from '../Components/Testimonial';
import PartnerForm from '../Components/PartnerForm';
import EnterprenuerForm from '../Components/EnterprenuerForm';
import Code from '../Images/biz/code.jpg'
import Dress from '../Images/biz/dress.jpg'
import Farm from '../Images/biz/farm.jpg'
import Write from '../Images/biz/write.jpg'


export default function Business() {
  const [show, setShow] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showModal1, setShowModal1] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', tag: '', description: '', pic: '' });

  const handleClose = () => setShow(false);
  const handleShow = (content) => {
    setModalContent(content);
    setShow(true);
  };
  
  const Businesses = [
    {
      business: 'We Farm',
      description: 'Sustainable agriculture is key to food security and economic growth. At She Unites Africa, we empower women in farming by providing resources, training, and networking opportunities to build successful agribusinesses. Whether in urban or rural settings, we believe women have a vital role in feeding nations.',
      pic: Farm,
    },
    {
      business: 'We Code',
      description: "Technology is the future, and women must be at the forefront of innovation. At She Unites Africa, we provide opportunities for women to learn, collaborate, and build tech-driven solutions. Whether you're a beginner or an experienced coder, we create spaces where you can develop your skills and thrive in the digital world.",
      pic: Code,
    },
    {
      business: 'We Dress',
      description: 'Fashion is more than just clothing—it’s a statement of identity and culture. At She Unites Africa, we support women in the fashion industry, from designers to stylists and entrepreneurs. We encourage creativity, self-expression, and economic empowerment through fashion and design.',
      pic: Dress,
    },
    {
      business: 'We Write',
      description: 'Not all great stories carry the writer’s name, but every powerful message needs a voice. Through She Unites Africa, we support women in ghostwriting and professional writing. We train and connect women writers with paid opportunities, ensuring they thrive in the global writing industry.',
      pic: Write,
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
            <img src={modalContent.pic} alt='first activity' className='modalImg'/>
          </div>
          <p>{modalContent.description}</p>
        </Modal.Body>
      </Modal>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title className='mont'>Partner With Us</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <PartnerForm />
        </Modal.Body>
      </Modal>
      <Modal show={showModal1} onHide={() => setShowModal1(false)}>
        <Modal.Header closeButton>
          <Modal.Title className='mont'>Join as an Enterprenuer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <EnterprenuerForm />
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
          <div className='d-flex flex-row gap-5 align-items-center'>
            {Businesses.map((item, index) => (
              <div key={index} onClick={() => handleShow({ title: item.business, description: item.description, pic: item.pic})} className="business-card">
                <h1>{item.business}</h1>
              </div>
            ))}
          </div>
        </Container>
      </div>
      <div className='lytPurpBg p-5'>
        <Container className='lytPurpBgCont mont'>
          <h1 className='tal'>How to Get Involved</h1>
          <div className='htgi'>
              <div className='ytCard align-items-start p-5 jcsb' onClick={() => setShowModal1(true)}>
                <h1 className='tal'>Entrepreneurs</h1>
                <p className='tal'>Are you a woman with a business idea or an existing venture? Join our programs to gain the skills, funding, and network you need to take your business to the next level.</p>
              </div>
              <div className='ytCard align-items-center p-5 jcsb' onClick={() => setShowModal(true)}>
                <h1 className='tal'>Partners</h1>
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
            <button className='atcBtn' onClick={() => setShowModal1(true)}>Join Our Program</button>
            <button className='atcBtn' onClick={() => setShowModal(true)}>Partner With Us</button>
          </div>
        </Container>
      </div>
    </>
  )
}