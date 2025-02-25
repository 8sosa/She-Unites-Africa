import React from 'react';
import './Home.css';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
// import EventsCarousel from '../Components/EventsCarousel';
import Vector1 from '../Images/ballongirl.png';
import Vector2 from '../Images/capeVec.png';
import GalleryPic from "../Images/img3.jpg";
import ShirtPic from '../Images/shirt.jpeg';
import Partn from '../Images/partn.png'


export default function Home() {
  return (
    <>
        <div className='homeHero'>
            <Container className='homeHeroCont'>
                <h1 className='heroTitle mont'>Empowering Women Transforming Communities.</h1>
                <Row>
                    <Col>
                        <Button className='heroBtn mont'>Get Involved</Button>
                    </Col>
                    <Col>
                        <Button className='heroBtn mont'>Donate Now</Button>
                    </Col>
                </Row>
            </Container>
        </div>
        <div className='purpBg'>
            <Container className='d-flex flex-column align-items-start'>
                <h1 className='ytTitle mont'>About Us</h1>
                <p className='ytText mont'>Violet Care Foundation for Women and Nature - Powered by She Unites Africa is an organization with special interest in inspiring and motivating females to contribute in transforming the society positively and impacting a positive change.</p>
                <Row className='statementCardRow full'>
                    <Col>
                        <div className='statementCard mont'>
                            <h2 className='statementCardTitle'>Vission</h2>
                            <p className='statementCardText'>A world where every African female is able to use their voice and be heard, make informed choices as well as decisions and participate in contributing to the economic success of their local and global environment.</p>
                        </div>
                    </Col>
                    <Col className='vectorCol'><img src={Vector1} alt='A vector of a lady holding ballons' className='vector1' /></Col>
                </Row>
                <Row className='statementCardRow1 full'>
                    <Col className='vectorCol'><img src={Vector2} alt='A vector of a lady holding ballons' className='vector1' /></Col>
                    <Col>
                        <div className='statementCard mont'>
                            <h2 className='statementCardTitle'>Mission</h2>
                            <p className='statementCardText'>To educate and empower women all over Africa with the skills and confidence for financial independence, maintain a healthy lifestyle, and be the best version of themselves that they can be.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        <div className='ytBg'>
            <Container className='d-flex flex-column align-items-center'>
                {/* <h1 className='purpSectionTitle mont mid'>Upcoming Events</h1>
                <div className='purpSectionTitle mont mob'>
                    <h1>Upcoming</h1>
                    <h1>Events</h1>
                </div>
                <EventsCarousel /> */}
                <h1 className='homeSectionTitle mont'>Overview gallery</h1>
                <div class="gallery">
                    <div class="gallery-item"><img src={GalleryPic} alt='our selves'/></div>
                    <div class="gallery-item"><img src={GalleryPic} alt='our selves'/></div>
                    <div class="gallery-item"><img src={GalleryPic} alt='our selves'/></div>
                    <div class="gallery-item"><img src={GalleryPic} alt='our selves'/></div>
                    <div class="gallery-item"><img src={GalleryPic} alt='our selves'/></div>
                    <div class="gallery-item"><img src={GalleryPic} alt='our selves'/></div>
                    <div class="gallery-item"><img src={GalleryPic} alt='our selves'/></div>
                    <div class="gallery-item"><img src={GalleryPic} alt='our selves'/></div>
                    <div class="gallery-item"><img src={GalleryPic} alt='our selves'/></div>
                </div>
                <h1 className='homeSectionTitle mont mb-5'>impact</h1>
                <Row className='mt-5 mb-5 gap-5'>
                    <Col>
                        <div className='purpCard'>
                            <h1 className='cardTitle mont'>10,000+ Lives Touched:</h1>
                            <span className='cardText mont'>Through workshops, mentorship, and outreach programs, we’ve empowered over 10,000 women and girls to reach their full potential.</span>
                        </div>
                    </Col>
                    <Col>
                        <div className='purpCard'>
                            <h1 className='cardTitle mont'>10,000+ Lives Touched:</h1>
                            <span className='cardText mont'>Through workshops, mentorship, and outreach programs, we’ve empowered over 10,000 women and girls to reach their full potential.</span>
                        </div>
                    </Col>
                </Row>
                <span className='moreLink mont mt-5 mb-5'>See More...</span>
            </Container>
        </div>
        <div className='donateBg'>
            <Container className='donateCont'>
                <h1 className='purpSectionTitle mont mid'>Donate to us</h1>
                <div className='purpSectionTitle mont mob black'>
                    <h1>Donate</h1>
                    <h1>to us</h1>
                </div>
                <p className='donateText mont'>Empowering women through our programs means a better life and development of communities, ending poverty, food security, improved health awareness and sustainable development goals, education, meeting the needs and challenges of socially and economically disadvantaged women, and preparing them for personal, career, and economic success.</p>
                <Button className='heroBtn mont'>Empower Now</Button>
            </Container>
        </div>
        <div className='blackBg'>
            <Container className='d-flex flex-column align-items-center'>
                <h1 className='shopTitle mont'>merch collection</h1>
                <Row>
                    <Col xs={2} className='shopSloganCol'><h1 className='shopSlogan modak'>SHOP SHE UNITES</h1></Col>
                    <Col>
                        <div className='homeShop'>
                            <div className='homeShopItem'>
                                <img src={ShirtPic} alt='item for sale' className='productImg' />
                                <span className='mont'>she unites Tee</span>
                                <span className='mont'>$200</span>
                            </div>
                            <div className='homeShopItem'>
                                <img src={ShirtPic} alt='item for sale' className='productImg' />
                                <span className='mont'>she unites Tee</span>
                                <span className='mont'>$200</span>
                            </div>
                            <div className='homeShopItem'>
                                <img src={ShirtPic} alt='item for sale' className='productImg' />
                                <span className='mont'>she unites Tee</span>
                                <span className='mont'>$200</span>
                            </div>
                            <div className='homeShopItem'>
                                <img src={ShirtPic} alt='item for sale' className='productImg' />
                                <span className='mont'>she unites Tee</span>
                                <span className='mont'>$200</span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        <div className='purpBg'>
            <Container className='d-flex flex-column align-items-center'>
                <h1 className='shopTitle mont'>partners</h1>   
                <Row xs={2} sm={6} md={3} className='partners'>
                    <Col>
                        <img src={Partn} alt='a partner' className='partnerLogo'/>
                    </Col>
                    <Col>
                        <img src={Partn} alt='a partner' className='partnerLogo'/>
                    </Col>
                    <Col>
                        <img src={Partn} alt='a partner' className='partnerLogo'/>
                    </Col>
                    <Col>
                        <img src={Partn} alt='a partner' className='partnerLogo'/>
                    </Col>
                </Row>
            </Container>
        </div>
        <div className='ytBg'>
            <Container className='d-flex flex-column align-items-center m-5'>
                <div className='purpCard align-items-center p-5'>
                    <h1 className='shopTitle mont'>newsletter</h1>
                    <p className='cardText mont mt-5 mb-5'>Join our newsletter to stay updated on all our events and latest happenings, we promise not to spam you.</p>
                    <Form className='d-flex flex-column align-items-center full mont'>
                        <Form.Control className='inputField' name="Email" type="email" placeholder="Email.address@mail.com" autoComplete='true'/>
                        <Button type='submit' className='formButton'>subscribe</Button>
                    </Form>
                </div>
            </Container>
        </div>
    </>
  )
}
