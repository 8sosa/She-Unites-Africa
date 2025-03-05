import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./EventsCarousel.css";
import "./EventCarousel.css";
import A from '../Images/events/aa.jpg'
import B from '../Images/events/bb.jpg'
import C from '../Images/events/cc.png'
import D from '../Images/events/dd.JPG'
import E from '../Images/events/ee.JPG'
import F from '../Images/events/ff.JPG'
import G from '../Images/events/gg.png'
import H from '../Images/events/hh.JPG'
import I from '../Images/events/ii.png'
import J from '../Images/events/jj.png'

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

    const eventItems = [
        { image: A },
        { image: B },
        { image: C },
        { image: D },
        { image: E },
        { image: F },
        { image: G },
        { image: H },
        { image: I },
        { image: J }
    ];

    return (
        <div className="EventsCarousel">
            <Slider {...settings}>
                {eventItems.map((event, index) => (
                    <div className="image-container" key={index}>
                        <img src={event.image} alt="Sample Event" />
                        {/* Optional overlay text */}
                        {/* <div className="overlay-text mont purp">
                            <h1>{event.title}</h1>
                            <p>{event.date}</p>
                        </div> */}
                    </div>
                ))}
            </Slider>
        </div>
    )
}
