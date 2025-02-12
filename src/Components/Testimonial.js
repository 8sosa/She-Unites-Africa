import React from "react";
import './components.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./EventsCarousel.css";
import EventPic from '../Images/eventPic.png'

const TestimonialCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 6000,
  };

  const TestimonialCards = [
    {
        image: EventPic,
        title: "From Passion to Profit",
        tag: "Amina’s Journey",
        text: `When Amina, a single mother from Lagos, decided to turn her passion for baking into a business, she faced countless challenges, including limited funds and a lack of business knowledge. Through SHEUNITESAFRICA’s Business Training Program, Amina learned how to manage her finances, market her brand, and attract customers.
            
        With the help of a microloan from our funding initiative, Amina expanded her bakery, hired two employees, and now supplies her baked goods to local cafes. Today, her business provides financial stability for her family and inspires other women in her community to pursue their dreams.`,
    },
    {
        image: EventPic,
        title: "Empowering Women in Tech",
        tag: "Fatima’s Leap",
        text: `Fatima, a university graduate with a passion for technology, struggled to find job opportunities in her field due to a lack of practical experience. Through our Women in Tech program, she received mentorship, hands-on training, and the opportunity to work on real-world projects.

        Today, Fatima works as a software developer for a leading tech company and mentors other young women aspiring to build careers in technology.`,
    },
  ];

  return (
    <div className="EventsCarousel">
      <Slider {...settings} className="Slider">
        {TestimonialCards.map((card, index) => (
          <div key={index} className="TestimonialCard mont">
            <div className="testimonial-header">
                <img
                    src={card.image}
                    alt={card.title}
                    className="testimonial-avatar"
                />
                <div className="testimonial-header-text">
                    <h5 className="testimonial-title">{card.title}</h5>
                    <h6 className="testimonial-tag">{card.tag}</h6>
                </div>
            </div>
            <p className='testiText'>{card.text}</p>
          </div>
          
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialCarousel;
