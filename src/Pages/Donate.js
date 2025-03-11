import React, {useState} from 'react'
import { Col, Container, Row, Form, Button } from 'react-bootstrap';
import ImpactCarousel from '../Components/impactCarousel';
import { FaFistRaised, FaUsers, FaHandsHelping } from "react-icons/fa";
import axios from 'axios';


export default function Donate() {
  const [activeDonation, setActiveDonation] = useState("");

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    donationAmount: '',
    dedication: '',
    email: '',
  });

   // Handler for donation button clicks
   const handleDonationClick = (amount) => {
    setActiveDonation(amount);
    // Strip currency symbol and spaces, assuming donationAmount is numeric
    const numericAmount = amount.replace(/[^0-9]/g, "");
    setFormData({ ...formData, donationAmount: numericAmount });
  };

  // Generic change handler for form inputs
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Form submission handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Post the form data to your donation endpoint
      const response = await axios.post('/order/donate', formData, { withCredentials: true });
      console.log(process.env.REACT_APP_API_URL)
      
      // If payment is initialized, redirect the user to the payment URL
      if (response.data.paymentUrl) {
        window.location.href = response.data.paymentUrl;
      } else {
        alert('Failed to initialize donation payment.');
      }
    } catch (error) {
      console.error("Donation submission error:", error);
      alert("There was an error processing your donation. Please try again.");
    }
  };


  return (
    <>
      <div className='homeHero mont'>
        <Container className='homeHeroCont'>
          <h1 className='aboutTitle'>donate to</h1>
          <h1 className='aboutTitle'>she unites africa</h1>
          <button className='atcBtn'>DONATE now</button>
        </Container>
      </div>
      <div className='abtYtBg2 p-5'>
        <Container className='abtYtBg2Cont mont'>
          <h1 className='homeSectionTitle tal mb-5'>Why donate?</h1>
          <p className='tal mb-5'>At Violet care foundation powered by SheUnitesAfrica, we believe that empowered women and girls are the foundation of a thriving society. Every donation you make helps us create opportunities for young African girls to access mentorship, education, and essential life skills.</p>
          <h1 className='homeSectionTitle mb-5 tal'>we’ve achieved...</h1>
          <Row className='abtCardBox'>
            <Col md={5}>
              <div className='purpCard tall align-items-start jcsb'>
                <h1 className='tal'>Sponsorships</h1>
                <p className='tal'>Support our events, programs, or initiatives through financial or in-kind sponsorships that directly impact the lives of women and girls.</p>
              </div>
            </Col>
            <Col md={5}>
              <div className='purpCard tall align-items-center jcsb'>
                <h1 className='tal'>Skill-Sharing Programs</h1>
                <p className='tal'>Offer your expertise through workshops, mentorship, or training sessions that equip women and girls with practical skills for personal and professional growth.</p>
              </div>
            </Col>
            <Col md={5}>
              <div className='purpCard tall align-items-center jcsb'>
                <h1 className='tal'>Joint Initiatives</h1>
                <p className='tal'>Co-create programs or campaigns that align with your organization’s goals and our mission, leveraging mutual strengths to achieve shared objectives.</p>
              </div>
            </Col>
            <Col md={5}>
              <div className='purpCard tall align-items-center jcsb'>
                <h1 className='tal'>Product Partnerships</h1>
                <p className='tal'>Collaborate with us to develop co-branded merchandise or services that benefit both parties while contributing to our initiatives.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className='lytPurpBg p-5'>
        <Container className='lytPurpBgCont p-5 d-flex justify-content-center align-items-center'>
          <Form onSubmit={handleSubmit}>
            <div className='d-flex justify-content-center mb-4'>
              <Form.Check
                type="switch"
                id="custom-switch"
                label="RECURRING"
                className='toggle-switch'
              />
            </div>
            <div className="donation-buttons d-flex justify-content-center gap-2 mb-4">
              {["# 10000", "# 25000", "# 50000", "# 100000"].map((amount) => (
                <button
                  key={amount}
                  name="donation"
                  className={`donation-btn ${activeDonation === amount ? "active" : ""}`}
                  aria-label={amount}
                  onClick={(e) => {
                    e.preventDefault();
                    handleDonationClick(amount);
                  }}
                >
                  {amount}
                </button>
              ))}
            </div>
            <div className='donateCard'>
              <div className='d-flex gap-5 mb-3'>
                <Form.Control
                  type="text"
                  placeholder="First Name"
                  name="firstName"
                  className='donation-input'
                  onChange={handleChange}
                />
                <Form.Control
                  type="text"
                  placeholder="Last Name"
                  name="lastName"
                  className='donation-input'
                  onChange={handleChange}
                />
              </div>
              <div className='d-flex gap-5 mb-3'>
                <Form.Control
                  type="number"
                  placeholder={activeDonation || "# 00"}
                  name="donationAmount"
                  className='donation-input'
                  value={formData.donationAmount}
                  onChange={handleChange}
                />
                <Form.Control
                  type="text"
                  placeholder="Dedication"
                  name="dedication"
                  className='donation-input'
                  onChange={handleChange}
                />
              </div>
              <div className='d-flex gap-5 mb-3'>
                <Form.Control
                  type="email"
                  placeholder="Email"
                  name="email"
                  className='donation-input'
                  onChange={handleChange}
                />
              </div>
              <div className='d-flex align-items-center mb-3'>
                <Form.Check label="Join Our Newsletter" name="newsletter" type='checkbox' id='newsletter' />
              </div>
              <Button type='submit' className='button'>DONATE</Button>
            </div>
          </Form>
        </Container>
      </div>
      <div className='ytBg'>
        <Container className='d-flex flex-column align-items-center'>
          <h1 className='homeSectionTitle mont mb-5'>impact</h1>
          <ImpactCarousel />
          <span className='moreLink mont mt-5 mb-5'>See More...</span>
        </Container>
      </div>
      <div className='abtYtBg2 p-5'>
        <Container className='abtYtBg2Cont mont'>
          <h1 className='homeSectionTitle tal mb-5'>Why donate?</h1>
          <p>Transparency is the cornerstone of our work. We believe that every supporter, donor, and partner has the right to know how their contributions are making a difference. That’s why we’re committed to maintaining the highest standards of accountability and openness in everything we do.</p>
          <ol>
            <li>Clear Financial Reporting: We ensure that all donations are tracked and allocated effectively. A detailed breakdown of our expenditures is made available annually, showing exactly how your support drives change.</li>
            <li>Program Impact Tracking: Each initiative we undertake is measured and reported, highlighting the lives touched, communities transformed, and milestones achieved through your support.</li>
            <li>Ethical Practices: Integrity guides our operations. From partner collaborations to donor management, we adhere to strict ethical guidelines to ensure fairness, honesty, and respect for all stakeholders.</li>
            <li>Donor Feedback: We value your voice. Regular updates, newsletters, and opportunities to provide feedback keep our community informed and engaged in shaping the future of SHEUNITESAFRICA.</li>
          </ol>
        </Container>
      </div>
      <div className='lytPurpBg p-5'>
        <Container className='lytPurpBgCont mont'>
          <h1 className='tal'>How We Collaborate</h1>
          <div className='donateCont'>
            <div className='blackCard'>
                <FaHandsHelping className='abtIcon' />
                <h1 className='abtSectionHeader'>Volunteer</h1>
            </div>
            <div className='blackCard'>
                <FaFistRaised className='abtIcon' />
                <h1 className='abtSectionHeader'>Merchandise Support</h1>
            </div>
            <div className='blackCard'>
                <FaUsers className='abtIcon' />
                <h1 className='abtSectionHeader'>Partnership Opportunities</h1>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}
