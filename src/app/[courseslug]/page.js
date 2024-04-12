'use client'

import React, { useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import Slider from 'react-slick';
import CompanyLogoSlider from '../../component/CompanyLogoSlider';
import QuiryForm from '@/component/QuiryForm';
import Navigation from '@/component/Navigation';
import Footer from '@/component/Footer';
import CoomonStudentSlider from '@/component/CoomonStudentSlider';
import Accordion from 'react-bootstrap/Accordion';
import { CourseData } from '@/utils/data';
import FormModal from '@/component/FormModal';

const Page =  ({ params }) => {
  // console.log("params", params);
  const CourseList = CourseData
  // courseslug

  const courseValue = CourseList.find(data => data.slug === params?.courseslug)
  // console.log("courseValue", courseValue);


  const [showModal, setShowModal] = useState(false);
  const handleEnrollClick = () => {
    setShowModal(true);
  };

  return (

    <>
<FormModal  show={showModal} handleClose={() => setShowModal(false)}/>
      <Navigation />

      <CoomonStudentSlider />






      <section className="course-details pt-pb">
        <div className="container">
          <div className="row">
            <div className="col-xl-8">
              <div className="course-details__thumb">
                <img src={courseValue.image} alt="eduact" />
              </div> 
              <div className="course-details__meta mb-3">
                <div className="course-details__meta__author mb-lg-0 mb-2">
                  <img src={courseValue.flagImage} alt="eduact" width={32} height={32} className='rounded-circle' />  
                </div>
                <h3 className="course-details__title text-capitalize mb-lg-0 ">
                {courseValue.title}
              </h3> 

                <div className="course-details__meta__price"><i className="fa-solid fa-indian-rupee-sign"></i> {courseValue.price}</div>
              </div>
              <div className='d-flex align-items-center gap-3 mb-4'>
                <div className="course-details__meta__cats ms-0 ">
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
              </div> 

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
                  <Tab eventKey="curriculum" title="Course Labels">
                    <div className="tabs-content Levels-content-tab-btn">
                      <div className="course-details__curriculum">
                        {/* <h4 className="course-details__curriculum__title">
                          LEVELS:
                        </h4>  */}
                        <div className='table-responsive'>
                          <table className="table text-center  table-bordered table align-middle"> 
                          <thead>
                            <tr>
                              <th>Course</th>
                              <th>Level</th>
                              <th>Duration</th>
                              <th>Fees</th>
                              <th>No. of Classes</th>
                            </tr>
                          </thead>
                            <tbody> 
                              {courseValue?.courseTable?.map((courseTableValue, i)=>(
                                <tr key={i+100} >
                                  {courseTableValue?.course && <td rowSpan={courseTableValue?.course.courseLavel} className='text-center text-capitalize'>{courseTableValue?.course.courseType}</td>}
                                  <td>{courseTableValue.levelName}</td>
                                  <td>{courseTableValue.duration}</td>
                                  <td>{courseTableValue.fee}</td>
                                  <td>{courseTableValue.totalClass}</td> 
                                </tr>
                              ))} 
                            </tbody>
                          </table>
                        </div>
                        {/* <Accordion defaultActiveKey="0">
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
                        </Accordion> */}
                        

                        <a href="tel:+91114940-4131"><button className="btn-hover color-2">For more details - Call 011-49404131</button></a>
                       
                      </div>
                    </div>
                  </Tab>
                  {/* <Tab eventKey="reviews" title="Reviews">
                    <div className='tab-content'>
                      <div className="course-details__comment">
                        <h3 className="course-details__review-title">2 Reviews</h3>
                       
                        <div className="course-details__comment-box">
                          <figure className="course-details__comment-box__thumb">
                            <img src="/assets/img/review-2-1.jpg" alt="eduact" />
                          </figure>
                         
                          <h4 className="course-details__comment-box__meta">David Shon</h4>
                         
                          <div className="course-details__comment-box__ratings">
                            <span className="fa fa-star" />
                            <span className="fa fa-star" />
                            <span className="fa fa-star" />
                            <span className="fa fa-star" />
                            <span className="fa fa-star" />
                          </div>
                        
                          <p className="course-details__comment-box__text">
                            Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh. Nam nec eros id
                            magna hendrerit sagittis. Nullam sed mi non odio feugiat volutpat sit amet
                            nec elit. Maecenas id hendrerit ipsum. Sed eget auctor metus, ac dapibus
                            dolor.
                          </p>
                        
                        </div>
                       
                        <div className="course-details__comment-box">
                          <figure className="course-details__comment-box__thumb">
                            <img src="/assets/img/review-2-2.jpg" alt="eduact" />
                          </figure>
                          
                          <h4 className="course-details__comment-box__meta">Sarah Albert</h4>
                      
                          <div className="course-details__comment-box__ratings">
                            <span className="fa fa-star" />
                            <span className="fa fa-star" />
                            <span className="fa fa-star" />
                            <span className="fa fa-star" />
                            <span className="fa fa-star" />
                          </div>
                         
                          <p className="course-details__comment-box__text">
                            Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh. Nam nec eros id
                            magna hendrerit sagittis. Nullam sed mi non odio feugiat volutpat sit amet
                            nec elit. Maecenas id hendrerit ipsum. Sed eget auctor metus, ac dapibus
                            dolor.
                          </p>
                         
                        </div>
                      
                      </div>

                    </div>
                  </Tab>
                  <Tab eventKey="instructor" title="Instructor">
                 
                  </Tab> */}
                </Tabs>
              </div>
              {/* tabs */}
            </div>
            <div className="col-xl-4 wow fadeInRight animated" >
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
                    {/* <li>

                      <i className=" fa-regular fa-circle-play icon-play-border" />
                      Videos<span>  {courseValue.videosTime}</span>
                    </li> */}
                    <li> 
                      <i className="fa-regular fa-building icon-logical-thinking" />
                      No. of class<span>  {courseValue.totalClass}</span>
                    </li> 
                  </ul>
                  <button className="eduact-btn eduact-btn-second" onClick={handleEnrollClick}>
                    <span className="eduact-btn__curve" />
                    Enroll Now
                    <i className="icon-arrow" />
                  </button>
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
