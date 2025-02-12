import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./EventsCarousel.css";
import './MerchCarousel.css';
import merchImage from '../Images/merch.jpeg';

export const MerchCarousel = () => {
  const [merchItems, setMerchItems] = useState([]);
  const [sessionId, setSessionId] = useState(null);
  const [error, setError] = useState(null);


   // Function to get the value of a specific cookie
   const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
  };

  useEffect(() => {
    const sessionIdFromCookie = getCookie('sessionId');
    if (sessionIdFromCookie) {
      setSessionId(sessionIdFromCookie);
    } else {
      const errMsg = 'Session ID not found.';
      setError(errMsg);
      console.error(errMsg);
    }
  }, []);
  console.log(error)

  const settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
  };

  // Fetch products from the backend
  const fetchProducts = async () => {
    try {
      const response = await fetch('/api/products');
      const products = await response.json();
      setMerchItems(products);
    } catch (error) {
      console.error('Failed to fetch products:', error);
    }
  };

  // Call fetchProducts when component mounts
  useEffect(() => {
    fetchProducts();
  }, []);

  // Handle Add to Cart
  const addToCart = async (productId) => {
    try {
      const response = await fetch('/cart/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sessionId,
          productId,
          quantity: 1, // Default quantity is 1, you can modify this based on user input
        }),
      });

      if (response.ok) {
        alert('Product added to cart!');
      } else {
        alert('Failed to add product to cart.');
      }
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  return (
    <div className="EventsCarousel">
      <Slider {...settings}>
        {merchItems.map((merch, index) => (
          <div key={index}>
            <img
              src={merch.image || merchImage} // Use the product image URL
              alt={`Carousel item ${index + 1}`}
              className="EventsCarouselPic"
            />
            <div className='d-flex flex-row jcsb mont m-4 pl-5 pr-5 deet'>
                <p>{merch.productName}</p>
                <p>{merch.price}</p>
            </div>
            <button
              className='atcBtn mont'
              onClick={() => addToCart(merch._id)} // Pass productId to the addToCart function
            >
              Add to cart
            </button>
          </div>
        ))}
      </Slider>
    </div>
  );
};
