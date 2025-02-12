import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./EventsCarousel.css";

const ImpactCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
  };

  const impactCards = [
    {
      title: "10,000+ Lives Touched:",
      text: "Through workshops, mentorship, and outreach programs, we’ve empowered over 10,000 women and girls to reach their full potential."
    },
    {
      title: "10,000+ Lives Touched:",
      text: "Through workshops, mentorship, and outreach programs, we’ve empowered over 10,000 women and girls to reach their full potential."
    },
    {
      title: "10,000+ Lives Touched:",
      text: "Through workshops, mentorship, and outreach programs, we’ve empowered over 10,000 women and girls to reach their full potential."
    }
  ];

  return (
    <div className="EventsCarousel">
      <Slider {...settings} className="Slider">
        {impactCards.map((card, index) => (
          <div key={index} className="purpCard impactCard">
            <h1 className='cardTitle mont'>{card.title}</h1>
            <p className='cardText mont'>{card.text}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImpactCarousel;
