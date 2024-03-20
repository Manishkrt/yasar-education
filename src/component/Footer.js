import React from "react";

const Footer = () => {
  return (
    <>
      
      <section className="Footer-section">
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
                 
              
                </ul>
              </div>
              <div className="col-lg-3 right-arrow-foter-wrapper">
                <ul className="">
                  <h5 className="Secondary-orange">Useful Links</h5>

                  <li className="text-white">Home <i class="fa-solid fa-chevron-right"></i></li>
                  <li className="text-white">About <i class="fa-solid fa-chevron-right"></i></li>
                  <li className="text-white">Our Branch <i class="fa-solid fa-chevron-right"></i></li>
                  <li className="text-white">Service <i class="fa-solid fa-chevron-right"></i></li>
                  <li className="text-white">Gallery <i class="fa-solid fa-chevron-right"></i></li>
                  <li className="text-white">Blogs <i class="fa-solid fa-chevron-right"></i></li>
                  <li className="text-white">Kids Section <i class="fa-solid fa-chevron-right"></i></li>
                  <li className="text-white">Contact Us <i class="fa-solid fa-chevron-right"></i> </li>
                </ul>
              </div>
              <div className="col-lg-3">
                <ul>
                  <h5 className="Secondary-orange">Office Location</h5>
                  <li className="text-white"><i className="fa-solid fa-location-dot"></i><span className="fw-500 Secondary-orange">  Connaught Place Details :</span><br></br>3rd Floor, Mythri House, M-5A, Middle Circle, Connaught Place. Delhi - 110001, India </li>
                 
                  <li className="text-white"><i className="fa-solid fa-location-dot"></i> <span className="fw-500 Secondary-orange">Kingsway CampBranch Details:</span><br></br>109 Mall Road, Kingsway Camp, GTB Nagar, (Near GTB Nagar Metro Station Gate No.-1) Delhi 110009</li>
                </ul>
              </div>
              <div className="col-lg-3 wrapper-image-Gallery">
                <ul>
                  <h5 className="Secondary-orange">Contact Us</h5>
                  <li className="text-white"> <i className="fa-solid fa-phone-volume"></i>&nbsp; +91-11-4940-4131</li>
                  <li className="text-white"> <i className="fa-solid fa-phone-volume"></i>&nbsp; +91-9999-17-35-17</li>
                  <li className="text-white"> <i className="fa-solid fa-phone-volume"></i>&nbsp; +91-99-53-988-288</li>
                  <li className="text-white d-flex align-items-center">
                    <i className="fa-solid fa-envelope"></i>&nbsp;inquiry@oracleglobaleducation.com
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

                  <li className="Secondary-orange mb-2 mt-3">
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
