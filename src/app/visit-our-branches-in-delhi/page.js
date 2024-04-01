'use client'
import CompanyLogoSlider from '@/component/CompanyLogoSlider';

import CoomonStudentSlider from '@/component/CoomonStudentSlider';
import Footer from '@/component/Footer';
import Navigation from '@/component/Navigation';
import QuiryForm from '@/component/QuiryForm';
import React from 'react'

const page = () => {
  return (
    <>
     <Navigation/>
   <CoomonStudentSlider/>
   <section className="course-details branch visit-our-branches-in-delhi pt-pb">
   <h5 class="section-title__tagline text-center">HOME OUR ORACLE GLOBAL EDUCATION BRANCHES IN DELHI<svg class="arrow-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 55 13"><g clip-path="url(#clip0_324_36194)"><path d="M10.5406 6.49995L0.700562 12.1799V8.56995L4.29056 6.49995L0.700562 4.42995V0.819946L10.5406 6.49995Z"></path><path d="M25.1706 6.49995L15.3306 12.1799V8.56995L18.9206 6.49995L15.3306 4.42995V0.819946L25.1706 6.49995Z"></path><path d="M39.7906 6.49995L29.9506 12.1799V8.56995L33.5406 6.49995L29.9506 4.42995V0.819946L39.7906 6.49995Z"></path><path d="M54.4206 6.49995L44.5806 12.1799V8.56995L48.1706 6.49995L44.5806 4.42995V0.819946L54.4206 6.49995Z"></path></g></svg></h5>

  <div className="container mt-5">

   
    <div className="row">
      <div className="col-xl-8">
        <div className="course-details__thumb">
          <img src="/assets/img/china.jpg" alt="eduact" />
        </div>
        <div className="course-details__meta">
          <div className="course-details__meta__author">
            <img src="/assets/img/author-7.png" alt="eduact" />
            <h5 className="course-details__meta__name">Guy Hawkins</h5>
            <p className="course-details__meta__designation">Project Manager</p>
          </div>
          <div className="course-details__meta__cats">
            <a href="course.html">Development</a>
          </div>
          <div className="course-details__meta__ratings">
            <span className="fa-solid fa-star" />
            <span className="fa-solid fa-star" />
            <span className="fa-solid fa-star" />
            <span className="fa-solid fa-star" />
            <span className="fa-solid fa-star" />
            <div className="course-details__meta__ratings__reviews">
              (25 Reviews)
            </div>
          </div>
          {/* <div className="course-details__meta__price">$473.00</div> */}
        </div>
        <h3 class="course-details__sidebar__title">OUR BRANCHES</h3>

        {/* <h3 className="course-details__title">
        OUR BRANCHES
        </h3> */}
        <div className="course-details__tabs tabs-box">
        <p className="course-details__overview__text">
        Oracle International Language Institute is located in GTB Nagar, Delhi. With the more advance-learning format and extra efforts with extra experienced language, experts are here to make you perfect in your chosen language.
                  </p>
                  <p className="course-details__overview__text">
                  We are very well crafted to make you expert in various international languages like English, Arabic, French, German, Spanish, Japanese, etc. the list does not ends very soon after getting here you find many languages to study with our best faculty members (under individual assistance).
                  </p>
                  <p className="course-details__overview__text">
                  We are equipped with all, whatever can feel you special and like a proficient after getting here, touch this emotion of our youngsters we have-
                  </p>

                  <h3 class="course-details__sidebar__title">DIGITAL CLASSES TO MAKE YOU BETTER</h3>
                  <p className="course-details__overview__text">All this is only for you! To facilitate you at your place only with special learning modules digitalized classrooms with audio and video lectures. We are well equipped with digital technology and digital classrooms to make you more perfect and pro in your favourite language.</p>
                  <h3 class="course-details__sidebar__title">WELL-CRAFTED LANGUAGE EXPERTS</h3>
                  <p className="course-details__overview__text">With our educational community and language experts community, you get global opportunities to serve various industries and markets whether you are looking for bureaucracy or international business.</p>
                  <ul className="list-unstyled course-details__overview__lists">
                    <li>
                      <span className="fa-solid fa-check icon-check" />
                      Nam at elit nec neque suscipit gravida.
                    </li>
                    <li>
                      <span className="fa-solid fa-check icon-check" />
                      Aenean egestas orci eu maximus tincidunt.
                    </li>
                    <li>
                      <span className="fa-solid fa-check icon-check" />
                      Curabitur vel turpis id tellus cursus laoreet.
                    </li>
                  </ul>
        </div>
      </div>
      <div
        className="col-xl-4 wow fadeInRight animated"
        
      >
        <div className="course-details__sidebar Course-Categories-wrapper">
          <div className="course-details__sidebar__item">
            <h3 className="course-details__sidebar__title">Course Categories</h3>
            <ul className="course-details__sidebar__lists clerfix">
              <li>
                <i className="fa-solid fa-angles-right icon-history" />
                English Speaking Courses
              </li>
              <li>
                <i className="fa-solid fa-angles-right icon-history" />
                Chinese Language Courses
              </li>
              <li>
                <i className="fa-solid fa-angles-right icon-history" />
                Career Counselling
              </li>
              <li>
                <i className="fa-solid fa-angles-right icon-history" />
                Arabic Language Courses
              </li>
              <li>
                <i className="fa-solid fa-angles-right icon-history" />
                French Language Courses
              </li>
              <li>
                <i className="fa-solid fa-angles-right icon-history" />
                German Language Courses
              </li>
              <li>
                <i className="fa-solid fa-angles-right icon-history" />
                Spanish Language Courses
              </li>
              <li>
                <i className="fa-solid fa-angles-right icon-history" />
                Japanese Language Courses
              </li>
              <li>
                <i className="fa-solid fa-angles-right icon-history" />
                Hindi Language Courses
              </li>
              <li>
                <i className="fa-solid fa-angles-right icon-history" />
                Employability Course
              </li>
              <li>
                <i className="fa-solid fa-angles-right icon-history" />
                Online Classes
              </li>
              <li>
                <i className="fa-solid fa-angles-right icon-history" />
                Kids Section
              </li>
              <li>
                <i className="fa-solid fa-angles-right icon-history" />
                Study In Abroad
              </li>
             
            </ul>
            {/* <a href="contact.html" className="eduact-btn eduact-btn-second">
              <span className="eduact-btn__curve" />
              Buy This Course
              <i className="icon-arrow" />
            </a> */}
          </div>
          <div className="course-details__sidebar__item">
            <h3 className="course-details__sidebar__title">Latest Course</h3>
            <ul className="course-details__sidebar__post">
              <li>
                <div className="course-details__sidebar__post__image">
                  <img src="/assets/img/lc-1.jpg" alt="eduact" />
                </div>
                <div className="course-details__sidebar__post__content">
                  <span className="course-details__sidebar__post__meta">
                    By <a href="course.html">Robert Fox</a>
                  </span>
                  <h3 className="course-details__sidebar__post__title">
                    <a href="course.html">The Complete Web.....</a>
                  </h3>
                  <div className="course-details__sidebar__post__ratings">
                    <span className="fa-solid fa-star" />
                    <span className="fa-solid fa-star" />
                    <span className="fa-solid fa-star" />
                    <span className="fa-solid fa-star" />
                    <span className="fa-solid fa-star" />
                    <div className="course-details__sidebar__post__ratings__reviews">
                      4.8(30)
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="course-details__sidebar__post__image">
                  <img src="assets/img/lc-2.jpg" alt="eduact" />
                </div>
                <div className="course-details__sidebar__post__content">
                  <span className="course-details__sidebar__post__meta">
                    By <a href="course.html">Robert Fox</a>
                  </span>
                  <h3 className="course-details__sidebar__post__title">
                    <a href="course.html">Management Cons.....</a>
                  </h3>
                  <div className="course-details__sidebar__post__ratings">
                    <span className="fa-solid fa-star" />
                    <span className="fa-solid fa-star" />
                    <span className="fa-solid fa-star" />
                    <span className="fa-solid fa-star" />
                    <span className="fa-solid fa-star" />
                    <div className="course-details__sidebar__post__ratings__reviews">
                      4.8(30)
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="course-details__sidebar__post__image">
                  <img src="/assets/img/lc-3.jpg" alt="eduact" />
                </div>
                <div className="course-details__sidebar__post__content">
                  <span className="course-details__sidebar__post__meta">
                    By <a href="course.html">Robert Fox</a>
                  </span>
                  <h3 className="course-details__sidebar__post__title">
                    <a href="course.html">The Special HTML.....</a>
                  </h3>
                  <div className="course-details__sidebar__post__ratings">
                    <span className="fa-solid fa-star" />
                    <span className="fa-solid fa-star" />
                    <span className="fa-solid fa-star" />
                    <span className="fa-solid fa-star" />
                    <span className="fa-solid fa-star" />
                    <div className="course-details__sidebar__post__ratings__reviews">
                      4.8(30)
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

   <QuiryForm/>
   <div className='container pt-pb'>
    <div className='row'>
   <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3502.020890026059!2d77.214772!3d28.629136!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x76933fe29809ad22!2sOracle%20International%20Language%20Institute%20-%20Best%20Ielts%2CEnglish%2CFrench%2CGerman%2C%20Arabic%2C%20Chinese%2C%20Spanish%20Classes%20in%20Delhi!5e0!3m2!1sen!2sin!4v1600151023277!5m2!1sen!2sin"
    width="100%"
    height={400}
    style={{ border: "3px solid #F2184F" }}
    aria-hidden="false"
    tabIndex={0}
  />
</div>
</div>
</div>

   
   <CompanyLogoSlider/>

  
<Footer/>
    </>
  )
}

export default page;
