import React from 'react'

const QuiryForm = () => {
  return (
   <>
   
   <section className='Query-form-wrapper pt-pb'>
  <div className='container'>
    <div className='row'>
      <div className='col-lg-6 Query-form-wrapper'>
<img src="/assets/img/slide-girl.png"/>
      </div>
      <div className='col-lg-6'>
      
      <h5 className="section-title__tagline">
      Enquiry Form 
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
</h5><br></br>

      {/* EnquiryForm-underline */}
      <form>

  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">
      Email 
    </label>
    <input
      type="email"
      className="form-control"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
    />

  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">
      Password
    </label>
    <input
      type="password"
      className="form-control"
      id="exampleInputPassword1"
    />
  </div>
  <div className="mb-3">
    <label htmlFor="  Contact Number" className="form-label">
      Contact Number
    </label>
    <input
      type="password"
      className="form-control"
      id="Contact Number"
    />
  </div>
  <div className="mb-3">
    <label htmlFor="  Contact Number" className="form-label">
      Courses
    </label>
    <select className="form-select" aria-label="Default select example">
  <option >Open this select menu</option>
  <option value={1}>One</option>
  <option value={2}>Two</option>
  <option value={3}>Three</option>
</select>

  </div>
 
  <button type="submit" className="btn Secondary-orange  text-white">
    Submit <i className="fa-solid fa-arrow-right-to-bracket"></i>
  </button>
</form>

      </div>
    </div>
  </div>

</section>
   </>
  )
}

export default QuiryForm;
