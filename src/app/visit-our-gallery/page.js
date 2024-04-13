"use client"
import CompanyLogoSlider from '@/component/CompanyLogoSlider';
import CoomonStudentSlider from '@/component/CoomonStudentSlider';
import Footer from '@/component/Footer';
import Navigation from '@/component/Navigation';
import QuiryForm from '@/component/QuiryForm';
import React from 'react'

import { Tab, Tabs } from 'react-bootstrap';
const page = () => {
  return (
   <>
     <Navigation/>
   <CoomonStudentSlider/>
   <>
   
  <section className="gallery-page pt-pb">
    <div className='text-center'>
    <h2>GALLERY & VIDEOS
  
  
  {/* <svg
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
  </svg> */}
  </h2>
</div>
    <div className='Gallery_tabs-wrapper'>
  <Tabs defaultActiveKey="Gallery" id="Gallery" className='p-3'>
                  <Tab eventKey="Gallery" title="Gallery">
                    <div className='tabs-content mt-4'>
                      <div className="course-details__curriculum__title">
                      <section className="gallery-page">
                      
    <div className="container">
    <div className='text-start'>
                        <h4 className='section-title__tagline'>Gallery
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
                        </h4>
                        </div>
      <div className="row">
        {/* gallery-item-start */}
        <div className="col-lg-4 col-md-6">
          <div className="gallery-page__single">
            <img src="assets/img/gallery-1.jpg" alt="eduact" />
            <div className="gallery-page__icon">
              <a
                className="img-popup"
            
              />
            </div>
          </div>
        </div>
        {/* gallery-item-end */}
        {/* gallery-item-start */}
        <div className="col-lg-4 col-md-6">
          <div className="gallery-page__single">
            <img src="assets/img/gallery-2.jpg" alt="eduact" />
            <div className="gallery-page__icon">
              <a
                className="img-popup"
            
              />
            </div>
          </div>
        </div>
        {/* gallery-item-end */}
        {/* gallery-item-start */}
        <div className="col-lg-4 col-md-6">
          <div className="gallery-page__single">
            <img src="assets/img/gallery-3.jpg" alt="eduact" />
            <div className="gallery-page__icon">
              <a
                className="img-popup"
               
              />
            </div>
          </div>
        </div>
        {/* gallery-item-end */}
        {/* gallery-item-start */}
        <div className="col-lg-4 col-md-6">
          <div className="gallery-page__single">
            <img src="assets/img/gallery-2.jpg" alt="eduact" />
            <div className="gallery-page__icon">
              <a
                className="img-popup"
               
              />
            </div>
          </div>
        </div>
        {/* gallery-item-end */}
        {/* gallery-item-start */}
        <div className="col-lg-4 col-md-6">
          <div className="gallery-page__single">
            <img src="assets/img/gallery-5.jpg" alt="eduact" />
            <div className="gallery-page__icon">
              <a
                className="img-popup"
                href="assets/images/gallery/gallery-5.jpg"
              />
            </div>
          </div>
        </div>
        {/* gallery-item-end */}
        {/* gallery-item-start */}
        <div className="col-lg-4 col-md-6">
          <div className="gallery-page__single">
            <img src="assets/img/gallery-1.jpg" alt="eduact" />
            <div className="gallery-page__icon">
              <a
                className="img-popup"
                href="assets/images/gallery/gallery-6.jpg"
              />
            </div>
          </div>
        </div>
        {/* gallery-item-end */}
      </div>
    </div>
  </section>
 
                      </div>

                    </div>
                  </Tab>
                  <Tab eventKey="Video" title="Video">
                    <div className="tabs-content">
                      <div className="course-details__curriculum">
                      
                        <div className='container'>
                        <div className='text-start'>
                        <h4 className='section-title__tagline'>Video
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
                        </h4>
                        </div>
                        <div className="row">
  <div className="col-sm-4">
    <iframe
      width="100%"
      height={270}
      src="https://www.youtube.com/embed/exhocurjhyo"
      frameBorder={0}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen=""
    />
  </div>
  <div className="col-sm-4">
    <iframe
      width="100%"
      height={270}
      src="https://www.youtube.com/embed/e4daKpRdYok"
      frameBorder={0}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen=""
    />
  </div>
  <div className="col-sm-4">
    <iframe
      width="100%"
      height={270}
      src="https://www.youtube.com/embed/huzjv7qLdjs"
      frameBorder={0}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen=""
    />
  </div>
  <div className="col-sm-4">
    <iframe
      width="100%"
      height={270}
      src="https://www.youtube.com/embed/b7nqrOsxrS8"
      frameBorder={0}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen=""
    />
  </div>
</div>

                        </div>
                      
                      </div>
                    </div>
                  </Tab>
                  
                  
                </Tabs>
                </div>
   
  </section>
 
</>

 
   <QuiryForm/>
   
   <CompanyLogoSlider/>

  
<Footer/>

   
   </>
  )
}

export default page;
