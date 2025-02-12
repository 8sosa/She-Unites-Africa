import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./EventsCarousel.css";
import "./EventCarousel.css";
import EventPic from '../Images/eventPic.png'

export const EventCarousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 5000,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
      };
    
      const eventItems = [
        {
            image: EventPic,
            title: 'Event Title 1',
            date: 'Event Date'
        },
        {
            image: EventPic,
            title: 'Event Title 2',
            date: 'Event Date'
        },
        {
            image: EventPic,
            title: 'Event Title 3',
            date: 'Event Date'
        },
      ];

  return (
    <div className="EventsCarousel">
      <Slider {...settings}>
        {eventItems.map((event, index) => (
           <div className="image-container" key={index}>
                <img src={event.image} alt="Sample Event"/>
                <div className="overlay-text mont purp">
                    <h1>{event.title}</h1>
                    <p>{event.date}</p>
                </div>
            </div>
        ))}
      </Slider>
    </div>
  )
}
