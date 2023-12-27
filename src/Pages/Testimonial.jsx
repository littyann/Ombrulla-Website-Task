import React from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
function Testimonial() {
  const slider = React.useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
   
  };
  return (
    <div className="my-32 md:mb-8 md:mt-0" >
      <section
        className="bg-blue-950 p-24 py-36 md:py-16 font-sans flex flex-col gap-y-4"
      
      >
        <div
          className="flex flex-col text-white gap-y-16 md:gap-y-8 lg:gap-y-8 max-w-full"
        
        >
          <div className="flex items-baseline gap-5">
            <div className="flex items-baseline">
              <svg
                version="1.2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-8 h-8 md:w-2 md:h-2"
               
              >
                <path
                  fill="#0000ff"
                  fill-rule="evenodd"
                  d="m0 4.8q0-1 0.4-1.8 0.3-0.9 1-1.6 0.7-0.7 1.6-1 0.8-0.4 1.8-0.4h14.4q1 0 1.8 0.4 0.9 0.3 1.6 1 0.7 0.7 1 1.6 0.4 0.8 0.4 1.8v14.4q0 1-0.4 1.8-0.3 0.9-1 1.6-0.7 0.7-1.6 1-0.8 0.4-1.8 0.4h-14.4q-1 0-1.8-0.4-0.9-0.3-1.6-1-0.7-0.7-1-1.6-0.4-0.8-0.4-1.8z"
                 
                ></path>
              </svg>
              <h3
                className="text-5xl md:text-sm md:leading-4 font-medium md:font-bold font-albert-sans ml-6 md:ml-4"
                
              >
                OUR TESTIMONIALS
              </h3>
            </div>
          </div>
          <h2
            className="text-8xl leading-snug md:text-4xl font-medium font-sans text-white"
            
          >
            What Customers Say About Us
          </h2>
        </div>
        <div className="relative w-full overflow-hidden" >
          <div
            className="relative py-16 md:py-8 overflow-hidden rounded-lg h-[70rem] md:h-[28rem]"
           
          >
             <Slider ref={slider} {...settings}>
            <div
              className="duration-1000 ease-in-out transition-transform transform pe-5 w-full md:w-[48%]"
             
            >
              <div className="md:flex md:flex-col" >
                <blockquote
                  className="md:flex md:flex-col bg-white rounded-lg"
                 
                >
                  <div
                    className="relative text-lg md:flex-grow px-10 py-16 text-slate-500"
                    
                  >
                    <svg
                      className="absolute top-0 left-0 h-8 w-8 translate-x-4 translate-y-6 transform text-indigo-600"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                     
                    >
                      <path
                        d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"
                        
                      ></path>
                    </svg>
                    <p
                      className="relative text-6xl leading-snug md:text-base md:leading-7 text-gray-500 py-2 md:py-1"
                      
                    >
                      Ombrulla's AI people tracking solution has impressively
                      enhanced our ability to seamlessly monitor and manage foot
                      traffic. The system's accuracy and real-time insights not
                      only streamline operations but also elevate overall
                      security measures.
                    </p>
                  </div>
                  <footer
                    className="mt-8 bg-slate-300 py-10 md:py-5 px-5"
                   
                  >
                    <div className="flex items-center">
                      <div
                        className="inline-flex flex-shrink-0 rounded-full border-2 border-white"
                       
                      >
                        <img
                          src="https://www.ombrulla.com/_astro/shipcom.ee1ba5d2_o18LH.webp"
                          className="h-20 w-20 rounded-full"
                          alt="Shipcom wireless"
                          
                          width="520"
                          height="520"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                      <div className="ml-4" >
                        <div
                          className="text-4xl md:text-base font-medium"
                          
                        >
                          Quresh Goga
                        </div>
                        <div
                          className="text-4xl md:text-base font-medium text-indigo-400"
                          
                        >
                          Shipcom wireless
                        </div>
                      </div>
                    </div>
                  </footer>
                </blockquote>
              </div>
            </div>
            <div
              className="duration-1000 pe-5 ease-in-out transition-transform transform w-full md:w-[48%] slide-others"
             
            >
              <div className="md:flex md:flex-col" >
                <blockquote
                  className="md:flex md:flex-col bg-white rounded-lg"
                 
                >
                  <div
                    className="relative text-lg md:flex-grow px-10 py-16 text-slate-500"
                    
                  >
                    <svg
                      className="absolute top-0 left-0 h-8 w-8 translate-x-4 translate-y-6 transform text-indigo-600"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                     
                    >
                      <path
                        d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"
                        
                      ></path>
                    </svg>
                    <p
                      className="relative text-6xl leading-snug md:text-base md:leading-7 text-gray-500 py-2 md:py-1"
                      
                    >
                      Ombrulla's AI people tracking solution has impressively
                      enhanced our ability to seamlessly monitor and manage foot
                      traffic. The system's accuracy and real-time insights not
                      only streamline operations but also elevate overall
                      security measures.
                    </p>
                  </div>
                  <footer
                    className="mt-8 bg-slate-300 py-10 md:py-5 px-5"
                   
                  >
                    <div className="flex items-center">
                      <div
                        className="inline-flex flex-shrink-0 rounded-full border-2 border-white"
                       
                      >
                        <img
                          src="https://www.ombrulla.com/_astro/shipcom.ee1ba5d2_o18LH.webp"
                          className="h-20 w-20 rounded-full"
                          alt="Shipcom wireless"
                          
                          width="520"
                          height="520"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                      <div className="ml-4" >
                        <div
                          className="text-4xl md:text-base font-medium"
                          
                        >
                          Quresh Goga
                        </div>
                        <div
                          className="text-4xl md:text-base font-medium text-indigo-400"
                          
                        >
                          Shipcom wireless
                        </div>
                      </div>
                    </div>
                  </footer>
                </blockquote>
              </div>
            </div>
            <div
              className="duration-1000 pe-5 ease-in-out transition-transform transform w-full md:w-[48%] slide-others"
             
            >
              <div className="md:flex md:flex-col" >
                <blockquote
                  className="md:flex md:flex-col bg-white rounded-lg"
                 
                >
                  <div
                    className="relative text-lg md:flex-grow px-10 py-16 text-slate-500"
                    
                  >
                    <svg
                      className="absolute top-0 left-0 h-8 w-8 translate-x-4 translate-y-6 transform text-indigo-600"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                     
                    >
                      <path
                        d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"
                        
                      ></path>
                    </svg>
                    <p
                      className="relative text-6xl leading-snug md:text-base md:leading-7 text-gray-500 py-2 md:py-1"
                      
                    >
                      Ombrulla's AI people tracking solution has impressively
                      enhanced our ability to seamlessly monitor and manage foot
                      traffic. The system's accuracy and real-time insights not
                      only streamline operations but also elevate overall
                      security measures.
                    </p>
                  </div>
                  <footer
                    className="mt-8 bg-slate-300 py-10 md:py-5 px-5"
                   
                  >
                    <div className="flex items-center">
                      <div
                        className="inline-flex flex-shrink-0 rounded-full border-2 border-white"
                       
                      >
                        <img
                          src="https://www.ombrulla.com/_astro/shipcom.ee1ba5d2_o18LH.webp"
                          className="h-20 w-20 rounded-full"
                          alt="Shipcom wireless"
                          
                          width="520"
                          height="520"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                      <div className="ml-4" >
                        <div
                          className="text-4xl md:text-base font-medium"
                          
                        >
                          Quresh Goga
                        </div>
                        <div
                          className="text-4xl md:text-base font-medium text-indigo-400"
                          
                        >
                          Shipcom wireless
                        </div>
                      </div>
                    </div>
                  </footer>
                </blockquote>
              </div>
            </div>
            <div
              className="duration-1000 pe-5 ease-in-out transition-transform transform w-full md:w-[48%] slide-others"
             
            >
              <div className="md:flex md:flex-col" >
                <blockquote
                  className="md:flex md:flex-col bg-white rounded-lg"
                 
                >
                  <div
                    className="relative text-lg md:flex-grow px-10 py-16 text-slate-500"
                    
                  >
                    <svg
                      className="absolute top-0 left-0 h-8 w-8 translate-x-4 translate-y-6 transform text-indigo-600"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                     
                    >
                      <path
                        d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"
                        
                      ></path>
                    </svg>
                    <p
                      className="relative text-6xl leading-snug md:text-base md:leading-7 text-gray-500 py-2 md:py-1"
                      
                    >
                      Ombrulla's AI people tracking solution has impressively
                      enhanced our ability to seamlessly monitor and manage foot
                      traffic. The system's accuracy and real-time insights not
                      only streamline operations but also elevate overall
                      security measures.
                    </p>
                  </div>
                  <footer
                    className="mt-8 bg-slate-300 py-10 md:py-5 px-5"
                   
                  >
                    <div className="flex items-center">
                      <div
                        className="inline-flex flex-shrink-0 rounded-full border-2 border-white"
                       
                      >
                        <img
                          src="https://www.ombrulla.com/_astro/shipcom.ee1ba5d2_o18LH.webp"
                          className="h-20 w-20 rounded-full"
                          alt="Shipcom wireless"
                          
                          width="520"
                          height="520"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                      <div className="ml-4" >
                        <div
                          className="text-4xl md:text-base font-medium"
                          
                        >
                          Quresh Goga
                        </div>
                        <div
                          className="text-4xl md:text-base font-medium text-indigo-400"
                          
                        >
                          Shipcom wireless
                        </div>
                      </div>
                    </div>
                  </footer>
                </blockquote>
              </div>
            </div>
          
            </Slider>
          
          </div>
        
          <button
            type="button"
            className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer"
            onClick={() => slider?.current?.slickPrev()}
          >
            <span
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-600 opacity-60"
              data-astro-cid-jfcioroc=""
            >
              <svg
                className="w-4 h-4 text-white dark:text-gray-800"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
                data-astro-cid-jfcioroc=""
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 1 1 5l4 4"
                  data-astro-cid-jfcioroc=""
                ></path>
              </svg>
              <span className="sr-only" data-astro-cid-jfcioroc="">
                Previous
              </span>
            </span>
          </button>
          <button
            type="button"
            className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer"
            onClick={() => slider?.current?.slickNext()}
          >
            <span
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-600 opacity-60"
              data-astro-cid-jfcioroc=""
            >
              <svg
                className="w-4 h-4 text-white dark:text-gray-800"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
                data-astro-cid-jfcioroc=""
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 9 4-4-4-4"
                  data-astro-cid-jfcioroc=""
                ></path>
              </svg>
              <span className="sr-only" data-astro-cid-jfcioroc="">
                Next
              </span>
            </span>
          </button>
          
         

        </div>
      </section>
    </div>
  );
}

export default Testimonial;