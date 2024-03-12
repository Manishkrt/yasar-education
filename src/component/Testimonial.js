'use client'
import Link from 'next/link';
import React, { useState } from 'react'
import Slider from 'react-slick';

const Testimonial = () => {
     
    const settings = {
        dots: false,
        autoplay: true,
        infinite: true,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        focusOnSelect: true, 
        responsive: [ 
          {
            breakpoint: 992, // Medium screen
            settings: {
              slidesToShow: 2,
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
    <section className='testimonial-wrapper pb-100 pb-md-80 pb-sm-50'>
        <div className="container">
        <div className="mb-lg-4 text-center">
            <h5 className="text-primary mb-0"> 
              Testimonial &nbsp;
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
            <h2 className="text-dark">What people say about us</h2>
          </div>
          <div>
          <Slider {...settings}>
                    
                    <div className='testimonial-slider-wrap px-2'>
                        <div className="rounded-4 border position-relative mb-5 overflow-hidde"> 
                            <div className="position-absolute top-0 start-50 translate-middle"  >
                                <img src="/assets/img/testimonial-1-author-1.png" alt="testimonial" style={{width:'80px'}} />
                            </div>
                            <div className="p-3 mb-lg-3">
                            <div className='d-flex align-items-center mt-3 mb-3 gap-2'>
                                <div className='d-flex '>
                                <i className="fa-solid text-secondary fa-star"></i> 
                                <i className="fa-solid text-secondary fa-star"></i> 
                                <i className="fa-solid text-secondary fa-star"></i> 
                                <i className="fa-solid text-secondary fa-star"></i> 
                                <i className="fa-solid text-secondary fa-star"></i> 
                                </div> 
                            </div>
                            <p className="fs-18 fs-sm-14">
                            Flexible Classes refers to the process of acquiring knowledge or skills through the use of digital technologies and the internet
                            </p>
                            <p className="text-dark fs-18 fs-sm-16">Manish Chauhan</p>
                            </div>
                            <svg viewBox="0 0 416 249" xmlns="http://www.w3.org/2000/svg" className='position-absolute bottom-0 overflow-hidden rounded-bottom-4'>
                                    <g filter="url(#filter0_d_324_36064)">
                                        <path d="M296.443 526.351C291.626 517.219 286.22 508.4 280.351 499.907C274.064 490.803 267.257 482.07 260.072 473.662C252.166 464.412 243.802 455.551 235.132 447.015C225.525 437.563 215.537 428.493 205.305 419.728C193.907 409.977 182.21 400.591 170.293 391.477C157.025 381.325 143.506 371.508 129.809 361.934C114.574 351.278 99.1373 340.919 83.5681 330.773C66.2815 319.506 48.8344 308.493 31.2774 297.659C11.8453 285.67 -7.71089 273.899 -27.3627 262.269C-49.0253 249.452 -70.8004 236.801 -92.632 224.268C-112.751 212.719 -132.553 200.599 -151.773 187.605C-167.672 176.859 -183.186 165.529 -198.079 153.411C-210.223 143.528 -221.954 133.126 -233.015 122.043C-242.024 113.01 -250.588 103.518 -258.425 93.4561C-264.651 85.4701 -270.424 77.1028 -275.483 68.3262C-279.503 61.3457 -283.079 54.0865 -285.969 46.5676C-288.192 40.7857 -290.021 34.8356 -291.27 28.7606C-292.209 24.2029 -292.822 19.5763 -292.986 14.9289C-293.101 11.7908 -293.016 8.64358 -292.628 5.53246C-292.424 3.91736 -292.165 2.29171 -291.728 0.72597C-291.679 0.529505 -291.617 0.330416 -291.559 0.139576C-291.56 1.6512 -291.422 3.17245 -291.258 4.67452C-290.799 8.90587 -289.976 13.0825 -288.939 17.2111C-287.309 23.703 -285.103 30.0422 -282.479 36.194C-278.927 44.5375 -274.604 52.5471 -269.706 60.1738C-263.507 69.8349 -256.393 78.8972 -248.649 87.3719C-238.942 97.9926 -228.245 107.691 -216.918 116.571C-203.009 127.487 -188.159 137.18 -172.79 145.896C-153.752 156.686 -133.883 165.972 -113.594 174.141C-88.9088 184.08 -63.5671 192.361 -37.9282 199.441C-11.3405 206.779 15.589 212.887 42.7613 217.66C67.4471 221.999 92.326 225.272 117.29 227.514C141.053 229.653 164.9 230.869 188.764 231.226C211.313 231.559 233.873 231.113 256.392 229.925C277.174 228.838 297.929 227.116 318.614 224.801C337.536 222.679 356.4 220.056 375.184 216.945C391.68 214.211 408.11 211.094 424.452 207.59C438.374 204.605 452.242 201.341 466.025 197.777C476.913 194.966 487.745 191.97 498.512 188.749C506.072 186.491 513.591 184.133 521.068 181.624C524.972 180.313 528.87 178.974 532.737 177.541C533.207 177.365 533.677 177.189 534.148 177.014L296.443 526.351Z" fill='#4F5DE4'></path>
                                    </g>
                                </svg>
                        </div>
                    </div> 
                    <div className='testimonial-slider-wrap px-2'>
                        <div className="rounded-4 border position-relative mb-5 overflow-hidde"> 
                            <div className="position-absolute top-0 start-50 translate-middle"  >
                                <img src="/assets/img/testimonial-1-author-1.png" alt="testimonial" style={{width:'80px'}} />
                            </div>
                            <div className="p-3 mb-lg-3">
                            <div className='d-flex align-items-center mt-3 mb-3 gap-2'>
                                <div className='d-flex '>
                                <i className="fa-solid text-secondary fa-star"></i> 
                                <i className="fa-solid text-secondary fa-star"></i> 
                                <i className="fa-solid text-secondary fa-star"></i> 
                                <i className="fa-solid text-secondary fa-star"></i> 
                                <i className="fa-solid text-secondary fa-star"></i> 
                                </div> 
                            </div>
                            <p className="fs-18 fs-sm-14">
                            Flexible Classes refers to the process of acquiring knowledge or skills through the use of digital technologies and the internet
                            </p>
                            <p className="text-dark fs-18 fs-sm-16">Manish Chauhan</p>
                            </div>
                            <svg viewBox="0 0 416 249" xmlns="http://www.w3.org/2000/svg" className='position-absolute bottom-0 overflow-hidden rounded-bottom-4'>
                                    <g filter="url(#filter0_d_324_36064)">
                                        <path d="M296.443 526.351C291.626 517.219 286.22 508.4 280.351 499.907C274.064 490.803 267.257 482.07 260.072 473.662C252.166 464.412 243.802 455.551 235.132 447.015C225.525 437.563 215.537 428.493 205.305 419.728C193.907 409.977 182.21 400.591 170.293 391.477C157.025 381.325 143.506 371.508 129.809 361.934C114.574 351.278 99.1373 340.919 83.5681 330.773C66.2815 319.506 48.8344 308.493 31.2774 297.659C11.8453 285.67 -7.71089 273.899 -27.3627 262.269C-49.0253 249.452 -70.8004 236.801 -92.632 224.268C-112.751 212.719 -132.553 200.599 -151.773 187.605C-167.672 176.859 -183.186 165.529 -198.079 153.411C-210.223 143.528 -221.954 133.126 -233.015 122.043C-242.024 113.01 -250.588 103.518 -258.425 93.4561C-264.651 85.4701 -270.424 77.1028 -275.483 68.3262C-279.503 61.3457 -283.079 54.0865 -285.969 46.5676C-288.192 40.7857 -290.021 34.8356 -291.27 28.7606C-292.209 24.2029 -292.822 19.5763 -292.986 14.9289C-293.101 11.7908 -293.016 8.64358 -292.628 5.53246C-292.424 3.91736 -292.165 2.29171 -291.728 0.72597C-291.679 0.529505 -291.617 0.330416 -291.559 0.139576C-291.56 1.6512 -291.422 3.17245 -291.258 4.67452C-290.799 8.90587 -289.976 13.0825 -288.939 17.2111C-287.309 23.703 -285.103 30.0422 -282.479 36.194C-278.927 44.5375 -274.604 52.5471 -269.706 60.1738C-263.507 69.8349 -256.393 78.8972 -248.649 87.3719C-238.942 97.9926 -228.245 107.691 -216.918 116.571C-203.009 127.487 -188.159 137.18 -172.79 145.896C-153.752 156.686 -133.883 165.972 -113.594 174.141C-88.9088 184.08 -63.5671 192.361 -37.9282 199.441C-11.3405 206.779 15.589 212.887 42.7613 217.66C67.4471 221.999 92.326 225.272 117.29 227.514C141.053 229.653 164.9 230.869 188.764 231.226C211.313 231.559 233.873 231.113 256.392 229.925C277.174 228.838 297.929 227.116 318.614 224.801C337.536 222.679 356.4 220.056 375.184 216.945C391.68 214.211 408.11 211.094 424.452 207.59C438.374 204.605 452.242 201.341 466.025 197.777C476.913 194.966 487.745 191.97 498.512 188.749C506.072 186.491 513.591 184.133 521.068 181.624C524.972 180.313 528.87 178.974 532.737 177.541C533.207 177.365 533.677 177.189 534.148 177.014L296.443 526.351Z" fill='#4F5DE4'></path>
                                    </g>
                                </svg>
                        </div>
                    </div> 
                    <div className='testimonial-slider-wrap px-2'>
                        <div className="rounded-4 border position-relative mb-5 overflow-hidde"> 
                            <div className="position-absolute top-0 start-50 translate-middle"  >
                                <img src="/assets/img/testimonial-1-author-1.png" alt="testimonial" style={{width:'80px'}} />
                            </div>
                            <div className="p-3 mb-lg-3">
                            <div className='d-flex align-items-center mt-3 mb-3 gap-2'>
                                <div className='d-flex '>
                                <i className="fa-solid text-secondary fa-star"></i> 
                                <i className="fa-solid text-secondary fa-star"></i> 
                                <i className="fa-solid text-secondary fa-star"></i> 
                                <i className="fa-solid text-secondary fa-star"></i> 
                                <i className="fa-solid text-secondary fa-star"></i> 
                                </div> 
                            </div>
                            <p className="fs-18 fs-sm-14">
                            Flexible Classes refers to the process of acquiring knowledge or skills through the use of digital technologies and the internet
                            </p>
                            <p className="text-dark fs-18 fs-sm-16">Manish Chauhan</p>
                            </div>
                            <svg viewBox="0 0 416 249" xmlns="http://www.w3.org/2000/svg" className='position-absolute bottom-0 overflow-hidden rounded-bottom-4'>
                                    <g filter="url(#filter0_d_324_36064)">
                                        <path d="M296.443 526.351C291.626 517.219 286.22 508.4 280.351 499.907C274.064 490.803 267.257 482.07 260.072 473.662C252.166 464.412 243.802 455.551 235.132 447.015C225.525 437.563 215.537 428.493 205.305 419.728C193.907 409.977 182.21 400.591 170.293 391.477C157.025 381.325 143.506 371.508 129.809 361.934C114.574 351.278 99.1373 340.919 83.5681 330.773C66.2815 319.506 48.8344 308.493 31.2774 297.659C11.8453 285.67 -7.71089 273.899 -27.3627 262.269C-49.0253 249.452 -70.8004 236.801 -92.632 224.268C-112.751 212.719 -132.553 200.599 -151.773 187.605C-167.672 176.859 -183.186 165.529 -198.079 153.411C-210.223 143.528 -221.954 133.126 -233.015 122.043C-242.024 113.01 -250.588 103.518 -258.425 93.4561C-264.651 85.4701 -270.424 77.1028 -275.483 68.3262C-279.503 61.3457 -283.079 54.0865 -285.969 46.5676C-288.192 40.7857 -290.021 34.8356 -291.27 28.7606C-292.209 24.2029 -292.822 19.5763 -292.986 14.9289C-293.101 11.7908 -293.016 8.64358 -292.628 5.53246C-292.424 3.91736 -292.165 2.29171 -291.728 0.72597C-291.679 0.529505 -291.617 0.330416 -291.559 0.139576C-291.56 1.6512 -291.422 3.17245 -291.258 4.67452C-290.799 8.90587 -289.976 13.0825 -288.939 17.2111C-287.309 23.703 -285.103 30.0422 -282.479 36.194C-278.927 44.5375 -274.604 52.5471 -269.706 60.1738C-263.507 69.8349 -256.393 78.8972 -248.649 87.3719C-238.942 97.9926 -228.245 107.691 -216.918 116.571C-203.009 127.487 -188.159 137.18 -172.79 145.896C-153.752 156.686 -133.883 165.972 -113.594 174.141C-88.9088 184.08 -63.5671 192.361 -37.9282 199.441C-11.3405 206.779 15.589 212.887 42.7613 217.66C67.4471 221.999 92.326 225.272 117.29 227.514C141.053 229.653 164.9 230.869 188.764 231.226C211.313 231.559 233.873 231.113 256.392 229.925C277.174 228.838 297.929 227.116 318.614 224.801C337.536 222.679 356.4 220.056 375.184 216.945C391.68 214.211 408.11 211.094 424.452 207.59C438.374 204.605 452.242 201.341 466.025 197.777C476.913 194.966 487.745 191.97 498.512 188.749C506.072 186.491 513.591 184.133 521.068 181.624C524.972 180.313 528.87 178.974 532.737 177.541C533.207 177.365 533.677 177.189 534.148 177.014L296.443 526.351Z" fill='#4F5DE4'></path>
                                    </g>
                                </svg>
                        </div>
                    </div> 
                    <div className='testimonial-slider-wrap px-2'>
                        <div className="rounded-4 border position-relative mb-5 overflow-hidde"> 
                            <div className="position-absolute top-0 start-50 translate-middle"  >
                                <img src="/assets/img/testimonial-1-author-1.png" alt="testimonial" style={{width:'80px'}} />
                            </div>
                            <div className="p-3 mb-lg-3">
                            <div className='d-flex align-items-center mt-3 mb-3 gap-2'>
                                <div className='d-flex '>
                                <i className="fa-solid text-secondary fa-star"></i> 
                                <i className="fa-solid text-secondary fa-star"></i> 
                                <i className="fa-solid text-secondary fa-star"></i> 
                                <i className="fa-solid text-secondary fa-star"></i> 
                                <i className="fa-solid text-secondary fa-star"></i> 
                                </div> 
                            </div>
                            <p className="fs-18 fs-sm-14">
                            Flexible Classes refers to the process of acquiring knowledge or skills through the use of digital technologies and the internet
                            </p>
                            <p className="text-dark fs-18 fs-sm-16">Manish Chauhan</p>
                            </div>
                            <svg viewBox="0 0 416 249" xmlns="http://www.w3.org/2000/svg" className='position-absolute bottom-0 overflow-hidden rounded-bottom-4'>
                                    <g filter="url(#filter0_d_324_36064)">
                                        <path d="M296.443 526.351C291.626 517.219 286.22 508.4 280.351 499.907C274.064 490.803 267.257 482.07 260.072 473.662C252.166 464.412 243.802 455.551 235.132 447.015C225.525 437.563 215.537 428.493 205.305 419.728C193.907 409.977 182.21 400.591 170.293 391.477C157.025 381.325 143.506 371.508 129.809 361.934C114.574 351.278 99.1373 340.919 83.5681 330.773C66.2815 319.506 48.8344 308.493 31.2774 297.659C11.8453 285.67 -7.71089 273.899 -27.3627 262.269C-49.0253 249.452 -70.8004 236.801 -92.632 224.268C-112.751 212.719 -132.553 200.599 -151.773 187.605C-167.672 176.859 -183.186 165.529 -198.079 153.411C-210.223 143.528 -221.954 133.126 -233.015 122.043C-242.024 113.01 -250.588 103.518 -258.425 93.4561C-264.651 85.4701 -270.424 77.1028 -275.483 68.3262C-279.503 61.3457 -283.079 54.0865 -285.969 46.5676C-288.192 40.7857 -290.021 34.8356 -291.27 28.7606C-292.209 24.2029 -292.822 19.5763 -292.986 14.9289C-293.101 11.7908 -293.016 8.64358 -292.628 5.53246C-292.424 3.91736 -292.165 2.29171 -291.728 0.72597C-291.679 0.529505 -291.617 0.330416 -291.559 0.139576C-291.56 1.6512 -291.422 3.17245 -291.258 4.67452C-290.799 8.90587 -289.976 13.0825 -288.939 17.2111C-287.309 23.703 -285.103 30.0422 -282.479 36.194C-278.927 44.5375 -274.604 52.5471 -269.706 60.1738C-263.507 69.8349 -256.393 78.8972 -248.649 87.3719C-238.942 97.9926 -228.245 107.691 -216.918 116.571C-203.009 127.487 -188.159 137.18 -172.79 145.896C-153.752 156.686 -133.883 165.972 -113.594 174.141C-88.9088 184.08 -63.5671 192.361 -37.9282 199.441C-11.3405 206.779 15.589 212.887 42.7613 217.66C67.4471 221.999 92.326 225.272 117.29 227.514C141.053 229.653 164.9 230.869 188.764 231.226C211.313 231.559 233.873 231.113 256.392 229.925C277.174 228.838 297.929 227.116 318.614 224.801C337.536 222.679 356.4 220.056 375.184 216.945C391.68 214.211 408.11 211.094 424.452 207.59C438.374 204.605 452.242 201.341 466.025 197.777C476.913 194.966 487.745 191.97 498.512 188.749C506.072 186.491 513.591 184.133 521.068 181.624C524.972 180.313 528.87 178.974 532.737 177.541C533.207 177.365 533.677 177.189 534.148 177.014L296.443 526.351Z" fill='#4F5DE4'></path>
                                    </g>
                                </svg>
                        </div>
                    </div> 
                     
                       
                </Slider>
          </div>


        </div>
    </section>
  )
}

export default Testimonial