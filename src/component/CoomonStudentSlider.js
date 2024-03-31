"use client";
import React from 'react';
import Slider from 'react-slick';


const CoomonStudentSlider = () => {
  const settings = {
    dots: false,
    autoplay: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
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


            <div className='testimonial-slider-wrap px-2 container' style={{ margin: '0 auto' }}>
              <div className='row'>
                <div className='col-lg-8  col-12 m-auto'>

                  <div className="d-lg-flex d-block align-items-center gap-4">
                    <div className='text-center'>
                      <img src="/assets/img/testimonial-1-author-1.png" className='rounded-4 student-feedback-img m-auto' alt="testimonial" />
                    </div>

                    <div className="p-3 mb-lg-3">

                      <p className="fs-18 fs-sm-14 text-white">
                        Flexible Classes refers to the process of acquiring knowledge or skills through the use of digital technologies and the internet
                      </p>
                      <p className="text-dark fs-18 fs-sm-16 text-white">Manish Chauhan</p>
                      <p className="text-dark fs-18 fs-sm-16 text-white Secondary-orange-fotter">Spanish Lanuage course</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
            <div className='testimonial-slider-wrap px-2 container' style={{ margin: '0 auto' }}>
              <div className='row'>
                <div className='col-lg-8  col-12 m-auto'>

                  <div className="d-lg-flex d-block align-items-center gap-4">
                    <div className='text-center'>
                      <img src="/assets/img/testimonial-1-author-1.png" className='rounded-4 student-feedback-img m-auto' alt="testimonial" />
                    </div>

                    <div className="p-3 mb-lg-3">

                      <p className="fs-18 fs-sm-14 text-white">
                        Flexible Classes refers to the process of acquiring knowledge or skills through the use of digital technologies and the internet
                      </p>
                      <p className="text-dark fs-18 fs-sm-16 text-white">Manish Chauhan</p>
                      <p className="text-dark fs-18 fs-sm-16 text-white Secondary-orange-fotter">Spanish Lanuage course</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
            <div className='testimonial-slider-wrap px-2 container' style={{ margin: '0 auto' }}>
              <div className='row'>
                <div className='col-lg-8  col-12 m-auto'>

                  <div className="d-lg-flex d-block align-items-center gap-4">
                    <div className='text-center'>
                      <img src="/assets/img/testimonial-1-author-1.png" className='rounded-4 student-feedback-img m-auto' alt="testimonial" />
                    </div>

                    <div className="p-3 mb-lg-3">

                      <p className="fs-18 fs-sm-14 text-white">
                        Flexible Classes refers to the process of acquiring knowledge or skills through the use of digital technologies and the internet
                      </p>
                      <p className="text-dark fs-18 fs-sm-16 text-white">Manish Chauhan</p>
                      <p className="text-dark fs-18 fs-sm-16 text-white Secondary-orange-fotter">Spanish Lanuage course</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </Slider>




        </div>






      </section>

    </>
  )
}

export default CoomonStudentSlider
