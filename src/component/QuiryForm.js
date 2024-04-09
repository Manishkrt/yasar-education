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
      <h4 className="course-details__curriculum__title text-center EnquiryForm-underline">Enquiry Form</h4><br></br>

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
