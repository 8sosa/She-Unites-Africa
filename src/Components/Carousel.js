import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ImageCarousel.css";

import A from "../Images/events/aa.jpg";
import B from "../Images/events/bb.jpg";
import C from "../Images/events/cc.png";
import D from "../Images/events/dd.jpg";
import E from "../Images/events/ee.jpg";
import F from "../Images/events/ff.jpg";
import G from "../Images/events/gg.png";
import H from "../Images/events/hh.jpg";
import I from "../Images/events/ii.png";
import J from "../Images/events/jj.png";
import K from "../Images/events/k.png";
import L from "../Images/events/ll.png";
import M from "../Images/events/mm.png";
import N from "../Images/events/nn.png";

const images = [A, B, C, D, E, F, G, H, I, J, K, L, M, N];

    const ImageCarousel = () => {
        const settings = {
          dots: true,
          infinite: true,
          speed: 600,
          slidesToShow: 3,
          centerMode: true,
          centerPadding: "60px", // space around the centered slide
          autoplay: true,
          autoplaySpeed: 2500,
          pauseOnHover: true,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                centerPadding: "40px",
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                centerPadding: "80px",
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                centerPadding: "20px",
              },
            },
          ],
        };

  return (
    <div style={{ width: "90%", margin: "0 auto", padding: "40px 0" }}>
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index} className="imageContainer">
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="carousel-image"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;
