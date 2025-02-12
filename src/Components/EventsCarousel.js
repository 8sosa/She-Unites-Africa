import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./EventsCarousel.css";
import EventPic from "../Images/talkFlier.png";

const EventsCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
  };

  const imageItems = [
    EventPic,
    EventPic,
    EventPic
  ];

  return (
    <div className="EventsCarousel">
      <Slider {...settings}>
        {imageItems.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Carousel item ${index + 1}`}
              className="EventsCarouselPic"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default EventsCarousel;
