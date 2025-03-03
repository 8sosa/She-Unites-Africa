import React from 'react'
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './shop.css'
import { Container } from 'react-bootstrap'
// import { MerchCarousel } from '../Components/MerchCarousel';
// import merchImage from '../Images/merch.jpeg'


export default function Shop() {
  // const settings = {
  //   dots: false,
  //   infinite: false,
  //   speed: 2000,
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  //   autoplay: false,
  //   autoplaySpeed: 6000,
  // };

  // const tags = [
  //   'Shirts',
  //   'Trousers',
  //   'Jackets',
  //   'Shorts',
  //   'Jumpsuits',
  //   'Sweaters',
  //   'Hats',
  // ]
  return (
    <>
      <div className='homeHero'>
        <Container className='homeHeroCont'>
          <h1 className='aboutTitle mont'>shop</h1>
          <h1 className='aboutTitle mont'>she unites africa</h1>
        </Container>
      </div>
      {/* <div className='blackBg'>
        <Container className='d-flex flex-column align-items-center'>
          <h1 className='shopTitle mont mb-5'>merch collection</h1>
          <MerchCarousel />
          <h1 className='sloganShop modak'>SHOP SHE UNITES</h1>
          <div className="EventsCarousel sticky-div">
            <Slider {...settings}>
              {tags.map((tag, index) => (
                <button key={index} className='atcBtn mont m-5'>{tag}</button>
              ))}
            </Slider>
          </div>
          <div className='items'>
            <div className='item'>
              <img
                src={merchImage}
                alt='merch'
                className="EventsCarouselPic merchPic"
              />
              <div className='d-flex flex-row jcsb mont m-4 pl-5 pr-5 deet'>
                  <p>UNITES TEE</p>
                  <p>£200</p>
              </div>
              <button className='atcBtn mont'>add to cart</button>
            </div>
            <div className='item'>
              <img
                src={merchImage}
                alt='merch'
                className="EventsCarouselPic merchPic"
              />
              <div className='d-flex flex-row jcsb mont m-4 pl-5 pr-5 deet'>
                  <p>UNITES TEE</p>
                  <p>£200</p>
              </div>
              <button className='atcBtn mont'>add to cart</button>
            </div>
            <div className='item'>
              <img
                src={merchImage}
                alt='merch'
                className="EventsCarouselPic merchPic"
              />
              <div className='d-flex flex-row jcsb mont m-4 pl-5 pr-5 deet'>
                  <p>UNITES TEE</p>
                  <p>£200</p>
              </div>
              <button className='atcBtn mont'>add to cart</button>
            </div>
            <div className='item'>
              <img
                src={merchImage}
                alt='merch'
                className="EventsCarouselPic merchPic"
              />
              <div className='d-flex flex-row jcsb mont m-4 pl-5 pr-5 deet'>
                  <p>UNITES TEE</p>
                  <p>£200</p>
              </div>
              <button className='atcBtn mont'>add to cart</button>
            </div>
            <div className='item'>
              <img
                src={merchImage}
                alt='merch'
                className="EventsCarouselPic merchPic"
              />
              <div className='d-flex flex-row jcsb mont m-4 pl-5 pr-5 deet'>
                  <p>UNITES TEE</p>
                  <p>£200</p>
              </div>
              <button className='atcBtn mont'>add to cart</button>
            </div>
            <div className='item'>
              <img
                src={merchImage}
                alt='merch'
                className="EventsCarouselPic merchPic"
              />
              <div className='d-flex flex-row jcsb mont m-4 pl-5 pr-5 deet'>
                  <p>UNITES TEE</p>
                  <p>£200</p>
              </div>
              <button className='atcBtn mont'>add to cart</button>
            </div>
          </div>
        </Container>
      </div> */}
    </>
  )
}
