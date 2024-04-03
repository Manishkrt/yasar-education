import CoomonStudentSlider from '@/component/CoomonStudentSlider';
import Footer from '@/component/Footer';
import Navigation from '@/component/Navigation';
import React from 'react'
import CompanyLogoSlider from '../../component/CompanyLogoSlider';
import QuiryForm from '@/component/QuiryForm';
import { CourseData } from '@/utils/data';
import Link from 'next/link';

const page = () => {
  const CourseList = CourseData
  return (
    <>
      <Navigation />



   <CoomonStudentSlider/> 
   <section className="course-two course-two--page pt-pb">
  
        <div className="container">
          <div className="row">
            {CourseList.map((courseValue)=>( 
            <div
              className="col-xl-4 col-md-6 wow fadeInUp animated">
              <div className="course-two__item">
                <div className="course-two__thumb">
                  <Link href={`/${courseValue.slug}`}>
                  <img src={courseValue.image} alt="eduact" />
                  </Link>
                  {/* <img src="/assets/img/course-2-1.png" alt="eduact" /> */}
                  <a className="course-two__like" href="javascript:void(0);">
                    <span className="icon-like fa-regular fa-heart" />
                  </a>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 353 177">
                    <path d="M37 0C16.5655 0 0 16.5655 0 37V93.4816C0 103.547 4.00259 113.295 11.7361 119.737C54.2735 155.171 112.403 177 176.496 177C240.589 177 298.718 155.171 341.261 119.737C348.996 113.295 353 103.546 353 93.4795V37C353 16.5655 336.435 0 316 0H37Z" />
                  </svg>
                </div>
                
                <div className="course-two__content">
                  <div className="course-two__time">{courseValue.videosTime}</div>
                  <div className="course-two__ratings">
                    <span className="icon-star fa-solid fa-star" />
                    <span className="icon-star fa-solid fa-star" />
                    <span className="icon-star fa-solid fa-star" />
                    <span className="icon-star fa-solid fa-star" />
                    <span className="icon-star fa-solid fa-star" />
                    <div className="course-two__ratings__reviews">( {courseValue.ratingCount} Reviews) </div>
                  </div>
                  <h3 className="course-two__title"> 
                    <Link href={`/${courseValue.slug}`}>{courseValue.title}</Link>
                  </h3>
                  <div className="course-two__bottom">
                    <div className="course-two__author">
                      <img src="/assets/img/testimonial-1-author-1.png" alt="eduact" />
                      <h5 className="course-two__author__name"> {courseValue.projectManager}</h5>
                      <p className="course-two__author__designation">
                        Project Manager
                      </p>
                    </div>
                    <div className="course-two__meta">
                      <h4 className="course-two__meta__price"> {courseValue.price}</h4>
                      <p className="course-two__meta__class">{courseValue.totalLesson} Lessons</p>
                    </div>
                  </div>
                </div>
                
              </div>
              
            </div>
            ))}
            <div
              className="col-xl-4 col-md-6 wow fadeInUp animated">
              <div className="course-two__item">
                <div className="course-two__thumb">
                  <img src="/assets/img/course-2-1.png" alt="eduact" />
                  <a className="course-two__like" href="javascript:void(0);">
                    <span className="icon-like fa-regular fa-heart" />
                  </a>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 353 177">
                    <path d="M37 0C16.5655 0 0 16.5655 0 37V93.4816C0 103.547 4.00259 113.295 11.7361 119.737C54.2735 155.171 112.403 177 176.496 177C240.589 177 298.718 155.171 341.261 119.737C348.996 113.295 353 103.546 353 93.4795V37C353 16.5655 336.435 0 316 0H37Z" />
                  </svg>
                </div>
                
                <div className="course-two__content">
                  <div className="course-two__time">20 Hours</div>
                  <div className="course-two__ratings">
                    <span className="icon-star fa-solid fa-star" />
                    <span className="icon-star fa-solid fa-star" />
                    <span className="icon-star fa-solid fa-star" />
                    <span className="icon-star fa-solid fa-star" />
                    <span className="icon-star fa-solid fa-star" />
                    <div className="course-two__ratings__reviews">(25 Reviews)</div>
                  </div>
                  <h3 className="course-two__title">
                    <a href="management-consulting.html">
                      Management Consultants in Competitive Markets
                    </a>
                  </h3>
                  <div className="course-two__bottom">
                    <div className="course-two__author">
                      <img src="assets/images/course/author-1.png" alt="eduact" />
                      <h5 className="course-two__author__name">Guy Hawkins</h5>
                      <p className="course-two__author__designation">
                        Project Manager
                      </p>
                    </div>
                    <div className="course-two__meta">
                      <h4 className="course-two__meta__price">$473.00</h4>
                      <p className="course-two__meta__class">15 Lessons</p>
                    </div>
                  </div>
                </div>
                
              </div>
              
            </div>
            {/* <div
              className="col-xl-4 col-md-6 wow fadeInUp animated"

            >
              <div className="course-two__item">
                <div className="course-two__thumb">
                  <img src="/assets/img/course-2-2.png" alt="eduact" />
                  <a className="course-two__like" href="javascript:void(0);">
                    <span className="icon-like fa-regular fa-heart" />
                  </a>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 353 177">
                    <path d="M37 0C16.5655 0 0 16.5655 0 37V93.4816C0 103.547 4.00259 113.295 11.7361 119.737C54.2735 155.171 112.403 177 176.496 177C240.589 177 298.718 155.171 341.261 119.737C348.996 113.295 353 103.546 353 93.4795V37C353 16.5655 336.435 0 316 0H37Z" />
                  </svg>
                </div>
                
                <div className="course-two__content">
                  <div className="course-two__time">20 Hours</div>
                  <div className="course-two__ratings">
                    <span className="icon-star fa-solid fa-star" />
                    <span className="icon-star fa-solid fa-star" />
                    <span className="icon-star fa-solid fa-star" />
                    <span className="icon-star fa-solid fa-star" />
                    <span className="icon-star fa-solid fa-star" />
                    <div className="course-two__ratings__reviews">(25 Reviews)</div>
                  </div>
                  <h3 className="course-two__title">
                    <a href="web-development.html">
                      The Ultimate Developer Course For Future Learner
                    </a>
                  </h3>
                  <div className="course-two__bottom">
                    <div className="course-two__author">
                      <img src="assets/images/course/author-1.png" alt="eduact" />
                      <h5 className="course-two__author__name">Guy Hawkins</h5>
                      <p className="course-two__author__designation">
                        Project Manager
                      </p>
                    </div>
                    <div className="course-two__meta">
                      <h4 className="course-two__meta__price">$473.00</h4>
                      <p className="course-two__meta__class">15 Lessons</p>
                    </div>
                  </div>
                </div>
                
              </div>
              
            </div>
            <div
              className="col-xl-4 col-md-6 wow fadeInUp animated"

            >
              <div className="course-two__item">
                <div className="course-two__thumb">
                  <img src="/assets/img/course-2-3.png" alt="eduact" />
                  <a className="course-two__like" href="javascript:void(0);">
                    <span className="icon-like fa-regular fa-heart" />
                  </a>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 353 177">
                    <path d="M37 0C16.5655 0 0 16.5655 0 37V93.4816C0 103.547 4.00259 113.295 11.7361 119.737C54.2735 155.171 112.403 177 176.496 177C240.589 177 298.718 155.171 341.261 119.737C348.996 113.295 353 103.546 353 93.4795V37C353 16.5655 336.435 0 316 0H37Z" />
                  </svg>
                </div>
                
                <div className="course-two__content">
                  <div className="course-two__time">20 Hours</div>
                  <div className="course-two__ratings">
                    <span className="icon-star fa-solid fa-star" />
                    <span className="icon-star fa-solid fa-star" />
                    <span className="icon-star fa-solid fa-star" />
                    <span className="icon-star fa-solid fa-star" />
                    <span className="icon-star fa-solid fa-star" />
                    <div className="course-two__ratings__reviews">(25 Reviews)</div>
                  </div>
                  <h3 className="course-two__title">
                    <a href="frontend-development.html">
                      The Special HTML &amp; CSS Bootcamp Edition
                    </a>
                  </h3>
                  <div className="course-two__bottom">
                    <div className="course-two__author">
                      <img src="assets/images/course/author-1.png" alt="eduact" />
                      <h5 className="course-two__author__name">Guy Hawkins</h5>
                      <p className="course-two__author__designation">
                        Project Manager
                      </p>
                    </div>
                    <div className="course-two__meta">
                      <h4 className="course-two__meta__price">$473.00</h4>
                      <p className="course-two__meta__class">15 Lessons</p>
                    </div>
                  </div>
                </div>
                
              </div>
              
            </div>
            <div
              className="col-xl-4 col-md-6 wow fadeInUp animated"

            >
              <div className="course-two__item">
                <div className="course-two__thumb">
                  <img src="/assets/img/course-2-4.png" alt="eduact" />
                  <a className="course-two__like" href="javascript:void(0);">
                    <span className="icon-like fa-regular fa-heart" />
                  </a>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 353 177">
                    <path d="M37 0C16.5655 0 0 16.5655 0 37V93.4816C0 103.547 4.00259 113.295 11.7361 119.737C54.2735 155.171 112.403 177 176.496 177C240.589 177 298.718 155.171 341.261 119.737C348.996 113.295 353 103.546 353 93.4795V37C353 16.5655 336.435 0 316 0H37Z" />
                  </svg>
                </div>
                
                <div className="course-two__content">
                  <div className="course-two__time">20 Hours</div>
                  <div className="course-two__ratings">
                    <span className="icon-star fa-solid fa-star" />
                    <span className="icon-star fa-solid fa-star" />
                    <span className="icon-star fa-solid fa-star" />
                    <span className="icon-star fa-solid fa-star" />
                    <span className="icon-star fa-solid fa-star" />
                    <div className="course-two__ratings__reviews">(25 Reviews)</div>
                  </div>
                  <h3 className="course-two__title">
                    <a href="uiux-design.html">
                      Building Responsive User Interfaces to Implementing
                    </a>
                  </h3>
                  <div className="course-two__bottom">
                    <div className="course-two__author">
                      <img src="assets/images/course/author-1.png" alt="eduact" />
                      <h5 className="course-two__author__name">Wade Warren</h5>
                      <p className="course-two__author__designation">Finance</p>
                    </div>
                    <div className="course-two__meta">
                      <h4 className="course-two__meta__price">$473.00</h4>
                      <p className="course-two__meta__class">15 Lessons</p>
                    </div>
                  </div>
                </div>
                
              </div>
              
            </div>
            <div
              className="col-xl-4 col-md-6 wow fadeInUp animated"

            >
              <div className="course-two__item">
                <div className="course-two__thumb">
                  <img src="/assets/img/course-2-5.png" alt="eduact" />
                  <a className="course-two__like" href="javascript:void(0);">
                    <span className="icon-like fa-regular fa-heart" />
                  </a>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 353 177">
                    <path d="M37 0C16.5655 0 0 16.5655 0 37V93.4816C0 103.547 4.00259 113.295 11.7361 119.737C54.2735 155.171 112.403 177 176.496 177C240.589 177 298.718 155.171 341.261 119.737C348.996 113.295 353 103.546 353 93.4795V37C353 16.5655 336.435 0 316 0H37Z" />
                  </svg>
                </div>
                
                <div className="course-two__content">
                  <div className="course-two__time">20 Hours</div>
                  <div className="course-two__ratings">
                    <span className="icon-star fa-solid fa-star" />
                    <span className="icon-star fa-solid fa-star" />
                    <span className="icon-star fa-solid fa-star" />
                    <span className="icon-star fa-solid fa-star" />
                    <span className="icon-star fa-solid fa-star" />
                    <div className="course-two__ratings__reviews">(25 Reviews)</div>
                  </div>
                  <h3 className="course-two__title">
                    <a href="digital-photography.html">
                      Photography Crash Course for Beginners
                    </a>
                  </h3>
                  <div className="course-two__bottom">
                    <div className="course-two__author">
                      <img src="assets/images/course/author-1.png" alt="eduact" />
                      <h5 className="course-two__author__name">Wade Warren</h5>
                      <p className="course-two__author__designation">Finance</p>
                    </div>
                    <div className="course-two__meta">
                      <h4 className="course-two__meta__price">$473.00</h4>
                      <p className="course-two__meta__class">15 Lessons</p>
                    </div>
                  </div>
                </div>
                
              </div>
              
            </div>
            <div
              className="col-xl-4 col-md-6 wow fadeInUp animated"

            >
              <div className="course-two__item">
                <div className="course-two__thumb">
                  <img src="/assets/img/course-2-6.png" alt="eduact" />
                  <a className="course-two__like" href="javascript:void(0);">
                    <span className="icon-like fa-regular fa-heart" />
                  </a>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 353 177">
                    <path d="M37 0C16.5655 0 0 16.5655 0 37V93.4816C0 103.547 4.00259 113.295 11.7361 119.737C54.2735 155.171 112.403 177 176.496 177C240.589 177 298.718 155.171 341.261 119.737C348.996 113.295 353 103.546 353 93.4795V37C353 16.5655 336.435 0 316 0H37Z" />
                  </svg>
                </div>
                
                <div className="course-two__content">
                  <div className="course-two__time">20 Hours</div>
                  <div className="course-two__ratings">
                    <span className="icon-star fa-solid fa-star" />
                    <span className="icon-star fa-solid fa-star" />
                    <span className="icon-star fa-solid fa-star" />
                    <span className="icon-star fa-solid fa-star" />
                    <span className="icon-star fa-solid fa-star" />
                    <div className="course-two__ratings__reviews">(25 Reviews)</div>
                  </div>
                  <h3 className="course-two__title">
                    <a href="online-business.html">
                      Sales and Marketing For Online Businesses
                    </a>
                  </h3>
                  <div className="course-two__bottom">
                    <div className="course-two__author">
                      <img src="assets/images/course/author-1.png" alt="eduact" />
                      <h5 className="course-two__author__name">Guy Hawkins</h5>
                      <p className="course-two__author__designation">
                        Project Manager
                      </p>
                    </div>
                    <div className="course-two__meta">
                      <h4 className="course-two__meta__price">$473.00</h4>
                      <p className="course-two__meta__class">15 Lessons</p>
                    </div>
                  </div>
                </div>
                
              </div>
              
            </div> */}
          </div>
        </div>
        
      </section>






      <QuiryForm />

      <CompanyLogoSlider />



      <Footer />
    </>
  )
}

export default page;
