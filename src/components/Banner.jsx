import React from "react";

function Banner() {
  return (
    <div className="md:h-screen mx-16 mt-10" >
      <div
        className="w-full h-auto md:h-5/6 bg-[#152b54] font-sans text-white flex flex-col rounded-[6rem] xl:rounded-3xl"
        style={{background:"url('https://www.ombrulla.com/images/home/position-statement.svg')",backgroundSize:"cover"}}
      >
        <div className="flex flex-col my-auto mx-auto p-24 md:p-8 text-black">
          <div className="grid grid-rows-1 gap-y-8 md:gap-y-6 xl:gap-y-4 py-16 md:py-8">
            <div className="flex md:items-baseline">
              <svg
                version="1.2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-9 h-10 md:w-2 md:h-2"
              >
                <path
                  fill="#0000ff"
                  fill-rule="evenodd"
                  d="m0 4.8q0-1 0.4-1.8 0.3-0.9 1-1.6 0.7-0.7 1.6-1 0.8-0.4 1.8-0.4h14.4q1 0 1.8 0.4 0.9 0.3 1.6 1 0.7 0.7 1 1.6 0.4 0.8 0.4 1.8v14.4q0 1-0.4 1.8-0.3 0.9-1 1.6-0.7 0.7-1.6 1-0.8 0.4-1.8 0.4h-14.4q-1 0-1.8-0.4-0.9-0.3-1.6-1-0.7-0.7-1-1.6-0.4-0.8-0.4-1.8z"
                ></path>
              </svg>
              <div className="font-medium md:font-bold font-albert-sans text-5xl md:text-sm md:leading-4 ml-5 mb-3 md:ml-4 md:mb-2">
                <h1>The Best AI Service Provider</h1>
              </div>
            </div>
            <h2 className="text-8xl md:text-5xl xl:text-5xl leading-tight font-medium mb-2 md:max-w-xl lg:max-w-xl xl:max-w-2xl 2xl:max-w-5xl">
              Crafting Tomorrow's World with{" "}
              <span className="text-primary font-normal">AI Excellence</span>
            </h2>
            <p className="text-6xl md:text-lg md:max-w-2xl 2xl:max-w-4xl leading-normal md:leading-relaxed text-gray-500 font-albert-sans xl:text-base mb-4 md:mb-0">
              The majority of customers lack data-driven insights and
              automation. Using AI, Ombrulla assist clients in extracting data
              from diverse sources such as photos, videos, and data lakes, which
              can assist businesses in making data-driven insights and improving
              their bottom line.
            </p>
            <div className="flex">
              <button
                type="button"
                className="h-24 w-24 md:w-12 md:h-12 lg:h-[3.5rem] lg:w-[3.5rem] inline-flex items-center rounded-full border border-transparent bg-blue-600 p-3 text-white hover:text-blue-600 shadow-sm hover:bg-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
               
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-12 w-12 ml-3 md:ml-0 md:h-7 md:w-7"
                >
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"></path>
                </svg>
              </button>
              <div
                className="ml-5 font-medium text-5xl md:text-base xl:text-base font-sans mt-8 md:mt-3 xl:mt-4 cursor-pointer hover:text-blue-600"
                
              >
                Watch Corporate Video
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;