'use client'
import Link from 'next/link';
import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Navigation = () => {
  return (
    <>

  <div className='Header-strip-wrapper'>
    <div className='container'>
    <ul className='d-flex justify-content-between align-items-center mt-2 mb-2'>
      <li><i className="fa-solid fa-location-dot"></i> Conanaught Place Delhi -110001 <i className="fa-solid fa-phone"></i> 9953988288</li>
      <li><i className="fa-solid fa-envelope"></i> Inquriy@oracleglobaleducation.com</li>
      <li><i className="fa-solid fa-location-dot"></i> GTB NAGAR 110009 <i className="fa-solid fa-phone"></i> 9999745645</li>
    </ul>
    </div>
  </div>
    <Navbar expand="lg" className="Navbar-wrapper-home bg-body-tertiary bg-white" >
      <div className='container-fluid container-postition-Header'> 
        <Link href='/'>
        <img className="CommonSiteLogo" src="/assets/img/OracleLeft.png" alt="" width="181px" />
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className='Header-small-scrren d-lg-flex justify-content-end px-4 gap-4 rounded-start-pill'>
          <Nav
            className="my-2 my-lg-0 d-flex gap-xl-5 gap-lg-4"
            style={{ maxHeight: '400px' }}
            navbarScroll
          >
            <Nav.Link href="/" className='fw-bold'>Home</Nav.Link> 
            <Nav.Link href="/best-international-laungage-courses" className='fw-bold'>Course</Nav.Link> 
            {/* <NavDropdown title="Course" className='fw-bold' id="navbarScrollingDropdown" >
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown> */}
            <Nav.Link href="/visit-our-gallery" className='fw-bold'>Gallery</Nav.Link> 
            <Nav.Link href="#" className='fw-bold'>Blogs</Nav.Link> 
            <Nav.Link href="/visit-our-kids-section" className='fw-bold'>Kids Section</Nav.Link> 
            <Nav.Link href="/contact-us-for-more-information" className='fw-bold'>Contact</Nav.Link>  
          </Nav>
          <div className='d-flex align-items-center gap-3'>
          {/* <button className='border-0 bg-transparent'><i className="fa-solid fa-magnifying-glass fa-xl text-muted"></i></button> */}
          {/* <div className="Header-rounder-Telephone  bg-primary rounded-start-pill d-flex align-items-center gap-2 ps-4 pe-5 py-3">

          <a href="tel:+0123456789" className='rounded-pill p-1 bg-white d-flex align-items-center justify-content-center' style={{width: "40px", height: "40px"}}>
          <i className="fa-solid fa-phone-volume fa-xl"></i>
          </a>
          <div>
            <p className='mb-0 text-white fs-20'>0123456789</p>
            <small className='text-white'>call to questions</small>
          </div>
          </div> */}
          {/* <button className='btn EnrollNow-headerBtn'>Enroll Now</button> */}
    <button className="btn-hover color-2">Enroll Now</button>
          
        </div>
        
        </Navbar.Collapse>
        
      </div>
    </Navbar>

    <div className="wrapper-whats-appicon">
    <i className="fa-brands fa-whatsapp"></i>
    </div>
    <div className="wrapper-zoom-meeting">
    <i className="fa-solid fa-bounce fa-video"></i>
    </div>
    </>
  )
}

export default Navigation