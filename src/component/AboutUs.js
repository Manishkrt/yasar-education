import React from "react";

const AboutUs = () => {
  return (
    <section className="Section-AboutUs pt-pb">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 text-start position-relative mb-md-0 mb-5">
            <div className="wrapper-aboutus-left">
              <img
                className="rounded-pill"
                src="https://www.oracleglobaleducation.com/images/about/about-img.png" style={{width:'500px'}}
              />
            </div>
         
            

           
            
            
            
       
           
          </div>
          <div className="col-lg-6">
            <div className="RightWapperAboutUS">
              <h5 className="d-flex align-items-center gap-3">
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
              The Oracle International Language Institute brings together under one roof a wide range of international professional and vocational qualifications through its high tech, state of the art teaching centers, strategically located across the country. It offers interesting and innovative programmes blended with industrial experience and practical application that will appeal to the academic community as well as to a range of other sectors in the market place..
              </p>
            </div> 
            {/* <div className="position-relative pb-2 bg-soft1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 295 125" style={{width: "260px"}} className="position-absolute top-0 start-0">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M86 0.0805664H58C25.9675 0.0805664 0 26.048 0 58.0806V79.5806C0 104.157 19.9233 124.081 44.5 124.081H46.5C69.9721 124.081 89 105.053 89 81.5806C89 58.1085 108.028 39.0806 131.5 39.0806H268C282.912 39.0806 295 26.9923 295 12.0806C295 5.45315 289.627 0.0805664 283 0.0805664H89H86Z" fill="#F57005"
                />
              </svg>
              <div className="position-relative" style={{paddingLeft:"90px", paddingTop:"50px"}}>
                <p>
                  The generated Lorem Ipsum is therefore always free from
                  repetition, injected humour, or non-characteristic words etc.
                </p>
              </div> 
              <p className="text-white position-absolute" style={{left:"70px",top:"7px"}}>Flexible Classes</p> 
              <span className="position-absolute" style={{top:"40px", left:"17px"}}>
                <i className="fa-solid fa-person-chalkboard text-white fa-xl"></i>
              </span>
            </div> */}

            <div className="row mt-4">
              <div className="col-lg-6">
                <div className="Wrapper-RightICon_aboutUS d-flex">
                  <i className="fa-solid fa-check"></i> &nbsp;&nbsp;&nbsp;&nbsp;
                  <h6>Free Incoming method</h6>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="Wrapper-RightICon_aboutUS d-flex ProvideBestSupport">
                  <i className="fa-solid fa-check"></i> &nbsp;&nbsp;&nbsp;&nbsp;
                  <h6>Provide Best Support</h6>
                </div>
              </div>
              <div className="col-lg-6 mt-3">
                <div className="Wrapper-RightICon_aboutUS d-flex">
                  <i className="fa-solid fa-check"></i> &nbsp;&nbsp;&nbsp;&nbsp;
                  <h6>Expert Many Teacher</h6>
                </div>
              </div>
              <div className="col-lg-6 mt-3">
                <div className="Wrapper-RightICon_aboutUS d-flex">
                  <i className="fa-solid fa-check"></i> &nbsp;&nbsp;&nbsp;&nbsp;
                  <h6>Lifetime access</h6>
                </div>
              </div>
            </div>
            {/* <button className="btn DiscoverMore-Abouts mt-5">
              Discover More &nbsp; <i className="fa-solid fa-arrow-right"></i>
            </button> */}
    <button class="btn-hover DiscoverMore-Abouts color-2">Discover More </button>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
