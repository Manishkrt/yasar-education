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
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container > 
        <Link href='/'>
        <img src="https://bracketweb.com/eduact-html/assets/images/logo-two.png" alt="" />
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className='d-lg-flex justify-content-end px-4 gap-4'>
          <Nav
            className="my-2 my-lg-0 d-flex gap-lg-4"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#">Home</Nav.Link> 
            <NavDropdown title="Course" id="navbarScrollingDropdown" >
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#">Gallery</Nav.Link> 
            <Nav.Link href="#">Blogs</Nav.Link> 
            <Nav.Link href="#">contact</Nav.Link>  
          </Nav>
          <div className='d-flex align-items-center gap-3'>
          <button className='border-0 bg-transparent'><i className="fa-solid fa-magnifying-glass fa-xl text-muted"></i></button>
          <div className="bg-primary rounded-start-pill d-flex align-items-center gap-2 px-4 py-3">

          <a href="tel:+0123456789" className='rounded-pill p-1 bg-white d-flex align-items-center justify-content-center' style={{width: "40px", height: "40px"}}>
          <i className="fa-solid fa-phone-volume fa-xl"></i>
          </a>
          <div>
            <p className='mb-0 text-white fs-20'>0123456789</p>
            <small className='text-white'>call to questions</small>
          </div>
          </div>
        </div>
          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> */}
        </Navbar.Collapse>
        
      </Container>
    </Navbar>

    
    </>
  )
}

export default Navigation