'use client'
import CompanyLogoSlider from '@/component/CompanyLogoSlider';
import CoomonStudentSlider from '@/component/CoomonStudentSlider';
import Footer from '@/component/Footer';
import Navigation from '@/component/Navigation';
import QuiryForm from '@/component/QuiryForm';
import React from 'react'
import { Tab, Tabs } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';


const page = () => {
  return (
   <>
   <Navigation/>
   <CoomonStudentSlider/>
   <section className="course-details branch visit-our-branches-in-delhi pt-pb">
  <h5 className="section-title__tagline text-center">
  HOME GET OUR ESSISIAL SERVICES IN DELHI
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
  <div className="container mt-5">
    <div className="row">
      <div className="col-xl-8">
        <div className="course-details__thumb">
          <img src="/assets/img/services.jpg" alt="eduact" />
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
        </div>
        <h3 className="course-details__sidebar__title">Best English Speaking Courses & International Languages Institute in Connaught Place and Delhi NCR</h3>
        <div className="course-details__tabs tabs-box">
          <p className="course-details__overview__text">
          To enhance the employability of students by developing the following skills:


          </p>
        
          <Accordion defaultActiveKey="0">
                          <Accordion.Item eventKey="0">
                            <Accordion.Header>1:Foundation Level</Accordion.Header>
                            <Accordion.Body>
                              <p className='course-details__curriculum__text'><b>A1:</b>  Can understand and use familiar, everyday expressions and very simple sentences, which relate to the satisfying of concrete needs. Can introduce him/her and others as well as ask others about themselves – e.g. where they live, who they know and what they own – and can respond to questions of this nature. Can communicate in a simple manner if the person they are speaking to speaks slowly and clearly and is willing to help.
                              </p>
                              <p className='course-details__curriculum__text'><b>A2:</b>  Can understand and use familiar, everyday expressions and very simple sentences, which relate to the satisfying of concrete needs. Can introduce him/her and others as well as ask others about themselves – e.g. where they live, who they know and what they own – and can respond to questions of this nature. Can communicate in a simple manner if the person they are speaking to speaks slowly and clearly and is willing to help.
                              </p>
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="1">
                            <Accordion.Header>2: Intermediate Level</Accordion.Header>
                            <Accordion.Body>
                              <p className='course-details__curriculum__text'><b>B1:</b> Can understand the main points when clear, standard language is used and the focus is on familiar topics associated with work, school, leisure time, etc. Can deal with most situations typically encountered when travelling in the language region. Can express him/ herself simply and coherently regarding familiar topics and areas of personal interest. Can report on experiences and events , describe dreams, hopes and goals as well as make short statements to justify or explain his/her own views and plans.
                              </p>
                              <p className='course-details__curriculum__text'><b>B2:</b> Can understand the main contents of complex texts on concrete and abstract topics; also understands specialized discussions in his/her own primary area of specialization. Can communicate so spontaneously and fluently that a normal conversation with native speakers is easily possible without a great deal of effort on either side. Can express him/ herself on a wide range of topics in a clear and detailed manner, explain his/her position on a current issue and indicate the benefits and drawbacks of various options.
                              </p>

                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="2">
                            <Accordion.Header>3: Civil Engineering</Accordion.Header>
                            <Accordion.Body>
                              <p className='course-details__curriculum__text'><b>C1:</b> Can understand a wide range of challenging, longer texts and also grasp implicit meanings. Can express him/ herself spontaneously and fluently without having to search for words frequently and noticeably. Can use the language effectively and flexibly in his/her social and professional life or in training and studies. Can make clear, structured and detailed statements on complex topics and apply various means of text association appropriately in the process.</p>
                              <p className='course-details__curriculum__text'><b>C2:</b> Can effortlessly understand practically everything which he/she reads or hears. Can summarize information from various written and spoken sources, logically recounting the reasons and explanations. Can express him/ herself spontaneously with high fluency and precision and also make finer nuances of meaning clear in more complex topics..
                              </p>
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="3">
                            <Accordion.Header>4: IELTS (International English Language Testing System)</Accordion.Header>
                            <Accordion.Body>
                              <p className='course-details__curriculum__text'>International English Language Testing System is an international standardized test of English language proficiency. It is jointly managed by University of Cambridge ESOL Examinations, the British Council and IDP Education Pvt. Ltd. and was established in 1989. There are two versions of the IELTS: the Academic Version and the General Training Version. The Academic Version is intended for those who want to enroll in universities and other institutions of higher education and for professionals such as medical doctors and nurses who want to study or practice in an English-speaking country. The General Training Version is intended for those planning to undertake non-academic training or to gain work experience, or for immigration purposes. IELTS is accepted by most Australian, British, Canadian, Irish, New Zealand and South African academic institutions, over 3,000 academic institutions in the United States, and various professional organizations. It is also a requirement for immigration to Australia, New Zealand and Canada. No minimum score is required to pass the test. An IELTS result or Test Report Form is issued to all candidates with a score from "band 1" ("non-user") to "band 9" ("expert user") and each institution sets a different threshold. There is also a "band 0" score for those who did not attempt the test. Institutions are advised not to consider a report older than two years to be valid, unless the user proves that he has worked to maintain his level. [2][3] In 2007, IELTS tested over a million candidates in a single 12-month period for the first time ever, making it the world's most popular English language test for higher education and immigration.[4] In 2009, 1.4 million candidates took the IELTS test in over 130 countries, in 2011 there were 1.7 million candidates.</p>
                            
                            </Accordion.Body>
                          </Accordion.Item>
                        </Accordion>











          
        </div>
      </div>
      <div className="col-xl-4 wow fadeInRight animated">
        <div className="course-details__sidebar Course-Categories-wrapper">
          <div className="course-details__sidebar__item">
            <h3 className="course-details__sidebar__title">
              Course Categories
            </h3>
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

export default page;
