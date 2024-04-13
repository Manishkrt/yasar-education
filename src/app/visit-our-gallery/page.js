"use client"
import CompanyLogoSlider from '@/component/CompanyLogoSlider';
import CoomonStudentSlider from '@/component/CoomonStudentSlider';
import Footer from '@/component/Footer';
import Navigation from '@/component/Navigation';
import QuiryForm from '@/component/QuiryForm';
import React, { useState } from 'react'
import Slider from 'react-slick';
import { Tab, Tabs,Modal  } from 'react-bootstrap';


const page = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalImages, setModalImages] = useState([]);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const openModal = (images, index) => {
    setModalImages(images);
    setActiveImageIndex(index);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const images = [
    'assets/img/NewGallery1.jpg',
    'assets/img/NewGallery2.jpg',
    'assets/img/NewGallery3.jpg',
    'assets/img/NewGallery4.jpg',
    'assets/img/NewGallery5.jpg',
    'assets/img/NewGallery6.jpg',
    'assets/img/gallery-2.jpg',
    'assets/img/gallery-3.jpg',
    // Add more image URLs as needed
  ];
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: activeImageIndex, 
  };
  return (
   <>
     <Navigation/>
   <CoomonStudentSlider/>
   <>
   
  <section className="gallery-page pt-pb">
    <div className='text-center'>
    <h2>GALLERY & VIDEOS
  
  
  
  </h2>
</div>
    <div className='Gallery_tabs-wrapper'>
  <Tabs defaultActiveKey="Gallery" id="Gallery" className='p-3'>
                  {/* <Tab eventKey="Gallery" title="Gallery">
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
   
      </div>
    </div>
  </section>
 
                      </div>

                    </div>
                  </Tab> */}
                   <Tab eventKey="Gallery" title="Gallery">
          <div className="tabs-content mt-4">
            <div className="row">
              {images.map((image, index) => (
                <div className="col-lg-4 col-md-6" key={index}>
                  <div
                    className="gallery-page__single"
                    onClick={() => openModal(images, index)}
                  >
                    <img src={image} alt={`Image ${index}`} />
                    <div className="gallery-page__icon">
                      <a className="img-popup" />
                    </div>
                  </div>
                </div>
              ))}
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
                {/* <Modal show={showModal} onHide={closeModal} centered>
        <Modal.Body>
          <div className='text-center'>
            <img
              src={modalImages[activeImageIndex]}
              alt={`Image ${activeImageIndex}`}
              style={{ maxWidth: '100%', maxHeight: '80vh', objectFit: 'cover' }}
            />
          </div>
        </Modal.Body>
      </Modal> */}
        <Modal show={showModal} onHide={closeModal} centered>
        <Modal.Body className='Gallery-modal-wrapper'>
          <Slider {...settings}>
            {modalImages.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`Image ${index}`} />
              </div>
            ))}
          </Slider>
        </Modal.Body>
      </Modal>
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
