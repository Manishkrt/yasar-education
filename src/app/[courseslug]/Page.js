"use client"

import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import Slider from 'react-slick';
import CompanyLogoSlider from '../CompanyLogoSlider';

const Page = () => {
  const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    focusOnSelect: true, 
    responsive: [ 
      {
        breakpoint: 992, // Medium screen
        settings: {
          slidesToShow: 1,
          centerMode: false,
          focusOnSelect: false
        }
      },
      {
        breakpoint: 576, // Small screen
        settings: {
          slidesToShow: 1,
          centerMode: true,
          focusOnSelect: true
        }
      }
    ]
  };
  
 
  return (
    <>
    

    <section className='Course-details-Home-banner'>

    
       
      
   
         <div className='container'>
         
        
            {/* <h3 className="text-dark">What our students says about us</h3> */}
            <h5 className="text-white  text-center"> 
              Student Feedback
              
            </h5>
            <Slider {...settings}>
                    
                    {/* <div className='testimonial-slider-wrap px-2 text-start'>
                      
                           
                           
                            <div className="p-3 mb-lg-3">
                              <div className='' style={{ overflow:'hidden',width:'80px'}}>
                            <img src="/assets/img/testimonial-1-author-1.png" className='rounded-4 text-start' alt="testimonial" style={{width:'100%',height:'100%'}} />
                            </div>
                            <p className="fs-18 fs-sm-14 text-white">
                            Flexible Classes refers to the process of acquiring knowledge or skills<br></br> through the use of digital technologies and the internet
                            </p>
                            <p className="text-dark fs-18 fs-sm-16 text-white">Manish Chauhan</p>
                            <p className="text-dark fs-18 fs-sm-16 text-white Secondary-orange-fotter">Spanish Lanuage course</p>
                            </div>
                          
                        
                    </div>  */}
                    <div className='testimonial-slider-wrap px-2 container' style={{margin:'0 auto'}}>
                      <div className='row'>   
                      <div className='col-lg-4 text-end'>
                                       <div className='' style={{ overflow:'hidden',width:'100%',textAlign: '-webkit-right'}}>
                            <img src="/assets/img/testimonial-1-author-1.png" className='rounded-4 text-end' alt="testimonial" style={{width:'50%',height:'100%'}} />
                            </div>
                            </div>
                      <div className='col-lg-8'>
                           
                            <div className="p-3 mb-lg-3">
                             
                            <p className="fs-18 fs-sm-14 text-white">
                            Flexible Classes refers to the process of acquiring knowledge or skills<br></br> through the use of digital technologies and the internet
                            </p>
                            <p className="text-dark fs-18 fs-sm-16 text-white">Manish Chauhan</p>
                            <p className="text-dark fs-18 fs-sm-16 text-white Secondary-orange-fotter">Spanish Lanuage course</p>
                            </div>
                            </div>
                            </div>

                        
                    </div> 
                    <div className='testimonial-slider-wrap px-2 container' style={{margin:'0 auto'}}>
                      <div className='row'>   
                      <div className='col-lg-4 text-end'>
                                       <div className='' style={{ overflow:'hidden',width:'100%',textAlign: '-webkit-right'}}>
                            <img src="/assets/img/testimonial-1-author-1.png" className='rounded-4 text-end' alt="testimonial" style={{width:'50%',height:'100%'}} />
                            </div>
                            </div>
                      <div className='col-lg-8'>
                           
                            <div className="p-3 mb-lg-3">
                             
                            <p className="fs-18 fs-sm-14 text-white">
                            Flexible Classes refers to the process of acquiring knowledge or skills<br></br> through the use of digital technologies and the internet
                            </p>
                            <p className="text-dark fs-18 fs-sm-16 text-white">Manish Chauhan</p>
                            <p className="text-dark fs-18 fs-sm-16 text-white Secondary-orange-fotter">Spanish Lanuage course</p>
                            </div>
                            </div>
                            </div>

                        
                    </div> 
                    {/* <div className='testimonial-slider-wrap px-2 container' style={{margin:'0 auto'}}>
                      <div className='row'>   
                      <div className='col-lg-4 text-end'>
                                     
                            <img src="/assets/img/testimonial-1-author-1.png" className='rounded-4 text-end' alt="testimonial" style={{width:'50%',height:'100%'}} />
                            
                            </div>
                      <div className='col-lg-8'>
                           
                            <div className="p-3 mb-lg-3">
                             
                            <p className="fs-18 fs-sm-14 text-white">
                            Flexible Classes refers to the process of acquiring knowledge or skills<br></br> through the use of digital technologies and the internet
                            </p>
                            <p className="text-dark fs-18 fs-sm-16 text-white">Manish Chauhan</p>
                            <p className="text-dark fs-18 fs-sm-16 text-white Secondary-orange-fotter">Spanish Lanuage course</p>
                            </div>
                            </div>
                            </div>

                        
                    </div>  */}
                
                 
                
                
               
                   
                
                 
                 
                
                 
                   
                       
                </Slider>
           
            
       

         </div>
       


    
    

    </section>







<section className="course-details">
  <div className="container">
    <div className="row">
      <div className="col-xl-8">
        <div className="course-details__thumb">
          <img src="/assets/img/course-detail-2.jpg" alt="eduact" />
        </div>
        {/* details-thumb */}
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
          <div className="course-details__meta__price">$473.00</div>
        </div>
        {/* details-meta */}
        <h3 className="course-details__title">
          The Ultimate Developer Course For Future Learner
        </h3>
        {/* details-title */}
      
        <div className="course-details__tabs tabs-box">
      <Tabs defaultActiveKey="curriculum" id="course-details-tabs">
        <Tab eventKey="overview" title="Overview">
         <div className='tabs-content'>
         <div className="course-details__overview">
  <p className="course-details__overview__text">
    Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh. Nam nec eros id
    magna hendrerit sagittis. Nullam sed mi non odio feugiat volutpat sit amet
    nec elit. Maecenas id hendrerit ipsum. Sed eget auctor metus, ac dapibus
    dolor. Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh.
  </p>
  <p className="course-details__overview__text">
    Himenaeos. Vestibulum sollicitudin varius mauris non dignissim. Sed quis
    iaculis est. Nulla quam neque, interdum vitae fermentum lacinia, interdum eu
    magna. Mauris non posuere tellus. Donec quis euismod tellus. Nam vel lacus
    eu nisl bibendum accumsan vitae vitae nibh. Nam nec eros id magna hendrerit
    sagittis. Nullam sed mi non odio feugiat volutpat sit amet nec elit.
    Maecenas id hendrerit ipsum. Sed eget auctor metus, ac dapibus dolo
  </p>
  <p className="course-details__overview__text">
    Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh. Nam nec eros id
    magna hendrerit sagittis. Nullam sed mi non odio feugiat volutpat sit amet
    nec elit. Maecenas id hendrerit ipsum. Sed eget auctor metus, ac dapibus
    dolor. Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh.
  </p>
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
        </Tab>
        <Tab eventKey="curriculum" title="Curriculum">
          <div className="tabs-content">
          <div className="course-details__curriculum">
                <h4 className="course-details__curriculum__title">
                  Starting Beginners Level Course
                </h4>
                <p className="course-details__curriculum__text">
                  Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh. Nam
                  nec eros id magna hendrerit sagittis. Nullam sed mi non odio
                  feugiat volutpat sit amet nec elit. Maecenas id hendrerit
                  ipsum. Sed eget auctor metus, ac dapibus dolor. Nam vel lacus
                  eu nisl bibendum accumsan vitae vitae nibh.
                </p>
                <ul className="list-unstyled course-details__curriculum__lists">
                  <li>
                    <i className="fa-regular fa-circle-play  icon-play-border" />
                    <span className="course-details__curriculum__lists__title">
                      Introduction of Editing
                    </span>
                    <span className="course-details__curriculum__lists__preview">
                      Preview
                    </span>
                    <span className="course-details__curriculum__lists__time">
                      10 Minutes
                    </span>
                  </li>
                  <li>
               
                    <i className="fa-regular fa-circle-play  icon-play-border" />
                    <span className="course-details__curriculum__lists__title">
                      Overview of Editing
                    </span>
                    <span className="course-details__curriculum__lists__preview">
                      Preview
                    </span>
                    <span className="course-details__curriculum__lists__time">
                      10 Minutes
                    </span>
                  </li>
                  <li>
                    <i className="fa-regular fa-folder-open icon-file" />
                    <span className="course-details__curriculum__lists__title">
                      Basic Editing Technology
                    </span>
                  </li>
                  <li>
                 
                    <i className="fa-regular fa-lightbulb icon-logical-thinking" />
                    <span className="course-details__curriculum__lists__title">
                      Quiz
                    </span>
                    <span className="course-details__curriculum__lists__time">
                      6 Questions
                    </span>
                  </li>
                </ul>
                <h4 className="course-details__curriculum__title">
                  Intermediate Level Course
                </h4>
                <p className="course-details__curriculum__text">
                  Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh. Nam
                  nec eros id magna hendrerit sagittis. Nullam sed mi non odio
                  feugiat volutpat sit amet nec elit. Maecenas id hendrerit
                  ipsum. Sed eget auctor metus, ac dapibus dolor. Nam vel lacus
                  eu nisl bibendum accumsan vitae vitae nibh.
                </p>
                <ul className="list-unstyled course-details__curriculum__lists">
                  <li>
                    <i className="fa-regular fa-circle-play  icon-play-border" />
                    <span className="course-details__curriculum__lists__title">
                      Introduction of Editing
                    </span>
                    <span className="course-details__curriculum__lists__preview">
                      Preview
                    </span>
                    <span className="course-details__curriculum__lists__time">
                      10 Minutes
                    </span>
                  </li>
                  <li>
                    <i className="fa-regular fa-folder-open icon-file" />
                    <span className="course-details__curriculum__lists__title">
                      Basic Editing Technology
                    </span>
                  </li>
                  <li>
                    <i className="fa-regular fa-lightbulb  icon-logical-thinking" />
                    <span className="course-details__curriculum__lists__title">
                      Quiz
                    </span>
                    <span className="course-details__curriculum__lists__time">
                      6 Questions
                    </span>
                  </li>
                </ul>
              </div>
          </div>
        </Tab>
        <Tab eventKey="reviews" title="Reviews">
        <div className='tab-content'>
        <div className="course-details__comment">
  <h3 className="course-details__review-title">2 Reviews</h3>
  {/*Start Comment Box*/}
  <div className="course-details__comment-box">
    <figure className="course-details__comment-box__thumb">
      <img src="/assets/img/review-2-1.jpg" alt="eduact" />
    </figure>
    {/* comment-image */}
    <h4 className="course-details__comment-box__meta">David Shon</h4>
    {/* comment-meta */}
    <div className="course-details__comment-box__ratings">
      <span className="fa fa-star" />
      <span className="fa fa-star" />
      <span className="fa fa-star" />
      <span className="fa fa-star" />
      <span className="fa fa-star" />
    </div>
    {/* comment-ratings */}
    <p className="course-details__comment-box__text">
      Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh. Nam nec eros id
      magna hendrerit sagittis. Nullam sed mi non odio feugiat volutpat sit amet
      nec elit. Maecenas id hendrerit ipsum. Sed eget auctor metus, ac dapibus
      dolor.
    </p>
    {/* comment-text */}
  </div>
  {/*End Comment Box*/}
  {/*Start Comment Box*/}
  <div className="course-details__comment-box">
    <figure className="course-details__comment-box__thumb">
      <img src="/assets/img/review-2-2.jpg" alt="eduact" />
    </figure>
    {/* comment-image */}
    <h4 className="course-details__comment-box__meta">Sarah Albert</h4>
    {/* comment-meta */}
    <div className="course-details__comment-box__ratings">
      <span className="fa fa-star" />
      <span className="fa fa-star" />
      <span className="fa fa-star" />
      <span className="fa fa-star" />
      <span className="fa fa-star" />
    </div>
    {/* comment-ratings */}
    <p className="course-details__comment-box__text">
      Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh. Nam nec eros id
      magna hendrerit sagittis. Nullam sed mi non odio feugiat volutpat sit amet
      nec elit. Maecenas id hendrerit ipsum. Sed eget auctor metus, ac dapibus
      dolor.
    </p>
    {/* comment-text */}
  </div>
  {/*End Comment Box*/}
</div>

        </div>
        </Tab>
        <Tab eventKey="instructor" title="Instructor">
          {/* Instructor Content */}
        </Tab>
      </Tabs>
    </div>
        {/* tabs */}
      </div>
      <div
        className="col-xl-4 wow fadeInRight animated"
        data-wow-delay="300ms"
        style={{
          visibility: "visible",
          animationDelay: "300ms",
          animationName: "fadeInRight"
        }}
      >
        <div className="course-details__sidebar">
          <div className="course-details__sidebar__item">
            <h3 className="course-details__sidebar__title">Course Features</h3>
            <ul className="course-details__sidebar__lists clerfix">
              <li>
              {/* <i class="fa-solid fa-clock"></i> */}
                <i className="fa-regular fa-clock icon-history" />
                Duration:<span>20 Hours</span>
              </li>
              <li>
                <i className="fa-regular fa-clipboard icon-book" />
                Lessons:<span>15</span>
              </li>
              <li>
             
                <i className="fa-solid fa-building-columns icon-reading" />
                Students:<span>Max 15</span>
              </li>
              <li>
              
                <i className=" fa-regular fa-circle-play icon-play-border" />
                Videos<span>10 Hours</span>
              </li>
              <li>
                <i className="fa-regular fa-lightbulb icon-logical-thinking" />
                Skill Level<span>Advanced</span>
              </li>
              <li>
            
                <i className="fa-solid fa-language icon-Digital-marketing" />
                Language:<span>English</span>
              </li>
            </ul>
            <a href="contact.html" className="eduact-btn eduact-btn-second">
              <span className="eduact-btn__curve" />
              Buy This Course
              <i className="icon-arrow" />
            </a>
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


<CompanyLogoSlider/>
    </>
  )
}

export default Page;
