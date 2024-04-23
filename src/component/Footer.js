import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>

      <section className="Footer-section pt-pb">
        <footer>
          <div className="container wrapper-container-footer">
            <div className="row">
              <div className="col-lg-3 text-start">
                <ul className="p-0">

                  <img className="" src="/assets/img/OracleLeft.png" alt="" width="181px" />



                  <li className="mt-2 text-white text-justify">
                    The Oracle International Language Institute brings together under one roof a wide range of international professional and vocational qualifications through its high tech, state of the art teaching centers, strategically located across the country. It offers interesting and innovative programmes blended with industrial experience and practical application..
                  </li>
                  <ul style={{ padding: '0px' }}>

                    <div className="Footer-SocialIcons d-flex align-items-center gap-2 mt-3">
 
                        <a href="https://www.facebook.com/oraclelanguageinstitute/" className="social-icon-box" target="blank">
                          <i className="fa-brands fa-facebook-f text-white"></i>
                          </a>  
                       
                        <a href="https://www.linkedin.com/company/oracle-international-language-institute" className="social-icon-box" target="blank">
                          <i className="fa-brands fa-linkedin-in text-white"></i>
                          </a>  
                        
                        <a href="https://www.instagram.com/oraclelanguageinstitute/" className="social-icon-box" target="blank">
                          <i className="fa-brands fa-instagram text-white"></i>
                          </a>   
                        <a href="https://twitter.com/LanguageOracle" className="social-icon-box" target="blank">
                          <i className="fa-brands fa-twitter text-white"></i>
                          </a>  
                        
                        <a href="https://www.youtube.com/channel/UC31D8Zz8hOMbJLdZOVpGW9Q" className="social-icon-box" target="blank">
                          <i className="fa-brands fa-youtube text-white"></i>
                          </a>  
                      
                    </div>

                    <li className="Secondary-orange-footer mb-2 mt-3">
                      Subscribe to Our Newsletter
                    </li>
                    <li>
                      <div className="">
                        <input type="text" className="form-control" placeholder="Email Address" />
                        <input
                          type="submit"
                          className="bg-secondary text-white form-control mt-2"
                          style={{ width: '100%' }}
                          defaultValue="subscribe"
                        />
                      </div>

                    </li>
                  </ul>

                </ul>
              </div>
              <div className="col-lg-4 right-arrow-foter-wrapper">
                <div className="row">
                  <div className="col-6">
                  <ul className="p-0">
                  <h5 className="Secondary-orange-footer">Useful Links</h5>
                  <div className="d-fle justify-content-between align-items-center">

                    <li>
                      <Link className="text-white" href="/">
                        <i className="fa-solid fa-hand-point-right text-secondary"></i>&nbsp;
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="text-white" href="/about-best-international-laungage-institute-in-delhi">
                        <i className="fa-solid fa-hand-point-right text-secondary"></i>&nbsp;
                        About
                      </Link>
                    </li>
                    <li>
                      <Link className="text-white" href="/visit-our-branches-in-delhi">
                        <i className="fa-solid fa-hand-point-right text-secondary"></i>&nbsp;
                        Our Branch
                      </Link>
                    </li> 
                    <li>
                      <Link className="text-white" href="/best-international-laungage-service">
                        <i className="fa-solid fa-hand-point-right text-secondary"></i>&nbsp;
                        Service
                      </Link>
                    </li>
                    <li>
                      <Link className="text-white" href="/visit-our-gallery">
                        <i className="fa-solid fa-hand-point-right text-secondary"></i>&nbsp;
                        Gallery
                      </Link>
                    </li>
                    <li>
                      <Link className="text-white" href="/blog">
                        <i className="fa-solid fa-hand-point-right text-secondary"></i>&nbsp;
                        Blogs
                      </Link>
                    </li> 
                    <li>
                      <Link className="text-white" href="/visit-our-kids-section">
                        <i className="fa-solid fa-hand-point-right text-secondary"></i>&nbsp;
                        Kids Section
                      </Link>
                    </li>
                    <li>
                      <Link className="text-white" href="/contact-us-for-more-information">
                        <i className="fa-solid fa-hand-point-right text-secondary"></i>&nbsp;
                        Contact Us
                      </Link>
                    </li>

                  </div>



                </ul>
                  </div>
                  <div className="col-6">
                  <ul className="sitemap-widget p-0">
                  <h5 className="Secondary-orange-footer">All Courses</h5>
                  <div className="d-fle justify-content-between align-items-center">

                    <li>
                      <Link href="/best-german-language-institute-in-delhi">
                        <i className="fa-solid fa-hand-point-right text-secondary"></i>&nbsp;
                        German
                      </Link>
                    </li> 
                    <li>
                      <Link href="/best-spanish-language-institute-in-delhi">
                        <i className="fa-solid fa-hand-point-right text-secondary"></i>&nbsp;
                        Spanish
                      </Link>
                    </li> 
                    <li>
                      <Link href="/best-english-speaking-course-in-delhi">
                        <i className="fa-solid fa-hand-point-right text-secondary"></i>&nbsp;
                        English Speak..
                      </Link>
                    </li> 
                    <li>
                      <Link href="/best-japanese-laungage-institute-in-delhi">
                        <i className="fa-solid fa-hand-point-right text-secondary"></i>&nbsp;
                        Japanese{" "}
                      </Link>
                    </li> 
                    <li>
                      <Link href="/best-chinese-laungage-institute-in-delhi">
                        <i className="fa-solid fa-hand-point-right text-secondary"></i>&nbsp;
                        Chinese{" "}
                      </Link>
                    </li> 
                    <li>
                      <Link href="/best-ielts-coaching-institute-in-delhi">
                        <i className="fa-solid fa-hand-point-right text-secondary"></i>&nbsp;
                        IELTS Coaching
                      </Link>
                    </li> 
                    <li>
                      <Link href="/best-hindi-laungage-institute-in-delhi">
                        <i className="fa-solid fa-hand-point-right text-secondary"></i>&nbsp;
                        Hindi
                      </Link>
                    </li>
                    <li>
                      <Link href="/best-arabic-laungage-institute-in-delhi">
                        <i className="fa-solid fa-hand-point-right text-secondary"></i>&nbsp;
                        Arabic
                      </Link>
                    </li>
                    <li>
                      <Link href="/best-french-language-institute-in-delhi">
                        <i className="fa-solid fa-hand-point-right text-secondary"></i>&nbsp;
                        French
                      </Link>
                    </li> 
                    <li>
                      <Link href="/best-russian-laungage-institute-in-delhi">
                        <i className="fa-solid fa-hand-point-right text-secondary"></i>&nbsp;
                        Russian
                      </Link>
                    </li> 

                    <li>
                      <Link href="/best-counsiling-for-study-in-abroad-in-delhi">
                        <i className="fa-solid fa-hand-point-right text-secondary"></i>&nbsp;
                        Study In Abroad
                      </Link>
                    </li> 
                    {/* <li>
                      <Link href="employability-course">
                        <i className="fa-solid fa-hand-point-right text-secondary"></i>&nbsp;
                        Employability
                      </Link>
                    </li>  */}
                    {/* <li>
                      <Link href="career-counseling">
                        <i className="fa-solid fa-hand-point-right text-secondary"></i>&nbsp;
                        Career Couns..
                      </Link>
                    </li> */}
                    <li>
                      <Link href="/occupational-english-test">
                        <i className="fa-solid fa-hand-point-right text-secondary"></i>&nbsp;
                        OET Course
                      </Link>
                    </li> 
