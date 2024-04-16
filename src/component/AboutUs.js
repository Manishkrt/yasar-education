'use client'
import React, { useState } from "react";
import FormModal from "./FormModal";

const AboutUs = () => {
  const [showModal, setShowModal] = useState(false);
  const handleEnrollClick = () => {
    setShowModal(true);
  };
  return (
    <section className="Section-AboutUs pt-pb">
      <FormModal  show={showModal} handleClose={() => setShowModal(false)}/>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 text-start position-relative mb-md-0 mb-5">
            <div className="wrapper-aboutus-left">
              <img
                className="rounded-pill img-fluid "
                src="/assets/img/about-img.png" 
              />
            </div>
         
            

           
            
            
            
       
           
          </div>
          <div className="col-lg-6">
            <div className="RightWapperAboutUS">
              <h5 className="d-flex align-items-center gap-3 h5-welcome">
                Welcome To 
                <svg
                className="arrow-svg  subtitle-svg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 55 13"
              >
                <g clipPath="url(#clip0_324_36194)">
                  <path d="M10.5406 6.49995L0.700562 12.1799V8.56995L4.29056 6.49995L0.700562 4.42995V0.819946L10.5406 6.49995Z"></path>
                  <path d="M25.1706 6.49995L15.3306 12.1799V8.56995L18.9206 6.49995L15.3306 4.42995V0.819946L25.1706 6.49995Z"></path>
                  <path d="M39.7906 6.49995L29.9506 12.1799V8.56995L33.5406 6.49995L29.9506 4.42995V0.819946L39.7906 6.49995Z"></path>
                  <path d="M54.4206 6.49995L44.5806 12.1799V8.56995L48.1706 6.49995L44.5806 4.42995V0.819946L54.4206 6.49995Z"></path>
                </g>
              </svg>
                
              </h5>
              <h2>
           
              ORACLE INTERNATIONAL LANGUAGE INSTITUTE
              </h2>
              <p className="text-dark fw-600 ">Best training institute for IELTS, TOEFL, PTE, German, French, Spanish, Chinese & Arabic.</p>
              <p>
              Speak Your Success: Empower Your Journey with Oracle Language Institute – the premier institute for English, IELTS, TOEFL, PTE, German, French, Spanish, Chinese & Arabic.
              </p>
            </div>  

            <div className="row">

              <ul className="Home-page-ul-wrapper">
                <li>
                <div className="Wrapper-RightICon_aboutUS d-flex ProvideBestSupport">
                  <i className="fa-solid fa-check"></i> &nbsp;
                  Seamless Process of Enrolment in language courses
                </div>
                </li>
                <li>
                <div className="Wrapper-RightICon_aboutUS d-flex ProvideBestSupport">
                  <i className="fa-solid fa-check"></i> &nbsp;
                Premier Assistance to Students in all language courses
                </div>
                </li>
                <li>
               
                <div className="Wrapper-RightICon_aboutUS d-flex">
                  <i className="fa-solid fa-check"></i> &nbsp;
                  Diverse Expert Faculty in German, French, Spanish,
               
              </div>
                </li>
             
             <li>
             <div className="Wrapper-RightICon_aboutUS d-flex ProvideBestSupport">
             <i className="fa-solid fa-check"></i> &nbsp;
                  Lifetime Membership after enrolling in any of the language courses 
             </div> 

             </li>
              </ul>
           
            </div> 
            
    <button className="btn-hover DiscoverMore-Abouts color-2" onClick={handleEnrollClick}>Discover More </button>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
