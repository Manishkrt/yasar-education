import React from "react";

const Footer = () => {
  return (
    <>
      
      <section className="Footer-section">
        <footer>
          <div className="container wrapper-container-footer">
            <div className="row">
              <div className="col-lg-3">
                <ul>
                  <img src="https://bracketweb.com/eduact-html/assets/images/footer-logo-two.png" />

                  <li>
                    <i className="fa-solid fa-location-dot"></i> &nbsp; 6391
                    Elgin Delaware 10299
                  </li>
                  <li>
                    <i className="fa-solid fa-phone-volume"></i> &nbsp; (303)
                    555-0105
                  </li>
                  <li>
                    <i className="fa-solid fa-envelope"></i> &nbsp;michael.mitc
                  </li>
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
                </ul>
              </div>
              <div className="col-lg-3">
                <ul>
                  <h5 className="text-white">Quick Links</h5>

                  <li>Latest Courses</li>
                  <li>Mission & Vision</li>
                  <li>Our Approach</li>
                  <li>Exclusive Advisors</li>
                  <li>Join A Carrer</li>
                </ul>
              </div>
              <div className="col-lg-3">
                <ul>
                  <h5 className="text-white">Explore</h5>
                  <li>About Us</li>
                  <li>Upcoming Events</li>
                  <li>Blog & News</li>
                  <li>FAQ Question</li>
                  <li>Testimonial</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
              <div className="col-lg-3 wrapper-image-Gallery">
                <ul>
                  <h5 className="text-white">Gallery</h5>
                  <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-6 px-1 ">
                      <img
                        src="https://bracketweb.com/eduact-html/assets/images/gallery/fg-1.jpg" 
                        className="img-fluid"
                      />
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 px-1">
                      <img
                        src="https://bracketweb.com/eduact-html/assets/images/gallery/fg-2.jpg"
                        className="img-fluid"
                      />
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 px-1">
                      <img
                        src="https://bracketweb.com/eduact-html/assets/images/gallery/fg-3.jpg"
                        className="img-fluid"
                      />
                    </div>
                    <div className="col-lg-4 col-md-4  col-sm-6 px-1">
                      <img
                        src="https://bracketweb.com/eduact-html/assets/images/gallery/fg-3.jpg"
                        className="img-fluid"
                      />
                    </div>
                    <div className="col-lg-4 col-md-4  col-sm-6 px-1">
                      <img
                        src="https://bracketweb.com/eduact-html/assets/images/gallery/fg-3.jpg"
                        className="img-fluid"
                      />
                    </div>
                    <div className="col-lg-4 col-md-4  col-sm-6 px-1">
                      <img
                        src="https://bracketweb.com/eduact-html/assets/images/gallery/fg-3.jpg"
                        className="img-fluid"
                      />
                    </div>
                  </div>
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
