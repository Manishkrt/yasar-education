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
   <h5 class="section-title__tagline text-center">HOME BEST EDUCATION PROGRAMS FOR KIDS AND TEENS<svg class="arrow-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 55 13"><g clip-path="url(#clip0_324_36194)"><path d="M10.5406 6.49995L0.700562 12.1799V8.56995L4.29056 6.49995L0.700562 4.42995V0.819946L10.5406 6.49995Z"></path><path d="M25.1706 6.49995L15.3306 12.1799V8.56995L18.9206 6.49995L15.3306 4.42995V0.819946L25.1706 6.49995Z"></path><path d="M39.7906 6.49995L29.9506 12.1799V8.56995L33.5406 6.49995L29.9506 4.42995V0.819946L39.7906 6.49995Z"></path><path d="M54.4206 6.49995L44.5806 12.1799V8.56995L48.1706 6.49995L44.5806 4.42995V0.819946L54.4206 6.49995Z"></path></g></svg></h5>

  <div className="container mt-5">

   
    <div className="row">
      <div className="col-xl-8">
        <div className="course-details__thumb">
          <img src="/assets/img/kids.jpg" alt="eduact" />
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
        <h3 class="course-details__sidebar__title">KIDS SECTION</h3>

        {/* <h3 className="course-details__title">
        OUR BRANCHES
        </h3> */}
        <div className="course-details__tabs tabs-box">
        <p className="course-details__overview__text">
        Oracle International Language Institute presents Kids and Teen programmes :-
“Wisdom is totality of intuition and analytical brains”
                  </p>
                 

                  <h3 class="course-details__sidebar__title">WHY SHOULD A KID WAIT TO LEARN FROM HIS/HER OWN MISTAKES ?</h3>
                  <p className="course-details__overview__text">Our English courses for kids have been designed around the way children can learn everything very easily.
We have number of courses available for kids which will help to develop their brain and make them future ready…</p>
<ul className='course-details__sidebar__lists clerfix Kids-section-ul'>
<li>
                <i className="fa-solid fa-angles-right icon-history" />
                English
              </li>
              <li>
                <i className="fa-solid fa-angles-right icon-history" />
                French
              </li>
              <li>
                <i className="fa-solid fa-angles-right icon-history" />
                German
              </li>
              <li>
                <i className="fa-solid fa-angles-right icon-history" />
                Spanish
              </li>
              <li>
                <i className="fa-solid fa-angles-right icon-history" />
                Personality Development
              </li>
              <li>
                <i className="fa-solid fa-angles-right icon-history" />
                Computer Courses
              </li>
              <li>
                <i className="fa-solid fa-angles-right icon-history" />
                Stage Facing
              </li>
</ul>
<p className="course-details__overview__text">Explore our range of courses available through online and offline resources.</p>
<p className="course-details__overview__text">Our Online, offline classroom courses encourage children to experiment with language, build confidence and improve their communication skill in a safe supportive environment .</p>
                  <h3 class="course-details__sidebar__title">CREATIVE LEARNING</h3>
                  <p className="course-details__overview__text">Seeking a perfect place for your Teens during the most crucial years of their development ?</p>
                  <p className="course-details__overview__text">Oracle Institute is the place where your child can learn, develop his/her skills and self-expression through the most innovative play-way method.
They will have the freedom to explore and experiment very aspect of knowledge which will result in their holistic development.</p>
                  <h3 class="course-details__sidebar__title">Given points will be the part of your course</h3>
                  <ul className="list-unstyled course-details__overview__lists">
                    <li>
                      <span className="fa-solid fa-check icon-check" />
                      Vocab Enhance
                    </li>
                    <li>
                      <span className="fa-solid fa-check icon-check" />
                      Drama
                    </li>
                    <li>
                      <span className="fa-solid fa-check icon-check" />
                      Role Play
                    </li>
                    <li>
                      <span className="fa-solid fa-check icon-check" />
                      Songs
                    </li>
                    <li>
                      <span className="fa-solid fa-check icon-check" />
                      School Language Syllabus
                    </li>
                    <li>
                      <span className="fa-solid fa-check icon-check" />
                      Personality Development
                    </li>
                  </ul>
                  <p className="course-details__overview__text">Above mentioned points will also be the part of language course (French, German, Spanish, English).</p>
        <h3 class="course-details__sidebar__title">TRAINED FACILITATORS</h3>
        <p className="course-details__overview__text">We have qualified, enthusiastic teachers who employ their innovative teaching style and techniques for enhancing your kids / teens to dazzling trail.</p>
       <h3 class="course-details__sidebar__title">COURSE DETAILS :- FOR JUNIORS / TEENS</h3>
       <p className="course-details__overview__text">French / German / Spanish / Personality Development <br></br>45 Days – 3 Months Regular Course<br></br>Crash Course – 30 Days</p>
       <h3 class="course-details__sidebar__title">Spoken English</h3>
       <p className="course-details__overview__text">3 Months</p>
       <h3 class="course-details__sidebar__title">HOLIDAYS COURSE ARE ALSO AVAILABLE (FOR SUMMER VACATION AND VINTOR BRAKE)</h3>
       <p className="course-details__overview__text">Course Duration<br></br>15 Days Course,<br></br>30 Days Course ,<br></br>2 Months Course</p>
<p className="course-details__overview__text">LEARN INDEPENDENTLY BY DEVELOPING EFFECTIVE READING, SPEAKING, WRITING AND LISTENING SKILLS.</p>
        </div>
      </div>
      <div
        className="col-xl-4 wow fadeInRight animated"
        
      >
        <div className="course-details__sidebar">
          <div className="course-details__sidebar__item">
            <h3 className="course-details__sidebar__title">Course Features</h3>
            <ul className="course-details__sidebar__lists clerfix">
            <li>
                <i class="fa-regular fa-calendar-days icon-history"></i>Duration:
            <span>  3 Months - 18 Months</span>
            </li>
            <li>
                <i class="fa-regular fa-clock icon-history"></i>Timing:<span>9:30 AM - 9:30 PM</span>
            </li>
            <li><i class="fa-solid fa-users icon-reading"></i>Students:<span> Batch Size 7-10 </span></li>
            
             
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

   
    
   <CompanyLogoSlider/>

   
<Footer/>
    </>
  )
}

export default page;
