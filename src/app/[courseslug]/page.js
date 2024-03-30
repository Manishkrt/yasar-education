"use client"

import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import Slider from 'react-slick';
import CompanyLogoSlider from '../../component/CompanyLogoSlider';
import QuiryForm from '@/component/QuiryForm';
import Navigation from '@/component/Navigation';
import Footer from '@/component/Footer';
import CoomonStudentSlider from '@/component/CoomonStudentSlider';  
import Accordion from 'react-bootstrap/Accordion'; 

const Page = () => {

 
  return (
    <>
    
    <Navigation/>

  <CoomonStudentSlider/>






<section className="course-details">
  <div className="container">
    <div className="row">
      <div className="col-xl-8">
        <div className="course-details__thumb">
          <img src="/assets/img/china.jpg" alt="eduact" />
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
        BEST CHINESE LANGUAGE INSTITUTE IN DELHI
        </h3>
        {/* details-title */}
      
        <div className="course-details__tabs tabs-box">
      <Tabs defaultActiveKey="curriculum" id="course-details-tabs">
        <Tab eventKey="overview" title="Overview">
         <div className='tabs-content mt-4'>
         <div className="course-details__overview">
  <p className="course-details__overview__text">
  Chinese itself is not a single language, but a language family. The Chinese languages are mutually unintelligible. The fact that these languages share a common history and vocabulary it is usually much easier for a speaker of one Chinese language to learn other Chinese languages. 1.2 billion People use the Chinese language as their first language. Mandarin (one of the forms of the language) hold the status of official language in Mainland China, Singapore, and Taiwan, whereas Cantonese (another form) is the official language of Hong Kong and Macau.
  </p>
  <p className="course-details__overview__text">
  French is spoken as the first language in France, Quebec, Ontario, and New Brunswick as well as other Francophone regions, Belgium, Western Switzerland, Monaco, parts of the United States, partly in Luxembourg and in Northern Italy. Also, it is the most studied language worldwide.
  </p>
  <p className="course-details__overview__text">
  As we account the history of French, it is considered to be an international language of literature and scientific standards and is a primary or second language of many international organizations including the UN, the EU, the North Atlantic Treaty Organization, the WTO, and the International Olympic Committee.
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
        <Tab eventKey="Why Oracle" title="Why Oracle">
          <div className="tabs-content">
          <div className="course-details__curriculum">
                <h4 className="course-details__curriculum__title">
                WHY ORACLE
                </h4>
                <ul className="list-unstyled course-details__overview__lists">
    <li>
   
      <span className="fa-solid fa-check icon-check" />
      We Focus on overall understanding of the language: fluency, grammar, presentation, and writing.
    </li>
    <li>
      <span className="fa-solid fa-check icon-check" />
      Form small batches of 10-12 students to ensure quality education.
    </li>
    <li>
      <span className="fa-solid fa-check icon-check" />
      Regular assessment of students in a comprehensive manner.
    </li>
    <li>
      <span className="fa-solid fa-check icon-check" />
      Activities like role play, video case study, etc. to facilitate all around understanding.
    </li>
    <li>
      <span className="fa-solid fa-check icon-check" />
      360-degree feedback mechanism.
    </li>
    <li>
      <span className="fa-solid fa-check icon-check" />
      Flexible batches for kids, professionals, doctors, engineers.
    </li>
    <li>
      <span className="fa-solid fa-check icon-check" />
      We have highly qualified and experienced Faculties conducting interactive classes based on simple yet innovative methods to teach languages.
    </li>
   
    <li>
      <span className="fa-solid fa-check icon-check" />
      Every student is precious to us. So we have created positive learning environment for our students where all learners feel confident and motivated.
    </li>
  </ul>
             
                
              
                
              </div>
          </div>
        </Tab>
        <Tab eventKey="curriculum" title="Levels">
          <div className="tabs-content Levels-content-tab-btn">
          <div className="course-details__curriculum">
                <h4 className="course-details__curriculum__title">
                LEVELS:
                </h4>
             
                <p className="course-details__curriculum__text"><b>A1:</b>  A lot of motivation is given to the learner to express his/her feelings, opinions and needs in the
                              same language. The learner will be able to understand and use common expressions and very simple
                              sentences. The learner will be able to introduce himself/herself and freely ask general questions from
                              others.
                           </p>
                           <p className="course-details__curriculum__text"><b>A2:</b> The learner will be able to read and write simple sentences and paragraphs. A lot of emphases is
                              given on the grammar and pronunciation of the language. The clear understanding of the basics is given
                              a lot of significance. The learner will be able to communicate in general daily tasks.
                           </p>

                           <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>LEVEL A</Accordion.Header>
        <Accordion.Body>
        <p className='course-details__curriculum__text'><b>A1:</b>  A lot of motivation is given to the learner to express his/her feelings, opinions and needs in the
                              same language. The learner will be able to understand and use common expressions and very simple
                              sentences. The learner will be able to introduce himself/herself and freely ask general questions from
                              others.
                           </p>
                           <p className='course-details__curriculum__text'><b>A2:</b> The learner will be able to read and write simple sentences and paragraphs. A lot of emphases is
                              given on the grammar and pronunciation of the language. The clear understanding of the basics is given
                              a lot of significance. The learner will be able to communicate in general daily tasks.
                           </p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>LEVEL B</Accordion.Header>
        <Accordion.Body>
        <p className='course-details__curriculum__text'><b>B1:</b> The learner will be able to improve their speaking ability and fluency. Also, a clear understanding
                              of the language will be developed and he/she will easily be able to express himself/herself on a range of
                              topics related to personal interests, work, and other familiar topics.
                           </p>
                           <p className='course-details__curriculum__text'><b>B2:</b> A great importance is given to provide the learners with space where they can learn and communicate
                              freely in the language. She/he will learn new idioms, expressions and will master the creative use of the
                              language. The learner will be able to create comprehensive and detailed text on a wide range of topics. 
                           </p>

        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>LEVEL C</Accordion.Header>
        <Accordion.Body>
        <p className='course-details__curriculum__text'><b>C1:</b> The learner will be able to write letters and will have a hands-on practice to use the language in a smooth manner. The learners are given a thorough knowledge about the literature, history, and culture of the language.</p>
        <p className='course-details__curriculum__text'><b>C2:</b> The learner will have a great command on the language. The learners are instructed to practice novels,
                              magazines and a variety of assignments. The learner will be able to understand, read and write the
                              language with ease and will achieve perfection in all the circumstances. 
                           </p>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    <button class="btn-hover color-2">For more details - Call 011-49404131</button> 
                {/* <ul className="list-unstyled course-details__curriculum__lists">
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
                </ul> */}
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
                <i className="fa-regular fa-calendar-days icon-history" />
                
                Duration:<span>3 Month - 18 Month</span>
              </li>
              <li>
                <i className="fa-regular fa-clock icon-history" />
                Timing:<span>9:30 AM - 9:30 PM</span>
              </li>
              <li>
             
                <i className="fa-solid fa-users icon-reading"/>
                Batch Size :<span>  7-10 Students</span>
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
<QuiryForm/>

<CompanyLogoSlider/>



<Footer/>

    </>
  )
}

export default Page;
