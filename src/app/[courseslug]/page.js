'use client'

import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import Slider from 'react-slick';
import CompanyLogoSlider from '../../component/CompanyLogoSlider';
import QuiryForm from '@/component/QuiryForm';
import Navigation from '@/component/Navigation';
import Footer from '@/component/Footer';
import CoomonStudentSlider from '@/component/CoomonStudentSlider';
import Accordion from 'react-bootstrap/Accordion';
import { CourseData } from '@/utils/data';

const Page = async ({ params }) => {
  // console.log("params", params);
  const CourseList = CourseData
  // courseslug

  const courseValue = CourseList.find(data => data.slug === params?.courseslug)
  // console.log("courseValue", courseValue);




  return (
    <>

      <Navigation />

      <CoomonStudentSlider />






      <section className="course-details">
        <div className="container">
          <div className="row">
            <div className="col-xl-8">
              <div className="course-details__thumb">
                <img src={courseValue.image} alt="eduact" />
              </div>
              {/* details-thumb */}
              <div className="course-details__meta">
                <div className="course-details__meta__author">
                  <img src="/assets/img/author-7.png" alt="eduact" /> 
                  <h5 className="course-details__meta__name"> {courseValue.projectManager}</h5>
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
                    ({courseValue.ratingCount} Reviews)
                  </div>
                </div>
                <div className="course-details__meta__price"> {courseValue.price}</div>
              </div>
              {/* details-meta */}
              <h3 className="course-details__title text-capitalize">
                {courseValue.title}
              </h3>
              {/* details-title */}

              <div className="course-details__tabs tabs-box">
                <Tabs defaultActiveKey="overview" id="course-details-tabs">
                  <Tab eventKey="overview" title="Overview">
                    <div className='tabs-content mt-4'>
                      <div className="course-details__overview">
                        <div dangerouslySetInnerHTML={{ __html: courseValue.description }} /> 
 
                      </div>

                    </div>
                  </Tab>
                  <Tab eventKey="Why Oracle" title="Why Oracle">
                    <div className="tabs-content">
                      <div className="course-details__curriculum">
                        <h4 className="course-details__curriculum__title">
                          WHY ORACLE
                        </h4>
                        <div dangerouslySetInnerHTML={{ __html: courseValue.oracleDescription }} />
                        
                      </div>
                    </div>
                  </Tab>
                  <Tab eventKey="curriculum" title="Levels">
                    <div className="tabs-content Levels-content-tab-btn">
                      <div className="course-details__curriculum">
                        <h4 className="course-details__curriculum__title">
                          LEVELS:
                        </h4> 
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
                        <button className="btn-hover color-2">For more details - Call 011-49404131</button>
                       
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
                      {/* <i className="fa-solid fa-clock"></i> */}
                      <i className="fa-regular fa-calendar-days icon-history" />

                      Duration:<span>  {courseValue.duration}</span>
                    </li>
                    <li>
                      <i className="fa-regular fa-clock icon-history" />
                      Timing:<span>  {courseValue.timing}</span>
                    </li>
                    <li>

                      <i className="fa-solid fa-users icon-reading" />
                      Batch Size :<span>   {courseValue.batchSize} Students</span>
                    </li>
                    <li>

                      <i className=" fa-regular fa-circle-play icon-play-border" />
                      Videos<span>  {courseValue.videosTime}</span>
                    </li>
                    <li>
                      <i className="fa-regular fa-lightbulb icon-logical-thinking" />
                      Skill Level<span>  {courseValue.skillLevel}</span>
                    </li>
                    <li>

                      <i className="fa-solid fa-language icon-Digital-marketing" />
                      Language:<span>  {courseValue.language}</span>
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
      <QuiryForm />

      <CompanyLogoSlider />



      <Footer />

    </>
  )
}

export default Page;
