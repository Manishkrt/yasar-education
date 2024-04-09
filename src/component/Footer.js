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
                {/* <h5 className="text-white">About Us</h5> */}


                  <li className="mt-2 text-white">
                  The Oracle International Language Institute brings together under one roof a wide range of international professional and vocational qualifications through its high tech, state of the art teaching centers, strategically located across the country. It offers interesting and innovative programmes blended with industrial experience and practical application..
                  </li>
                  <ul style={{padding:'0px'}}>
                  {/* <h5 className="Secondary-orange">Contact Us</h5>
                  <li className="text-white"> <i className="fa-solid fa-phone-volume"></i>&nbsp; +91-11-4940-4131</li>
                  <li className="text-white"> <i className="fa-solid fa-phone-volume"></i>&nbsp; +91-9999-17-35-17</li>
                  <li className="text-white"> <i className="fa-solid fa-phone-volume"></i>&nbsp; +91-99-53-988-288</li>
                  <li className="text-white d-flex align-items-center">
                    <i className="fa-solid fa-envelope"></i>&nbsp;inquiry@oracleglobaleducation.com
                  </li> */}
                  <div className="Footer-SocialIcons d-flex  mt-3">
             
                    <div className="Facebook">
                      <i className="fa-brands fa-facebook-f"></i>
                    </div>
                    &nbsp;&nbsp;
                    <div className="Linkedin">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </div>
                    &nbsp;&nbsp;
                    <div className="Twitter">
                      <i className="fa-brands fa-twitter"></i>
                    </div>
                    &nbsp;&nbsp;
                    <div className="Youtube">
                      <i className="fa-brands fa-youtube"></i>
                    </div>
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
    style={{ width: '100%'}}
    defaultValue="subscribe"
  />
</div>

                  </li>
                </ul>
              
                </ul>
              </div>
              <div className="col-lg-3 right-arrow-foter-wrapper">
                <ul className="">
                  <h5 className="Secondary-orange-footer">Useful Links</h5>

                  <li className="text-white"><Link className="text-white" href="/"><i className="fa-solid fa-house"></i>&nbsp;&nbsp;Home</Link></li>
                  
                  <li className="text-white"><Link className="text-white" href="/about"><i className="fas fa-info-circle"></i>&nbsp;&nbsp;About</Link></li>
                  <li className="text-white"><Link className="text-white" href="/visit-our-branches-in-delhi"><i className="fas fa-building"></i>&nbsp;&nbsp;Our Branch</Link></li>
                  <li className="text-white"><Link className="text-white" href="/best-international-laungage-service"><i className="fas fa-tools"></i>&nbsp;&nbsp;Service</Link></li>
                  <li className="text-white"><Link className="text-white" href="/visit-our-gallery"><i className="fas fa-images"></i>&nbsp;&nbsp;Gallery</Link></li>
                  <li className="text-white"><Link className="text-white" href="/blog"><i className="fas fa-blog"></i>&nbsp;&nbsp;Blogs</Link></li>
                  <li className="text-white"> <Link className="text-white" href="/visit-our-kids-section"><i className="fas fa-child"></i>&nbsp;&nbsp;Kids Section</Link></li>
                  <li className="text-white"><Link className="text-white" href="/contact-us-for-more-information"><i className="fas fa-phone"></i>&nbsp;&nbsp;Contact Us</Link></li>
                </ul>
              </div>
              <div className="col-lg-3">
                <ul>
                  <h5 className="Secondary-orange-footer">Office Location</h5>
                  <li className="text-white"><i className="fa-solid fa-location-dot"></i> <span className="fw-500 Secondary-orange-footer">Connaught Place:</span><br></br>3rd Floor, Mythri House, M-5A, Middle Circle, Connaught Place, Delhi - 110001, India </li>
                  <li className="text-white"> <i className="fa-solid fa-phone-volume"></i>&nbsp; +91-11-4940-4131</li>
                  <li className="text-white"> <i className="fa-solid fa-phone-volume"></i>&nbsp; +91-9999-17-35-17</li>
                  <li className="text-white"> <i className="fa-solid fa-phone-volume"></i>&nbsp; +91-99-53-988-288</li>
                  <li className="text-white"><i className="fa-solid fa-location-dot"></i> <span className="fw-500 Secondary-orange-footer">Kingsway Camp:</span><br></br>109 Mall Road, Kingsway Camp, GTB Nagar, (Near GTB Nagar Metro Station Gate No.-1) Delhi - 110009, India</li>
                  <li className="text-white"> <i className="fa-solid fa-phone-volume"></i>&nbsp; +91-11-450-41-999</li>
                  <li className="text-white"> <i className="fa-solid fa-phone-volume"></i>&nbsp; +91-9999-745-645</li>

                  <li className="text-white d-flex align-items-center">
                    <i className="fa-solid fa-envelope"></i>&nbsp;inquiry@oracleglobaleducation.com
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 wrapper-image-Gallery">
              <ul className="sitemap-widget">
              <h5 className="Secondary-orange-footer">All Courses</h5>

  
  <li>
    <Link href="best-german-language-institute-in-delhi">
      <i className="fa fa-angle-right" />&nbsp;
      German
    </Link>
  </li>
  <li>
    <Link href="best-spanish-language-institute-in-delhi">
      <i className="fa fa-angle-right" />&nbsp;
      Spanish
    </Link>
  </li>
  <li>
    <Link href="best-english-speaking-course-in-delhi">
      <i className="fa fa-angle-right" />&nbsp;
      English Speak..
    </Link>
  </li>
  <li>
    <Link href="japanese-language-course">
      <i className="fa fa-angle-right" />&nbsp;
      Japanese{" "}
    </Link>
  </li>
  <li>
    <Link href="chainese-language-course">
      <i className="fa fa-angle-right" />&nbsp;
      Chinese{" "}
    </Link>
  </li>
  <li>
    <Link href="best-ielts-coaching-institute-in-delhi">
      <i className="fa fa-angle-right" />&nbsp;
      IELTS Coaching
    </Link>
  </li>
  <li>
    <Link href="hindi-language-course">
      <i className="fa fa-angle-right" />&nbsp;
      Hindi
    </Link>
  </li>
  <li>
    <Link href="arabic-language-course">
      <i className="fa fa-angle-right" />&nbsp;
      Arabic
    </Link>
  </li>
  <li>
    <Link href="best-french-language-institute-in-delhi">
      <i className="fa fa-angle-right" />&nbsp;
      French
    </Link>
  </li>
  <li>
    <Link href="russian-language-course">
      <i className="fa fa-angle-right" />&nbsp;
      Russian
    </Link>
  </li>
  <li>
    <Link href="study-in-abroad">
      <i className="fa fa-angle-right" />&nbsp;
      Study In Abroad
    </Link>
  </li>
  <li>
    <Link href="employability-course">
      <i className="fa fa-angle-right" />&nbsp;
      Employability
    </Link>
  </li>
  <li>
    <Link href="career-counseling">
      <i className="fa fa-angle-right" />&nbsp;
      Career Couns..
    </Link>
  </li>
  <li>
    <Link href="occupational-english-test">
      <i className="fa fa-angle-right" />&nbsp;
      OET Course
    </Link>
  </li>
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
