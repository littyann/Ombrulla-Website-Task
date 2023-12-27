import React from 'react'
import './Footer.css';
function Footer() {
  return (
    <div className='footers'>
      <div className='footer-content'>
        <div className='footer-div'>
        <div className='footer-about'>
          <h3>About Us</h3>
         <p>
         Ombrulla is an AI-driven company specializing in extracting insights from diverse data sources, including photos, videos, and data lakes. Our tailored solutions help businesses make data-driven decisions and improve their bottom line through automation and AI-powered analysis.
         </p>
         <div className='brands'>
          <a href="https://www.facebook.com/Ombrulla.UK" className="hover:text-gray-500 text-white">
           <div className="h-16 w-16 md:h-12 md:w-12 lg:w-8 lg:h-8 xl:h-6 xl:w-6 text-white">
          <i className="fa-brands fa-facebook fa-lg"></i> </div></a>
          <a href="https://www.facebook.com/Ombrulla.UK" className="hover:text-gray-500 text-white">
            <div className="h-16 w-16 md:h-12 md:w-12 lg:w-8 lg:h-8 xl:h-6 xl:w-6 text-white">
          <i className="fa-brands fa-instagram fa-lg"></i></div></a>
          <a href="https://www.facebook.com/Ombrulla.UK" className="hover:text-gray-500 text-white">
           <div className="h-16 w-16 md:h-12 md:w-12 lg:w-8 lg:h-8 xl:h-6 xl:w-6 text-white">
          <i className="fa-brands fa-twitter fa-lg"></i></div></a>
          <a href="https://www.facebook.com/Ombrulla.UK" className="hover:text-gray-500 text-white">
           <div className="h-16 w-16 md:h-12 md:w-12 lg:w-8 lg:h-8 xl:h-6 xl:w-6 text-white">
          <i className="fa-brands fa-linkedin-in fa-lg"></i></div></a>
          <a href="https://www.facebook.com/Ombrulla.UK" className="hover:text-gray-500 text-white">
            <div className="h-16 w-16 md:h-12 md:w-12 lg:w-8 lg:h-8 xl:h-6 xl:w-6 text-white">
          <i className="fa-brands fa-youtube fa-lg"></i></div></a>
         </div>
        </div>
        <div className='xl:gap-8'>
        <div className='footer-abouttwo'>
        <h3>Our Services</h3>
        <ul>
        <li><a className='text-5xl leading-snug md:text-2xl md:leading-tight xl:text-base xl:leading-7' href="">AI Infrastructure Inspection</a> </li>
        <li><a className='text-5xl leading-snug md:text-2xl md:leading-tight xl:text-base xl:leading-7' href="">AI Visual Inspection</a></li>
        <li><a className='text-5xl leading-snug md:text-2xl md:leading-tight xl:text-base xl:leading-7' href="">AI Data Analytics</a></li>
        <li><a className='text-5xl leading-snug md:text-2xl md:leading-tight xl:text-base xl:leading-7' href="">AI People Tracking</a></li>
        </ul>
       
        </div>
        </div>
        
        <div className='footer-aboutthree'>
               <h3>Our Solutions</h3>
               <ul>
               <li><a className='text-5xl leading-snug md:text-2xl md:leading-tight xl:text-base xl:leading-7' href="">Asset Performance Management</a> </li>
        <li><a className='text-5xl leading-snug md:text-2xl md:leading-tight xl:text-base xl:leading-7' href="">Job Grading &amp; Evaluation</a></li>
        <li><a className='text-5xl leading-snug md:text-2xl md:leading-tight xl:text-base xl:leading-7' href="">Compensation Management</a></li>
        <li><a className='text-5xl leading-snug md:text-2xl md:leading-tight xl:text-base xl:leading-7' href="">AI People Tracking</a></li>
               </ul>
        </div>
       <div className='footer-aboutfour'>
            <h3>Reach Us</h3>
            <ul>
              <li>
                <span>
                  <p>United Kingdom, 53 Denton close</p>
                  <p></p>
                  <p>Redhill, Surrey, RH1 5LB</p>
                  <p>+44 787 999 3892</p>
                </span>
              </li>
              <li>
                <span>
                  <p>Germany, Schützenstraße 51A</p>
                  <p></p>
                  <p>Lübeck, 23558</p>
                  <p>+49 179 512 5812</p>
                </span>
              </li>

              <li>
                <span>
                  <p>India, No. 154/20, Royal Space</p>
                  <p></p>
                  <p>Third Floor TI, HSR Layout,</p>
                  <p>560102</p>
                  <p>+91 85900 56435</p>
                </span>
              </li>
            </ul>
       </div>
       
        </div>
       
      </div>
      <div className='footer-base'>
       <p>© 2020 Ombrulla, Inc. All rights reserved.</p>
       </div>
    </div>
  )
}

export default Footer