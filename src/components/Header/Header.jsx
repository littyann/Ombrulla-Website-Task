import React from "react";
import './Header.css';
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="header">
    
        <nav>
          <div class="w-full  px-20 md:px-24  max-w-none">
            <div className="flex h-[14rem] md:h-16 items-center justify-between gap-x-[68rem] md:gap-x-0">
              <div className="cursor-pointer flex items-center">
                <div className="flex-shrink-0">
                  <a href="/">
                    <img
                      className="block h-28 md:h-8 w-auto"
                      src="https://www.ombrulla.com/logo.svg"
                      alt="Ombrulla"
                    />
                  </a>
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex items-center">
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4 text-blue-500">
                      <Link
                        to="/"
                        className="rounded-md px-3 py-2 font-bold font-sans "
                      >
                        Home
                      </Link>
                      <div className="relative group mt-2 ">
                        <Link
                          to="#"
                          className="dropdown-link rounded-md font-bold font-sans text-black flex flex-row "
                        >
                          <span className="text-black hover:text-blue-500 ">Services</span>
                          <span className="ml-1 mt-1.5">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              aria-hidden="true"
                              class="w-4 h-4 font-bold"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                              ></path>
                            </svg>
                          </span>
                        </Link>
                        <div className="absolute text-base left-0 z-[90] hidden pt-5 space-y-2  group-hover:block font-semibold transition duration-300 ease-in-out font-sans w-64 text-left">
                          <ul className="bg-white ">
                            <a href="/ai-visual-inspection" className="block ">
                              <li className="border-b border-gray-300 px-[0.938rem] py-[1.25rem] font-semibold text-black hover:text-primary">
                                AI Visual Inspection
                              </li>
                            </a>
                            <a
                              href="/ai-infrastructure-inspection"
                              className="block "
                            >
                              <li className="border-b border-gray-300 px-[0.938rem] py-[1.25rem] font-semibold text-black hover:text-primary">
                                AI Infrastructure Inspection
                              </li>
                            </a>
                            <a href="/ai-people-tracking" className="block ">
                              <li class="border-b border-gray-300 px-[0.938rem] py-[1.25rem] font-semibold text-black hover:text-primary">
                                AI People Tracking
                              </li>
                            </a>
                            <a href="/ai-data-analytics" className="block ">
                              <li className="border-b border-gray-300 px-[0.938rem] py-[1.25rem] font-semibold text-black hover:text-primary">
                                AI Data Analytics
                              </li>
                            </a>
                          </ul>
                        </div>
                      </div>
                      <div class="relative group mt-2">
                        <a
                          href="/"
                          class="dropdown-link rounded-md font-bold font-sans text-black flex flex-row hover:text-primary"
                        >
                          <span className="text-black hover:text-blue-500">Product</span>
                          <span className="ml-1 mt-1.5">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              aria-hidden="true"
                              class="w-4 h-4 font-bold"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                              ></path>
                            </svg>
                          </span>
                        </a>
                        <div className="absolute text-base	font-sans left-0 z-[90] hidden pt-5 space-y-2  group-hover:block font-semibold  transition ease-in-out w-72 text-left">
                          <ul className="bg-white">
                            <a
                              href="/asset-performance-management-software"
                              className="block "
                            >
                              <li className="border-b border-gray-300 p-5 text-black hover:text-primary">
                                Asset Performance Management
                              </li>
                            </a>
                          </ul>
                        </div>
                      </div>
                      <a
                        href="/about"
                        className="rounded-md px-3 py-2 font-bold font-sans text-black hover:text-primary"
                      >
                     <span className="text-black hover:text-blue-500">   About</span>
                      </a>
                      <a
                        href="https://blog.ombrulla.com/"
                        className="rounded-md px-3 py-2 font-bold font-sans text-black hover:text-primary"
                      >
                       <span className="text-black hover:text-blue-500"> Blog</span>
                      </a>
                      <a
                        href="/contact"
                        className="rounded-md px-3 py-2 font-bold font-sans text-black hover:text-primary"
                      >
                      <span className="text-black hover:text-blue-500">  Contact</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="-mr-2 flex sm:hidden">
                <button
                  className="inline-flex items-center justify-center rounded-md p-2 text-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
               
                  type="button"
                 
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                  
                    className="block h-28 w-28"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </nav>
    
    </div>
  );
}

export default Header;