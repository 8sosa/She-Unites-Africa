import React from "react";
import './components.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./EventsCarousel.css";
import EventPic from '../Images/eventPic.png';

const TestimonialCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
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

  const TestimonialCards = [
    {
      image: EventPic,
      title: "Vandora’s Journey to Self-Development",
      tag: "Vandora’s Journey",
      text: `The meeting was elaborate and educative, especially on the importance of developing oneself to make a meaningful impact. I have learned to work on myself, find a good mentor, and speak positively because my thoughts affect my daily life.
      
Vandora joined our mentorship program seeking guidance on personal growth. Through engaging sessions, she discovered the power of self-improvement and positive thinking. She now actively works on building her confidence and finding the right mentor to guide her path.`
    },
    {
      image: EventPic,
      title: "Judith’s Growth Through Mentorship",
      tag: "Judith’s Growth",
      text: `It has been an amazing experience. I’ve been getting enough value that has resulted in tangible growth in what I do.
      
Judith found our mentorship program life-changing. With the insights gained from her sessions, she has experienced visible improvements in her career and personal growth. She is now more confident in applying what she has learned to her daily activities.`
    },
    {
      image: EventPic,
      title: "Beverly’s Networking Breakthrough",
      tag: "Beverly’s Breakthrough",
      text: `I have learned how to network with people, which will help me in my personal growth. I have also learned how to balance work and my personal life to keep my mental and physical health in check.
      
Before joining the program, Beverly struggled with balancing her career and personal well-being. The mentorship sessions taught her the importance of networking and maintaining a work-life balance. Today, she is building meaningful connections while prioritizing her mental and physical health.`
    },
    {
      image: EventPic,
      title: "Hildah’s Path to Career Advancement",
      tag: "Hildah’s Advancement",
      text: `I need to plan, know my roadmap, and stay persistent. Passion will compensate for the hard days. I also learned about networking, mentorship, and choosing action over perfection.
      
Through our program, Hildah gained essential career development strategies. She now understands the significance of having a clear plan, staying resilient, and taking action rather than striving for perfection. Her journey towards career growth is now more structured and purposeful.`
    },
    {
      image: EventPic,
      title: "Sylvanus’ Time Management Transformation",
      tag: "Sylvanus’ Transformation",
      text: `As a working student, I often struggled with stress and fatigue. Through the mentorship sessions, my eyes have been opened to setting boundaries, prioritizing tasks, and organizing my time. Not only am I more productive, but I now make time for self-care.
      
Balancing work and studies was a challenge for Sylvanus. However, with the guidance of our mentors, he has developed better time management skills and learned to set boundaries. He now approaches his daily tasks with greater efficiency and balance.`
    },
    {
      image: EventPic,
      title: "Dennis’ Career and Wellness Boost",
      tag: "Dennis’ Boost",
      text: `The career advancement session was the best. It provided skills and expected outcomes for career growth. The health and wellness session was also purposeful—everything is anchored on good health.
      
Dennis found great value in the program’s career development and health sessions. He now applies strategic career growth techniques while also prioritizing his health, understanding that success is built on a strong foundation of well-being.`
    },
    {
      image: EventPic,
      title: "Lawong’s Mindset Shift",
      tag: "Lawong’s Shift",
      text: `I’ve learned that persistence yields many fruits. Being a good listener, having patience, and preparing my mindset are key to success. Openness is one of the greatest skills I have acquired from this program.
      
For Lawong, the mentorship program provided a much-needed mindset shift. She now approaches challenges with patience, persistence, and an open mind—qualities that will drive her forward in her personal and professional life.`
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
            <p className="testiText">{card.text}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialCarousel;
