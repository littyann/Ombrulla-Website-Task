import React from "react";
import './Home.css';
function Home() {
  return (
    <div className="home">
    <div className="linear-gradient absolute mt-[100px]" >
      <div className="mt-[50vh] md:mt-[8vh]" >
        <div className="mx-10 md:mx-0">
          <div
            className="flex md:flex-col flex-wrap md:justify-between flex-col  md:items-center gap-y-96 px-8 md:px-24"
           
          >
            <div
              className="flex justify-center items-center"
             
            >
              <div>
              <div className="max-w-4xl mb-102 md:mb-8" >
                <h4
                  className="text-[14rem] md:text-6xl font-albert-sans font-bolder md:font-semibold md:w-[28.25rem] leading-[1.2]"
                 
                >
                  Manual Inspection is
                  <br />
                  <span
                    className="text-blue-600 font-normal text-[11rem] md:text-6xl font-albert-sans leading-[1.2]"
                    
                  >
                    Slow &amp; Error-Prone
                  </span>
                </h4>
              </div>
              <div
                className="font-normal text-6xl leading-normal md:leading-snug md:text-lg text-[#82858d] font-albert-sans mb-36 md:mb-8"
                data-astro-cid-ehvcvm4h=""
              >
                AI visual inspection, powered by computer vision, revolutionises
                the inspection process in manufacturing, enhancing precision and
                cost-effectiveness, all the while maintaining product
                excellence.
              </div>
              <div className="flex" data-astro-cid-ehvcvm4h="">
                <div data-astro-cid-ehvcvm4h="">
                  <button
                    className="bg-blue-600 text-5xl md:text-base md:leading-5 rounded-full hover:bg-transparent text-white font-sans font-[400] md:font-semibold hover:text-blue-600 px-32 py-16 md:py-2 md:px-4 border border-blue-600 md:w-40 md:h-[3.5rem]"
                   
                  >
                    Schedule Call
                  </button>
                </div>
                <div className="flex flex-row" data-astro-cid-ehvcvm4h="">
                  <button
                    type="button"
                    className="ml-16 md:ml-10 w-44 h-44 md:h-[3.5rem] md:w-[3.5rem] inline-flex items-center rounded-full border border-transparent bg-blue-600 px-14 py-14 md:p-3 text-white hover:text-blue-600 shadow-sm hover:bg-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    aria-label="watch video"
                   
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="w-16 h-16 md:h-7 md:w-7"
                    
                    >
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"></path>
                    </svg>
                  </button>
                  <div
                    className="hidden md:block ml-5 font-medium text-5xl md:text-base font-sans mt-4 cursor-pointer hover:text-primary outline-dark"
                  
                    
                  >
                    Watch Video
                  </div>
                </div>
              </div>
              </div>
              
              <div className="flex flex-col items-center justify-center w-full">
                <div className="border-2 circle border-blue-900 rounded-full overflow-hidden hidden md:block"></div>
                <div className="circle2 border-2 border-white rounded-full overflow-hidden hidden md:block"></div>
                <div className="containerMask">
                <img  src="https://www.ombrulla.com/_astro/ai-visual-inspection_banner_1.f3232628_ZyIKMH.webp" alt="AI visual inspection" className="image-mask rounded-full"/>
                </div>
               
            </div>
          
          
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Home;