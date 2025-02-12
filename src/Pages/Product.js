import React from 'react'
import { ButtonGroup, Button, Container, Col, Row } from 'react-bootstrap'
import { MerchCarousel } from '../Components/MerchCarousel';
import merchImage from '../Images/merch.jpeg'

export default function Product() {
  return (
    <>
        <div className='mb-5'>
            <Container className='mb-5'>
                <Row className='m-5'>
                    <Col xs={5}><img src={merchImage} alt='Highlight Event Poster' className='poster' /></Col>
                    <Col className='p-1'>
                    <div className='d-flex flex-row jcsb full'>
                        <p className='abtSectionText mont'>UNITES TEE</p>
                        <p className='abtSectionText mont tar'>£200</p>
                    </div>
                    <p className='abtSectionText mont full'>Made from soft, breathable cotton, this shirt features a bold, inspiring design that reflects SHEUNITESAFRICA's mission to uplift and empower women and girls.</p>
                    <div className='d-flex flex-row jcsb'>
                        <ButtonGroup className='quantity'>
                            <Button variant="secondary">-</Button>
                            <Button variant="secondary">3</Button>
                            <Button variant="secondary">+</Button>
                        </ButtonGroup>
                        <button className='atcBtn mont'>add to cart</button>
                    </div>
                    </Col>
                </Row>
            </Container>
        </div>
        <div className='mt-5'>
            <Container className='d-flex flex-column align-items-center mt-5'>
            <h1 className='homeSectionTitle mont purp mb-5'>related products</h1>
                <MerchCarousel />
            </Container>
        </div>
    </>
  )
}
