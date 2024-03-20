"use client";
import React from 'react'
import Link from 'next/link'
import Slider from "react-slick";

const Blog = () => {
    var settings = {
        dots: false,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, 
        slidesToScroll: 1,
        prevArrow: null, 
        nextArrow: null, 
        responsive: [
            {
              breakpoint: 768, // Breakpoint for small screens
              settings: {
                slidesToShow: 1 // Show 1 item on small screens
              }
            }
          ]
      };

  return (
    <section className='py-100 py-md-80 py-sm-50'>
        <div className="container">
        <div className="mb-4 text-center">
            <h5 className="text-primary mb-0"> 
              News &nbsp;
              <svg
                className="arrow-svg  subtitle-svg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 55 13"
              >
                <g clipPath="url(#clip0_324_36194)">
                  <path d="M10.5406 6.49995L0.700562 12.1799V8.56995L4.29056 6.49995L0.700562 4.42995V0.819946L10.5406 6.49995Z"></path>
                  <path d="M25.1706 6.49995L15.3306 12.1799V8.56995L18.9206 6.49995L15.3306 4.42995V0.819946L25.1706 6.49995Z"></path>
                  <path d="M39.7906 6.49995L29.9506 12.1799V8.56995L33.5406 6.49995L29.9506 4.42995V0.819946L39.7906 6.49995Z"></path>
                  <path d="M54.4206 6.49995L44.5806 12.1799V8.56995L48.1706 6.49995L44.5806 4.42995V0.819946L54.4206 6.49995Z"></path>
                </g>
              </svg>
            </h5>
            <h2 className="text-dark">Latest Updates & Notice</h2>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-8 col-12">
                <div className='blog-slider-wrap'>
                <Slider {...settings}>
                    <div className="px-2">
                        <div className="blog-card-wrap rounded-4 position-relative mb-5">
                            <img src="/assets/img/blog-2-1.jpeg" alt="blog" className='img-fluid w-100 rounded-4'  />
                            <div className="blog-card-detail position-absolute top-100 start-50 translate-middle px-3 w-100">
                                <div className="bg-white shadow rounded-top-4 rounded-bottom-5 p-3">
                                    <div className="d-flex align-items-center justify-content-between mb-3">
                                        <span className="btn-sm bg-primary text-white rounded px-2 py-1">
                                            Category
                                        </span>
                                        <span className='text-secondary'>26 Mar, 2023</span>
                                    </div>
                                    <h5>The Complete Web Developer Guideline 2023</h5>
                                    <div className="text-end">
                                        <Link href="#"></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                    <div className="px-2">
                        <div className="blog-card-wrap rounded-4 position-relative mb-5">
                            <img src="/assets/img/blog-2-1.jpeg" alt="blog" className='img-fluid w-100 rounded-4'  />
                            <div className="blog-card-detail position-absolute top-100 start-50 translate-middle px-3 w-100">
                                <div className="bg-white shadow rounded-top-4 rounded-bottom-5 p-3">
                                    <div className="d-flex align-items-center justify-content-between mb-3">
                                        <span className="btn-sm bg-primary text-white rounded px-2 py-1">
                                            Category
                                        </span>
                                        <span className='text-secondary'>26 Mar, 2023</span>
                                    </div>
                                    <h5>The Complete Web Developer Guideline 2023</h5>
                                    <div className="text-end">
                                        <Link href="#"></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                    <div className="px-2">
                        <div className="blog-card-wrap rounded-4 position-relative mb-5">
                            <img src="/assets/img/blog-2-1.jpeg" alt="blog" className='img-fluid w-100 rounded-4'  />
                            <div className="blog-card-detail position-absolute top-100 start-50 translate-middle px-3 w-100">
                                <div className="bg-white shadow rounded-top-4 rounded-bottom-5 p-3">
                                    <div className="d-flex align-items-center justify-content-between mb-3">
                                        <span className="btn-sm bg-primary text-white rounded px-2 py-1">
                                            Category
                                        </span>
                                        <span className='text-secondary'>26 Mar, 2023</span>
                                    </div>
                                    <h5>The Complete Web Developer Guideline 2023</h5>
                                    <div className="text-end">
                                        <Link href="#"></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                    
                     
                </Slider>
                </div>
            </div>
            {/* <div className="col-lg-4 col-md-4 col-12">
                <div className="bg-primary p-lg-4 p-2 rounded-5">
                    <h3 className='text-center text-white  ' >Notice Board</h3>
                    <div className="">
                        <ul className='p-0 list-style-none'>
                            <li className='rounded text-decoration-underline  my-2 text-white px-2 py-2'>
                                <Link href='#' className='cursive text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem modi numquam quo?</Link>
                            </li> 
                            <li className='rounded text-decoration-underline  my-2 text-white px-2 py-2'>
                                <Link href='#' className='cursive text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem modi numquam quo?</Link>
                            </li> 
                            <li className='rounded text-decoration-underline  my-2 text-white px-2 py-2'>
                                <Link href='#' className='cursive text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem modi numquam quo?</Link>
                            </li> 
                            <li className='rounded text-decoration-underline  my-2 text-white px-2 py-2'>
                                <Link href='#' className='cursive text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem modi numquam quo?</Link>
                            </li> 
                         
                           
                           
                         
                            
                        </ul>
                    </div>

                </div>
            </div> */}
          </div>
        </div>
    </section>
  )
}

export default Blog