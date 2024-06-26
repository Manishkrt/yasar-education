'use client'
import React, { useState } from "react";
import FormModal from "./FormModal";
import Link from "next/link";

const AboutUs = () => {
  const [showModal, setShowModal] = useState(false);
  const handleEnrollClick = () => {
    setShowModal(true);
  };
  return (
    <section className="Section-AboutUs pt-pb">
      <FormModal show={showModal} handleClose={() => setShowModal(false)} />
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
              <h5 className="d-flex align-items-center gap-3 h5-welcome mb-5px">
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
              <h2 className="text-capitalize">

                Oracle International Language Institute - Delhi's Premier Language Learning Center
              </h2>
              <p className="text-dark fw-600 mb-1">Unleash Your Potential: Learn Languages with Confidence
              </p>
              <p className="text-dark fw-600 ">Best training institute for IELTS, TOEFL, PTE, German, French, Spanish, Chinese & Arabic. </p>
              <p>ORACLE LANGUAGE INSTITUTE is Delhi's leading language learning institute, dedicated to empowering individuals with the skills and confidence to excel in a globalized world. We offer a comprehensive range of language courses, catering to all levels and learning styles.
              </p>
              <p>
                Speak Your Success: Empower Your Journey with Oracle Language Institute – the premier institute for English, IELTS, TOEFL, PTE, German, French, Spanish, Chinese & Arabic.
              </p>

            </div>

            <div className="row">

              <ul className="Home-page-ul-wrapper">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-12">

                    <li>
                      <div className="Wrapper-RightICon_aboutUS d-flex ProvideBestSupport">

                        <p className="mb-0"> <i className="fa-solid fa-check"></i>&nbsp;Excellence in Education</p>
                      </div>
                    </li>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12">
                  <li>
                    <div className="Wrapper-RightICon_aboutUS d-flex ProvideBestSupport">

                      <p className="mb-0"> <i className="fa-solid fa-check"></i>&nbsp;Wide Range of Languages</p>
                    </div>
                  </li>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12">
                  <li>
                    <div className="Wrapper-RightICon_aboutUS d-flex ProvideBestSupport">

                      <p className="mb-0"> <i className="fa-solid fa-check"></i>&nbsp;Flexible Learning Options</p>
                    </div>
                  </li>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12">
                  <li>
                    <div className="Wrapper-RightICon_aboutUS d-flex ProvideBestSupport">

                      <p className="mb-0"> <i className="fa-solid fa-check"></i>&nbsp;Focus on Communication</p>
                    </div>
                  </li>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12">
                  <li>
                    <div className="Wrapper-RightICon_aboutUS d-flex ProvideBestSupport">

                      <p className="mb-0"> <i className="fa-solid fa-check"></i>&nbsp;Proven Success</p>
                    </div>
                  </li>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12">
                  <li>
                    <div className="Wrapper-RightICon_aboutUS d-flex ProvideBestSupport">

                      <p className="mb-0"> <i className="fa-solid fa-check"></i>&nbsp;Cultural Events & Activities</p>
                    </div>
                  </li>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12">
                  <li>
                    <div className="Wrapper-RightICon_aboutUS d-flex ProvideBestSupport">

                      <p className="mb-0"> <i className="fa-solid fa-check"></i>&nbsp;Career Support</p>
                    </div>
                  </li>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12">
                  <li>
                    <div className="Wrapper-RightICon_aboutUS d-flex ProvideBestSupport">

                      <p className="mb-0"> <i className="fa-solid fa-check"></i>&nbsp;Lifelong Learning Community</p>
                    </div>
                  </li>
                  </div>
                </div>
                {/* previous point imp  */}
                {/* <li>
                  <div className="Wrapper-RightICon_aboutUS d-flex ProvideBestSupport">

                    <p className="mb-0"> <i className="fa-solid fa-check"></i>&nbsp;Seamless Process of Enrolment in language courses</p>
                  </div>
                </li>
                <li>
                  <div className="Wrapper-RightICon_aboutUS d-flex ProvideBestSupport">
                    <p className="mb-0"><i className="fa-solid fa-check"></i>&nbsp;Premier Assistance to Students in all language courses</p>
                  </div>
                </li>
                <li>

                  <div className="Wrapper-RightICon_aboutUS d-flex">

                    <p className="mb-0"><i className="fa-solid fa-check"></i>&nbsp;Diverse Expert Faculty in German, French, Spanish,</p>

                  </div>
                </li> 
                <li>
                  <div className="Wrapper-RightICon_aboutUS d-flex ProvideBestSupport">
                    <p className="mb-0"><i className="fa-solid fa-check"></i>&nbsp;Lifetime Membership after enrolling in any of the language courses </p>
                  </div>

                </li> */}
              </ul>

            </div>
            <div className="d-flex align-items-center mt-3 gap-3">
              <button className="btn-hover DiscoverMore-Abouts color-2 m-0" onClick={handleEnrollClick}>Enquire Now </button>
              <Link href="/about-best-international-laungage-institute-in-delhi" className="btn-hover d-flex align-items-center justify-content-center mt-0 DiscoverMore-Abouts color-2" >Read More </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
