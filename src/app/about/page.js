import React from 'react'
import CompanyLogoSlider from '../../component/CompanyLogoSlider'
import QuiryForm from '@/component/QuiryForm'
import Navigation from '@/component/Navigation'
import Footer from '@/component/Footer'
import CoomonStudentSlider from '@/component/CoomonStudentSlider'


const page = () => {
  return (
    <>
    <Navigation/>
  <CoomonStudentSlider/>


<section className="about-two about-two--about pt-pb">
  <div className="container">
    <div className="row">
      <div className="col-xl-6">
        <div
          className="about-two__thumb wow fadeInLeft animated"
          data-wow-delay="100ms"
          style={{
            visibility: "visible",
            animationDelay: "100ms",
            animationName: "fadeInLeft"
          }}
        >
          {/* about thumb start */}
          <div
            className="about-two__thumb__one eduact-tilt"
            data-tilt-options='{ "glare": false, "maxGlare": 0, "maxTilt": 2, "speed": 700, "scale": 1 }'
            style={{
              willChange: "transform",
              transform: "perspective(300px) rotateX(0deg) rotateY(0deg)"
            }}
          >
            <img
              src="/assets/img/about-2-2-about.jpg"
              alt="eduact"
            />
          </div>
          {/* /.about-thumb-one */}
          <div className="about-two__thumb__two">
            <img
              src="/assets/img/about-2-1-about.jpg"
              alt="eduact"
            />
            <div className="about-two__thumb__two-icon">
              <span className="fa-regular fa-lightbulb icon-business" />
            </div>
          </div>
          {/* /.about-thumb-two */}
          <div className="about-two__fact">
            <div className="about-two__fact__icon">
              <span className="icon-trophy" />
            </div>
            <div className="about-two__fact__content">
              <div className="about-two__fact__count">
                +
                <span className="count-box counted">
                  <span
                    className="count-text"
                    data-stop={230}
                    data-speed={1500}
                  >
                    230
                  </span>
                </span>
              </div>
              {/* /.fact-one__count */}
              <h3 className="about-two__fact__title">Awesome Awards</h3>
              {/* /.fact-one__title */}
            </div>
          </div>
          {/* /.fact-item */}
          <div
            className="about-two__thumb__shape1 wow zoomIn animated"
            data-wow-delay="300ms"
            style={{
              visibility: "visible",
              animationDelay: "300ms",
              animationName: "zoomIn"
            }}
          >
            <img src="/assets/img/about-2-shape-1.png" alt="eduact" />
          </div>
          {/* /.about-shape-one */}
          <div
            className="about-two__thumb__shape2 wow zoomIn animated"
            data-wow-delay="400ms"
            style={{
              visibility: "visible",
              animationDelay: "400ms",
              animationName: "zoomIn"
            }}
          >
            <img src="/assets/img/about-2-shape-2.png" alt="eduact" />
          </div>
          {/* /.about-shape-two */}
          <div
            className="about-two__thumb__shape3 wow zoomIn animated"
            data-wow-delay="400ms"
            style={{
              visibility: "visible",
              animationDelay: "400ms",
              animationName: "zoomIn"
            }}
          >
            <img src="assets/img/about-2-shape-3.png" alt="eduact" />
          </div>
          {/* /.about-shape-two */}
          <div
            className="about-two__thumb__shape4 wow zoomIn animated"
            data-wow-delay="400ms"
            style={{
              visibility: "visible",
              animationDelay: "400ms",
              animationName: "zoomIn"
            }}
          >
            <img src="/assets/img/about-2-shape-4.png" alt="eduact" />
          </div>
          {/* /.about-shape-two */}
        </div>
        {/* about thumb end */}
      </div>
      <div
        className="col-xl-6 wow fadeInRight animated"
        data-wow-delay="100ms"
        style={{
          visibility: "visible",
          animationDelay: "100ms",
          animationName: "fadeInRight"
        }}
      >
        <div className="about-two__content">
          {/* about content start*/}
          <div className="section-title">
            <h5 className="section-title__tagline">
              About Us
              <svg
                className="arrow-svg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 55 13"
              >
                <g clipPath="url(#clip0_324_36194)">
                  <path d="M10.5406 6.49995L0.700562 12.1799V8.56995L4.29056 6.49995L0.700562 4.42995V0.819946L10.5406 6.49995Z" />
                  <path d="M25.1706 6.49995L15.3306 12.1799V8.56995L18.9206 6.49995L15.3306 4.42995V0.819946L25.1706 6.49995Z" />
                  <path d="M39.7906 6.49995L29.9506 12.1799V8.56995L33.5406 6.49995L29.9506 4.42995V0.819946L39.7906 6.49995Z" />
                  <path d="M54.4206 6.49995L44.5806 12.1799V8.56995L48.1706 6.49995L44.5806 4.42995V0.819946L54.4206 6.49995Z" />
                </g>
              </svg>
            </h5>
            <h2 className="section-title__title">
            WE CREATE LEADERS FOR TOMORROW
            </h2>
          </div>
          {/* section-title */}
          <p className="about-two__content__text">
          The Oracle International Language Institute brings together under one roof a wide range of international professional and vocational qualifications through its high tech, state of the art teaching centers, strategically located across the country. It offers interesting and innovative programmes blended with industrial experience and practical application that will appeal to the academic community as well as to a range of other sectors in the market place.
          </p>
          <div className="about-two__about-box">
            <div className="about-two__about-box__top">
              <div className="about-two__about-box__icon">
                <span className="fa-regular fa-lightbulb icon-logical-thinking" />
              </div>
              <h4 className="about-two__about-box__title">Our Mission</h4>
            </div>
            <p className="about-two__about-box__text">
            Achieve academic excellence in professional education at par with the leading national and international institutions. Focus on practical aspects of the course material so as to make learning a meaningful and interesting experience in our intellectually stimulating campus.
            Create an environment with people having similar goals and aspirations to be visionaries. Actively encourage collaboration with industries, communities and the fellow institutions in the country and abroad. Work to inculcate high moral and ethical values amongst the students to make them responsible citizens and good human beings.
            The Institute offers something for everyone, from high school students looking to enhance their academic profile, to experienced practitioners who are seeking to focus on developing new skills, increase their knowledge base and keep up to date with developments within their particular areas of expertise. The Oracle International Language Institute also assists those who are looking for a qualification in India that can be used as a stepping-stone or as a pathway to further Study Overseas as well as those looking to develop their skill set to enhance their career opportunities in today's competitive global market.
            </p>
          </div>
          {/* /.icon-box */}
          <div className="about-two__about-box">
            <div className="about-two__about-box__top">
              <div className="about-two__about-box__icon">
                <span className="fa-solid fa-eye-low-vision icon-vision" />
              </div>
              <h4 className="about-two__about-box__title">Our Vision</h4>
            </div>
            <p className="about-two__about-box__text">
              It uses a dictionary of over 200 Latin words, combined with a
              handful of model sentence structures, to generate Lorem Ipsum
              which looks The generated Lorem Ipsum is therefore always free
              from repetition
            </p>
          </div>
          {/* /.icon-box */}
        </div>
        {/* about content end */}
      </div>
    </div>
  </div>
</section>









<section className="fact-one pt-pb" style={{ backgroundImage: "url(/assets/img/fact-bg-1.png)" }}>
  <div className="container">
    <div className="row">
      <div className="col-lg-3 col-md-6 ">
        <div className="fact-one__item text-center">
          <svg
            viewBox="0 0 303 181"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="1.5"
              y="2.00049"
              width={300}
              height={177}
              rx={7}
              stroke="#4F5DE4"
              strokeWidth={3}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="20 20"
            />
          </svg>
          <div className="fact-one__count">
            <span className="count-box counted">
              <span className="count-text" data-stop="30.3" data-speed={1500}>
                20,000
              </span>
            </span>
            +
          </div>
          <h3 className="fact-one__title">Happy Students</h3>
        </div>
      </div>
      <div className="col-lg-3 col-md-6">
        <div className="fact-one__item text-center">
          <svg
            viewBox="0 0 303 181"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="1.5"
              y="2.00049"
              width={300}
              height={177}
              rx={7}
              stroke="#4F5DE4"
              strokeWidth={3}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="20 20"
            />
          </svg>
          <div className="fact-one__count">
            <span className="count-box counted">
              <span className="count-text" data-stop="40.5" data-speed={1500}>
                25
              </span>
            </span>
            +
          </div>
          <h3 className="fact-one__title">Best Awards Won</h3>
        </div>
      </div>
      <div
        className="col-lg-3 col-md-6 wow fadeInUp animated"
        data-wow-delay="300ms"
        style={{
          visibility: "visible",
          animationDelay: "300ms",
          animationName: "fadeInUp"
        }}
      >
        <div className="fact-one__item text-center">
          <svg
            viewBox="0 0 303 181"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="1.5"
              y="2.00049"
              width={300}
              height={177}
              rx={7}
              stroke="#4F5DE4"
              strokeWidth={3}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="20 20"
            />
          </svg>
          <div className="fact-one__count">
            <span className="count-box counted">
              <span className="count-text" data-stop="88.9" data-speed={1500}>
                1500+
              </span>
            </span>
          </div>
          <h3 className="fact-one__title">Batches Completed</h3>
        </div>
      </div>
      <div className="col-lg-3 col-md-6">
        <div className="fact-one__item text-center">
          <svg
            viewBox="0 0 303 181"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="1.5"
              y="2.00049"
              width={300}
              height={177}
              rx={7}
              stroke="#4F5DE4"
              strokeWidth={3}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="20 20"
            />
          </svg>
          <div className="fact-one__count">
            <span className="count-box counted">
              <span className="count-text" data-stop="6.30" data-speed={1500}>
                25
              </span>
            </span>
            +
          </div>
          <h3 className="fact-one__title">Courses</h3>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="service-one pt-pb">
  <div
    className="service-one__bg"
    style={{ backgroundImage: "url(assets/images/shapes/service-bg-1.png)" }}
  />
  <div className="container">
    <div className="row">
      <div
        className="col-lg-3 col-md-6 wow fadeInUp animated"
     
      >
        <div className="service-one__item">
          <div className="service-one__wrapper">
            <div className="service-one__icon">
              <span className="icon-education" />
            </div>
            {/* /.service-icon */}
            <h3 className="service-one__title">
              <a href="team.html">Exclusive Coach</a>
            </h3>
            {/* /.service-title */}
            <p className="service-one__text">
              Lorem ipsum dolor sit amet consectetur. Convallis ornare semper id
              hendrerit diam. Mauris cursus suscipit
            </p>
            {/* /.service-content */}
            <a className="service-one__rm" href="team.html">
              Read More
              <span className="icon-caret-right" />
            </a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 118 129"
              fill="none"
            >
              <path
                d="M0.582052 143.759C135.395 113.682 145.584 0.974413 145.584 0.974413L173.881 89.6286C173.881 89.6286 0.582054 322.604 0.582052 143.759Z"
                fill="#F1F2FD"
              />
            </svg>
          </div>
        </div>
        {/* /.service-card-one */}
      </div>
      <div
        className="col-lg-3 col-md-6 wow fadeInUp animated"
      
      >
        <div className="service-one__item">
          <div className="service-one__wrapper">
            <div className="service-one__icon">
              <span className="icon-business" />
            </div>
            {/* /.service-icon */}
            <h3 className="service-one__title">
              <a href="team-become.html">Creative Minds</a>
            </h3>
            {/* /.service-title */}
            <p className="service-one__text">
              Lorem ipsum dolor sit amet consectetur. Convallis ornare semper id
              hendrerit diam. Mauris cursus suscipit
            </p>
            {/* /.service-content */}
            <a className="service-one__rm" href="team-become.html">
              Read More
              <span className="icon-caret-right" />
            </a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 118 129"
              fill="none"
            >
              <path
                d="M0.582052 143.759C135.395 113.682 145.584 0.974413 145.584 0.974413L173.881 89.6286C173.881 89.6286 0.582054 322.604 0.582052 143.759Z"
                fill="#F1F2FD"
              />
            </svg>
          </div>
        </div>
        {/* /.service-card-one */}
      </div>
      <div
        className="col-lg-3 col-md-6 wow fadeInUp animated"
    
      >
        <div className="service-one__item">
          <div className="service-one__wrapper">
            <div className="service-one__icon">
              <span className="icon-webinar" />
            </div>
            {/* /.service-icon */}
            <h3 className="service-one__title">
              <a href="course.html">Video Tutorials</a>
            </h3>
            {/* /.service-title */}
            <p className="service-one__text">
              Lorem ipsum dolor sit amet consectetur. Convallis ornare semper id
              hendrerit diam. Mauris cursus suscipit
            </p>
            {/* /.service-content */}
            <a className="service-one__rm" href="course.html">
              Read More
              <span className="icon-caret-right" />
            </a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 118 129"
              fill="none"
            >
              <path
                d="M0.582052 143.759C135.395 113.682 145.584 0.974413 145.584 0.974413L173.881 89.6286C173.881 89.6286 0.582054 322.604 0.582052 143.759Z"
                fill="#F1F2FD"
              />
            </svg>
          </div>
        </div>
        {/* /.service-card-one */}
      </div>
      <div
        className="col-lg-3 col-md-6 wow fadeInUp animated"
     
      >
        <div className="service-one__item">
          <div className="service-one__wrapper">
            <div className="service-one__icon">
              <span className="icon-neural" />
            </div>
            {/* /.service-icon */}
            <h3 className="service-one__title">
              <a href="about.html">Worlds Record</a>
            </h3>
            {/* /.service-title */}
            <p className="service-one__text">
              Lorem ipsum dolor sit amet consectetur. Convallis ornare semper id
              hendrerit diam. Mauris cursus suscipit
            </p>
            {/* /.service-content */}
            <a className="service-one__rm" href="about.html">
              Read More
              <span className="icon-caret-right" />
            </a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 118 129"
              fill="none"
            >
              <path
                d="M0.582052 143.759C135.395 113.682 145.584 0.974413 145.584 0.974413L173.881 89.6286C173.881 89.6286 0.582054 322.604 0.582052 143.759Z"
                fill="#F1F2FD"
              />
            </svg>
          </div>
        </div>
        {/* /.service-card-one */}
      </div>
    </div>
  </div>
</section>

<section className="about-one pt-pb">
  <div className="container">
    <div className="row">
      <div className="col-xl-6">
        <div
          className="about-one__thumb wow fadeInLeft animated"
          data-wow-delay="100ms"
       
        >
          {/* about thumb start */}
          <div
            className="about-one__thumb__one eduact-tilt"
           
          >
            <img src="assets/img/about-1-1.png" alt="eduact" />
          </div>
          <div
            className="about-one__thumb__shape1 wow zoomIn animated"
            
          >
            <img src="assets/img/about-shape-1-1.png" alt="eduact" />
          </div>
          <div
            className="about-one__thumb__shape2 wow zoomIn animated"
       
         
          >
            <img src="assets/img/about-shape-1-2.png" alt="eduact" />
          </div>
          <div
            className="about-one__thumb__box wow fadeInLeft animated"
        
          >
            <div className="about-one__thumb__box__icon">
              <span className="icon-Headphone-Women" />
            </div>
            <h4 className="about-one__thumb__box__title">
              Need to Know More Details?
            </h4>
            <p className="about-one__thumb__box__text">
              <a href="tel:6845550102">+(684) 555-0102</a>
            </p>
          </div>
        </div>
        {/* about thumb end */}
      </div>
      <div className="col-xl-6">
        <div className="about-one__content">
          {/* about content start*/}
          <div className="section-title">
            <h5 className="section-title__tagline">
              About Us
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 133 13"
                fill="none"
              >
                <path
                  d="M9.76794 0.395L0.391789 9.72833C-0.130596 10.2483 -0.130596 11.095 0.391789 11.615C0.914174 12.135 1.76472 12.135 2.28711 11.615L11.6633 2.28167C12.1856 1.76167 12.1856 0.915 11.6633 0.395C11.1342 -0.131667 10.2903 -0.131667 9.76794 0.395Z"
                  fill="#F1F2FD"
                />
                <path
                  d="M23.1625 0.395L13.7863 9.72833C13.2639 10.2483 13.2639 11.095 13.7863 11.615C14.3087 12.135 15.1593 12.135 15.6816 11.615L25.0578 2.28167C25.5802 1.76167 25.5802 0.915 25.0578 0.395C24.5287 -0.131667 23.6849 -0.131667 23.1625 0.395Z"
                  fill="#F1F2FD"
                />
                <path
                  d="M36.5569 0.395L27.1807 9.72833C26.6583 10.2483 26.6583 11.095 27.1807 11.615C27.7031 12.135 28.5537 12.135 29.076 11.615L38.4522 2.28167C38.9746 1.76167 38.9746 0.915 38.4522 0.395C37.9231 -0.131667 37.0793 -0.131667 36.5569 0.395Z"
                  fill="#F1F2FD"
                />
                <path
                  d="M49.9514 0.395L40.5753 9.72833C40.0529 10.2483 40.0529 11.095 40.5753 11.615C41.0976 12.135 41.9482 12.135 42.4706 11.615L51.8467 2.28167C52.3691 1.76167 52.3691 0.915 51.8467 0.395C51.3176 -0.131667 50.4738 -0.131667 49.9514 0.395Z"
                  fill="#F1F2FD"
                />
                <path
                  d="M63.3459 0.395L53.9698 9.72833C53.4474 10.2483 53.4474 11.095 53.9698 11.615C54.4922 12.135 55.3427 12.135 55.8651 11.615L65.2413 2.28167C65.7636 1.76167 65.7636 0.915 65.2413 0.395C64.7122 -0.131667 63.8683 -0.131667 63.3459 0.395Z"
                  fill="#F1F2FD"
                />
                <path
                  d="M76.7405 0.395L67.3643 9.72833C66.8419 10.2483 66.8419 11.095 67.3643 11.615C67.8867 12.135 68.7373 12.135 69.2596 11.615L78.6358 2.28167C79.1582 1.76167 79.1582 0.915 78.6358 0.395C78.1067 -0.131667 77.2629 -0.131667 76.7405 0.395Z"
                  fill="#F1F2FD"
                />
                <path
                  d="M90.1349 0.395L80.7587 9.72833C80.2363 10.2483 80.2363 11.095 80.7587 11.615C81.2811 12.135 82.1317 12.135 82.6541 11.615L92.0302 2.28167C92.5526 1.76167 92.5526 0.915 92.0302 0.395C91.5011 -0.131667 90.6573 -0.131667 90.1349 0.395Z"
                  fill="#F1F2FD"
                />
                <path
                  d="M103.529 0.395L94.1533 9.72833C93.6309 10.2483 93.6309 11.095 94.1533 11.615C94.6756 12.135 95.5262 12.135 96.0486 11.615L105.425 2.28167C105.947 1.76167 105.947 0.915 105.425 0.395C104.896 -0.131667 104.052 -0.131667 103.529 0.395Z"
                  fill="#F1F2FD"
                />
                <path
                  d="M116.924 0.395L107.548 9.72833C107.025 10.2483 107.025 11.095 107.548 11.615C108.07 12.135 108.921 12.135 109.443 11.615L118.819 2.28167C119.342 1.76167 119.342 0.915 118.819 0.395C118.29 -0.131667 117.446 -0.131667 116.924 0.395Z"
                  fill="#F1F2FD"
                />
                <path
                  d="M130.318 0.395L120.942 9.72833C120.42 10.2483 120.42 11.095 120.942 11.615C121.465 12.135 122.315 12.135 122.838 11.615L132.214 2.28167C132.736 1.76167 132.736 0.915 132.214 0.395C131.685 -0.131667 130.841 -0.131667 130.318 0.395Z"
                  fill="#F1F2FD"
                />
              </svg>
            </h5>
            <h2 className="section-title__title">
              Creating a Lifelong Learning Best Community
            </h2>
          </div>
          {/* section-title */}
          <p className="about-one__content__text">
            It uses a dictionary of over 200 Latin words, combined with a
            handful of model sentence structures, to generate Lorem Ipsum which
            looks
          </p>
          <div className="about-one__box">
            <div className="about-one__box__wrapper">
              <div className="about-one__box__icon">
                <span className="fa-solid fa-school icon-Presentation" />
              </div>
              <h4 className="about-one__box__title">Flexible Classes</h4>
              <p className="about-one__box__text">
                The generated Lorem Ipsum is therefore always free from
                repetition, injected humour, or non-characteristic words etc.
              </p>
            </div>
          </div>
          {/* /.icon-box */}
          <div className="about-one__box">
            <div className="about-one__box__wrapper">
              <div className="about-one__box__icon">
                <span className="fa-solid fa-graduation-cap  icon-Online-learning" />
                
              </div>
              <h4 className="about-one__box__title">
                Live Class From anywhere
              </h4>
              <p className="about-one__box__text">
                The generated Lorem Ipsum is therefore always free from
                repetition, injected humour, or non-characteristic words etc.
              </p>
            </div>
          </div>
          {/* /.icon-box */}
          <a  className="eduact-btn">
            <span className="eduact-btn__curve" />
            Discover More <i className="fa-solid fa-arrow-right"></i>
            <i className="icon-arrow" />
          </a>
          {/* /.btn */}
        </div>
        {/* about content end*/}
      </div>
    </div>
  </div>
</section>
<QuiryForm/>
<CompanyLogoSlider/>

<Footer/>
    
    </>
  )
}

export default page
