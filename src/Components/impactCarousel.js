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
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  const impactCards = [
    {
      title: "2,000+ Lives Transformed:",
      text: "Through our workshops, mentorship, and outreach programs, we have empowered over 2,000 young Africans, including 700+ young girls who have received direct mentorship, equipping them with leadership, career, and life skills for a brighter future."
    },
    {
      title: "50+ Skills Training Sessions:",
      text: "We have organized over 50+ workshops on leadership, digital literacy, entrepreneurship, and advocacy, empowering young women with the tools to succeed."
    },
    {
      title: "20+ Advocacy Campaigns Launched:",
      text: "From gender equality to girls’ education and menstrual health awareness, our advocacy initiatives have impacted communities and shaped policies."
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
