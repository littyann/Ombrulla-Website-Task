import React from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Customers() {

  const settings = {
    dots: false,
    infinite: true,
    speed: 100,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 3000,
   rtl:true,
  };
  return (
    <div className="my-32 md:mb-28 md:mt-0">
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex justify-center items-baseline mb-8 md:mb-1">
            <svg
              version="1.2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-6 h-6 md:w-2 md:h-2"
            >
              <path
                fill="#0000ff"
                fill-rule="evenodd"
                d="m0 4.8q0-1 0.4-1.8 0.3-0.9 1-1.6 0.7-0.7 1.6-1 0.8-0.4 1.8-0.4h14.4q1 0 1.8 0.4 0.9 0.3 1.6 1 0.7 0.7 1 1.6 0.4 0.8 0.4 1.8v14.4q0 1-0.4 1.8-0.3 0.9-1 1.6-0.7 0.7-1.6 1-0.8 0.4-1.8 0.4h-14.4q-1 0-1.8-0.4-0.9-0.3-1.6-1-0.7-0.7-1-1.6-0.4-0.8-0.4-1.8z"
              ></path>
            </svg>
            <h4 className="text-center text-5xl md:text-sm font-medium font-sans mb-8 md:mb-[1.125rem] mx-4">
              OUR CUSTOMERS
            </h4>
            <svg
              version="1.2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-6 h-6 md:w-2 md:h-2"
            >
              <path
                fill="#0000ff"
                fill-rule="evenodd"
                d="m0 4.8q0-1 0.4-1.8 0.3-0.9 1-1.6 0.7-0.7 1.6-1 0.8-0.4 1.8-0.4h14.4q1 0 1.8 0.4 0.9 0.3 1.6 1 0.7 0.7 1 1.6 0.4 0.8 0.4 1.8v14.4q0 1-0.4 1.8-0.3 0.9-1 1.6-0.7 0.7-1.6 1-0.8 0.4-1.8 0.4h-14.4q-1 0-1.8-0.4-0.9-0.3-1.6-1-0.7-0.7-1-1.6-0.4-0.8-0.4-1.8z"
              ></path>
            </svg>
          </div>
          <h2 className="text-8xl md:text-5xl font-medium text-center  font-sans tracking-tight mb-[1.125rem]">
            They Trust Us
          </h2>
          <div className="mt-16  lg:mt-10">
            <div className="mx-6">
            <Slider  {...settings}>
          
              <div>
                <img src="https://www.ombrulla.com/damac.webp" style={{width:'230px',padding:'40px'}} alt="" />
              </div>
              <div>
                <img src="https://www.ombrulla.com/planet-fitness.webp"  style={{width:'230px',padding:'40px'}} alt="" />
              </div>
              <div>
                <img src="https://www.ombrulla.com/suja.webp"  style={{width:'230px',padding:'40px'}} alt="" />
              </div>
              <div>
                <img src="https://www.ombrulla.com/azelit.webp"  style={{width:'230px',padding:'40px'}} alt="" />
              </div>
              <div>
                <img src="https://www.ombrulla.com/best-western.webp"  style={{width:'230px',padding:'40px'}} alt="" />
              </div>
              
              <div>
                <img src="https://www.ombrulla.com/dubai-festival-city.webp"  style={{width:'230px',padding:'40px'}} alt="" />
              </div>
              <div>
                <img src="https://www.ombrulla.com/wild-leaf.webp"  style={{width:'230px',padding:'40px'}} alt="" />
              </div>
              <div>
                <img src="https://www.ombrulla.com/emirates.webp"  style={{width:'230px',padding:'40px'}} alt="" />
              </div>
              <div>
                <img src="https://www.ombrulla.com/burger-king.webp"  style={{width:'230px',padding:'40px'}} alt="" />
              </div>
             
             
            </Slider>
          
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Customers;