</div>
                </ul>
                  </div>
                </div>
                
                
              </div>
              <div className="col-lg-3">
                <ul className="p-0">
                  <h5 className="Secondary-orange-footer">Office Location</h5>
                  <li className="text-white mb-5"><i className="fa-solid fa-location-dot text-secondary"></i> <span className="fw-bold Secondary-orange-footer border-bottom">Connaught Place:</span><br></br>3rd Floor, Mythri House, M-5A, Middle Circle, Connaught Place, Delhi - 110001, India 
                  <p className="text-white">
                  <i className="fa-solid fa-envelope text-secondary"></i>&nbsp;Inquiry@oracleglobaleducation.com
                  </p>
                  </li>



                  <li className="text-white mb-0"><i className="fa-solid fa-location-dot text-secondary"></i> <span className="fw-500 Secondary-orange-footer border-bottom fw-bold">Kingsway Camp:</span><br></br>109 Mall Road, Kingsway Camp, GTB Nagar, (Near GTB Nagar Metro Station Gate No.-1) Delhi - 110009, India</li>

 
                </ul>
              </div>
              <div className="col-lg-2 wrapper-image-Gallery">

                <ul className="p-0">
                  <h5 className="Secondary-orange-footer">Contact Us</h5>

                  <li className="text-white"> <i className="fa-solid fa-phone-volume text-secondary"></i>&nbsp; +91-11-4940-4131</li>
                  <li className="text-white"> <i className="fa-solid fa-phone-volume text-secondary"></i>&nbsp; +91-9999-17-35-17</li>

                  <li className="text-white mb-5 pb-3"> <i className="fa-solid fa-phone-volume text-secondary"></i>&nbsp; +91-99-53-988-288</li>
                  
                  <li className="text-white"> <i className="fa-solid fa-phone-volume text-secondary"></i>&nbsp; +91-11-450-41-999</li>
                  <li className="text-white"> <i className="fa-solid fa-phone-volume text-secondary"></i>&nbsp; +91-9999-745-645</li>

                 
                </ul>

              </div>
            </div>
          </div>
        </footer>
      </section>
      

      <section className="Mini-Footer-Wrapper">
        <div className="container text-enter">
          <h6> Copyright 2024 | Eduacation</h6>
        </div>
      </section>
    </>
  );
};

export default Footer;
