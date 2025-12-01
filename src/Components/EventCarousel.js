import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./EventCarousel.css";
import "./EventsCarousel.css";

import A from "../Images/events/aa.jpg";
import B from "../Images/events/bb.jpg";
import C from "../Images/events/cc.png";
// import D from "../Images/events/dd.jpg";
import DA from "../Images/events/dd.jpg";
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

export const EventCarousel = () => {
  const sliderRef = useRef(null);
  const [ready, setReady] = useState(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    centerMode: true,
    slidesToShow: 1, // 🖥️ default for large screens
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: false,
    swipeToSlide: true,
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setReady(true);
      window.dispatchEvent(new Event("resize"));
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (sliderRef.current && sliderRef.current.slickPlay) {
      console.log("🎬 Starting autoplay...");
      sliderRef.current.slickPlay();
    }
  }, [ready]);

  useEffect(() => {
    if (sliderRef.current) {
      console.log("Slick methods:", sliderRef.current);
    }
  }, [ready]);

  const images = [A, B, C, DA, E, F, G, H, I, J, K, L, M, N];

  if (!ready) return <div className="text-center">Loading carousel...</div>;

  return (
    <div className="EventsCarousel">
      <div className="carousel-wrapper">
        <Slider ref={sliderRef} {...settings}>
          {images.map((image, index) => (
            <div className="image-container" key={index}>
              <img
                src={image}
                alt={`Event ${index}`}
                className="EventsCarouselPic"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
