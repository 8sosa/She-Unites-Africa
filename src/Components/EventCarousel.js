import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./EventsCarousel.css";
import "./EventCarousel.css";

export const EventCarousel = () => {
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
            breakpoint: 992,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
    };

    const importAll = (requireContext) => {
        return requireContext.keys().map(requireContext);
      };
      
    const images = importAll(require.context('../Images/events', false, /\.(png|jpe?g|svg)$/));
      

    return (
        <div className="EventsCarousel">
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div className="image-container" key={index}>
                        <img src={image} alt={`Event ${index}`} />
                    </div>
                ))}
            </Slider>
        </div>
    )
}
