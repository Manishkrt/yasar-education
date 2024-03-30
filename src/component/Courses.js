import { CourseData } from '@/utils/data'
import Link from 'next/link'
import React from 'react'


const Courses = () => {

    const CourseList = CourseData

  return (
    <section className='bg-soft1 py-100 pt-pb'>
        <div className="container">
            <div className="d-flex justify-content-between gap-1 align-items-end flex-wrap mb-lg-5 mb-3">
            <div className='mb-0'>
            <h5 className='text-primary mb-0'> Best Course &nbsp; 
            <svg className="arrow-svg  subtitle-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 55 13">
                            <g clipPath="url(#clip0_324_36194)">
                                <path d="M10.5406 6.49995L0.700562 12.1799V8.56995L4.29056 6.49995L0.700562 4.42995V0.819946L10.5406 6.49995Z"></path>
                                <path d="M25.1706 6.49995L15.3306 12.1799V8.56995L18.9206 6.49995L15.3306 4.42995V0.819946L25.1706 6.49995Z"></path>
                                <path d="M39.7906 6.49995L29.9506 12.1799V8.56995L33.5406 6.49995L29.9506 4.42995V0.819946L39.7906 6.49995Z"></path>
                                <path d="M54.4206 6.49995L44.5806 12.1799V8.56995L48.1706 6.49995L44.5806 4.42995V0.819946L54.4206 6.49995Z"></path>
                            </g>
                        </svg>
            </h5>
            <h2 className='text-dark'>Featured Course </h2>
            </div>
            <div className="mb-0 "> 
                <button className='rounded-end-pill border-0 text-white view-all-btn d-flex align-items-center gap-2'>View All
                <img src="/assets/img/viewAll.gif" alt="view" width={28} />
                 </button> 
            </div>
            </div>

            <div className="row">

                
                {CourseList.map((courseVallue)=>(
                     <div className="col-lg-4 col-md-6 col-12 mt-3" key={courseVallue.id}>
                     <div className="courses-card-wrapper">
                     <div className="courses-card-box border border-light-subtle bg-white position-relative rounded py-4 px-3">
                         <span className="courses-img-wrap d-inline-block rounded-circle  bg-secondary position-absolute top-0 end-0">
                             {/* <img src="/assets/img/flag1.png" alt="courses" className='img-fluid w-100 rounded-circle' /> */}
                             <img src={courseVallue.flagImage} alt="courses" className='img-fluid w-100 rounded-circle' />
                         </span> 
                         <div className='mb-3'>
                             <span className="bg-primary px-2 py-1 text-white rounded">20 Hours</span>
                         </div>
                         <div className='d-flex align-items-center mb-2 gap-2'>
                             <div className='d-flex '>
                             <i className="fa-solid text-secondary fa-star"></i> 
                             <i className="fa-solid text-secondary fa-star"></i> 
                             <i className="fa-solid text-secondary fa-star"></i> 
                             <i className="fa-solid text-secondary fa-star"></i> 
                             <i className="fa-solid text-secondary fa-star"></i> 
                             </div> 
                         </div>
                         <h3 className='courses-courseName mb-3'>
                             <Link className='text-primar' href={`/${courseVallue.slug}`}>{courseVallue.title}</Link>
                         </h3>
                         <p className='mb-0'><i className="fa-solid fa-users"></i>&nbsp;Batch Size - {courseVallue.batchSize} Students</p>
                         <p><i className="fa-regular fa-clock"></i>&nbsp;Timing- 9.30 AM - 9.30 PM</p>
                         <div className="d-flex justify-content-between gap-2 flex-wrap bg-soft1 p-2 rounded">
                             <div>
                                 <p className="fw-bold text-dark mb-0">Teacher</p>
                                 <p className="text-muted mb-0 fs-14">Manish Chauhan</p>
                             </div>
                             <div>
                                 <h5 className="text-primary text-end">$ 234.90</h5>
                                 <p className='text-secondary mb-0 text-end'>17 Lessons</p>
                             </div>
                         </div>
                     </div>
 
                     </div>
                 </div> 
                ))} 


                <div className="col-lg-4 col-md-6 col-12 mt-3">
                    <div className="courses-card-wrapper">
                    <div className="courses-card-box border border-light-subtle bg-white position-relative rounded py-4 px-3">
                        <span className="courses-img-wrap d-inline-block rounded-circle  bg-secondary position-absolute top-0 end-0">
                            <img src="/assets/img/flag1.png" alt="courses" className='img-fluid w-100 rounded-circle' />
                        </span> 
                        <div className='mb-3'>
                            <span className="bg-primary px-2 py-1 text-white rounded">20 Hours</span>
                        </div>
                        <div className='d-flex align-items-center mb-2 gap-2'>
                            <div className='d-flex '>
                            <i className="fa-solid text-secondary fa-star"></i> 
                            <i className="fa-solid text-secondary fa-star"></i> 
                            <i className="fa-solid text-secondary fa-star"></i> 
                            <i className="fa-solid text-secondary fa-star"></i> 
                            <i className="fa-solid text-secondary fa-star"></i> 
                            </div> 
                        </div>
                        <h3 className='courses-courseName mb-3'>
                            <Link className='text-primar' href='#'>ENGLISH SPEAKING COURSE</Link>
                        </h3>
                        <p className='mb-0'><i className="fa-solid fa-users"></i>&nbsp;Batch Size - 06 - 07 Students</p>
                        <p><i className="fa-regular fa-clock"></i>&nbsp;Timing- 9.30 AM - 9.30 PM</p>
                        <div className="d-flex justify-content-between gap-2 flex-wrap bg-soft1 p-2 rounded">
                            <div>
                                <p className="fw-bold text-dark mb-0">Teacher</p>
                                <p className="text-muted mb-0 fs-14">Manish Chauhan</p>
                            </div>
                            <div>
                                <h5 className="text-primary text-end">$ 234.90</h5>
                                <p className='text-secondary mb-0 text-end'>17 Lessons</p>
                            </div>
                        </div>
                    </div>

                    </div>
                </div> 
                <div className="col-lg-4 col-md-6 col-12 mt-3">
                    <div className="courses-card-wrapper">
                    <div className="courses-card-box border border-light-subtle bg-white position-relative rounded py-4 px-3">
                        <span className="courses-img-wrap d-inline-block rounded-circle  bg-secondary position-absolute top-0 end-0">
                            <img src="/assets/img/flag2.png" alt="courses" className='img-fluid w-100 rounded-circle' />
                        </span> 
                        <div className='mb-3'>
                            <span className="bg-primary px-2 py-1 text-white rounded">20 Hours</span>
                        </div>
                        <div className='d-flex align-items-center mb-2 gap-2'>
                            <div className='d-flex '>
                            <i className="fa-solid text-secondary fa-star"></i> 
                            <i className="fa-solid text-secondary fa-star"></i> 
                            <i className="fa-solid text-secondary fa-star"></i> 
                            <i className="fa-solid text-secondary fa-star"></i> 
                            <i className="fa-solid text-secondary fa-star"></i> 
                            </div> 
                        </div>
                        <h3 className='courses-courseName mb-3'>
                            <Link className='text-primar' href='#'>SPANISH LANGUAGE COURSE</Link>
                        </h3>
                        <p className='mb-0'><i className="fa-solid fa-users"></i>&nbsp;Batch Size - 06 - 07 Students</p>
                        <p><i className="fa-regular fa-clock"></i>&nbsp;Timing- 9.30 AM - 9.30 PM</p>
                        <div className="d-flex justify-content-between gap-2 flex-wrap bg-soft1 p-2 rounded">
                            <div>
                                <p className="fw-bold text-dark mb-0">Teacher</p>
                                <p className="text-muted mb-0 fs-14">Manish Chauhan</p>
                            </div>
                            <div>
                                <h5 className="text-primary text-end">$ 234.90</h5>
                                <p className='text-secondary mb-0 text-end'>17 Lessons</p>
                            </div>
                        </div>
                    </div>

                    </div>
                </div> 
                <div className="col-lg-4 col-md-6 col-12 mt-3">
                    <div className="courses-card-wrapper">
                    <div className="courses-card-box border border-light-subtle bg-white position-relative rounded py-4 px-3">
                        <span className="courses-img-wrap d-inline-block rounded-circle  bg-secondary position-absolute top-0 end-0">
                            <img src="/assets/img/flag3.png" alt="courses" className='img-fluid w-100 rounded-circle' />
                        </span> 
                        <div className='mb-3'>
                            <span className="bg-primary px-2 py-1 text-white rounded">20 Hours</span>
                        </div>
                        <div className='d-flex align-items-center mb-2 gap-2'>
                            <div className='d-flex '>
                            <i className="fa-solid text-secondary fa-star"></i> 
                            <i className="fa-solid text-secondary fa-star"></i> 
                            <i className="fa-solid text-secondary fa-star"></i> 
                            <i className="fa-solid text-secondary fa-star"></i> 
                            <i className="fa-solid text-secondary fa-star"></i> 
                            </div> 
                        </div>
                        <h3 className='courses-courseName mb-3'>
                            <Link className='text-primar' href='#'>FRENCH LANGUAGE COURSE</Link>
                        </h3>
                        <p className='mb-0'><i className="fa-solid fa-users"></i>&nbsp;Batch Size - 06 - 07 Students</p>
                        <p><i className="fa-regular fa-clock"></i>&nbsp;Timing- 9.30 AM - 9.30 PM</p>
                        <div className="d-flex justify-content-between gap-2 flex-wrap bg-soft1 p-2 rounded">
                            <div>
                                <p className="fw-bold text-dark mb-0">Teacher</p>
                                <p className="text-muted mb-0 fs-14">Manish Chauhan</p>
                            </div>
                            <div>
                                <h5 className="text-primary text-end">$ 234.90</h5>
                                <p className='text-secondary mb-0 text-end'>17 Lessons</p>
                            </div>
                        </div>
                    </div>

                    </div>
                </div> 
                <div className="col-lg-4 col-md-6 col-12 mt-3">
                    <div className="courses-card-wrapper">
                    <div className="courses-card-box border border-light-subtle bg-white position-relative rounded py-4 px-3">
                        <span className="courses-img-wrap d-inline-block rounded-circle  bg-secondary position-absolute top-0 end-0">
                            <img src="/assets/img/flag4.png" alt="courses" className='img-fluid w-100 rounded-circle' />
                        </span> 
                        <div className='mb-3'>
                            <span className="bg-primary px-2 py-1 text-white rounded">20 Hours</span>
                        </div>
                        <div className='d-flex align-items-center mb-2 gap-2'>
                            <div className='d-flex '>
                            <i className="fa-solid text-secondary fa-star"></i> 
                            <i className="fa-solid text-secondary fa-star"></i> 
                            <i className="fa-solid text-secondary fa-star"></i> 
                            <i className="fa-solid text-secondary fa-star"></i> 
                            <i className="fa-solid text-secondary fa-star"></i> 
                            </div> 
                        </div>
                        <h3 className='courses-courseName mb-3'>
                            <Link className='text-primar' href='#'>GERMAN LANGUAGE COURSE</Link>
                        </h3>
                        <p className='mb-0'><i className="fa-solid fa-users"></i>&nbsp;Batch Size - 06 - 07 Students</p>
                        <p><i className="fa-regular fa-clock"></i>&nbsp;Timing- 9.30 AM - 9.30 PM</p>
                        <div className="d-flex justify-content-between gap-2 flex-wrap bg-soft1 p-2 rounded">
                            <div>
                                <p className="fw-bold text-dark mb-0">Teacher</p>
                                <p className="text-muted mb-0 fs-14">Manish Chauhan</p>
                            </div>
                            <div>
                                <h5 className="text-primary text-end">$ 234.90</h5>
                                <p className='text-secondary mb-0 text-end'>17 Lessons</p>
                            </div>
                        </div>
                    </div>

                    </div>
                </div> 
                <div className="col-lg-4 col-md-6 col-12 mt-3">
                    <div className="courses-card-wrapper">
                    <div className="courses-card-box border border-light-subtle bg-white position-relative rounded py-4 px-3">
                        <span className="courses-img-wrap d-inline-block rounded-circle  bg-secondary position-absolute top-0 end-0">
                            <img src="/assets/img/flag5.png" alt="courses" className='img-fluid w-100 rounded-circle' />
                        </span> 
                        <div className='mb-3'>
                            <span className="bg-primary px-2 py-1 text-white rounded">20 Hours</span>
                        </div>
                        <div className='d-flex align-items-center mb-2 gap-2'>
                            <div className='d-flex '>
                            <i className="fa-solid text-secondary fa-star"></i> 
                            <i className="fa-solid text-secondary fa-star"></i> 
                            <i className="fa-solid text-secondary fa-star"></i> 
                            <i className="fa-solid text-secondary fa-star"></i> 
                            <i className="fa-solid text-secondary fa-star"></i> 
                            </div> 
                        </div>
                        <h3 className='courses-courseName mb-3'>
                            <Link className='text-primar' href='#'>IELTS COACHING</Link>
                        </h3>
                        <p className='mb-0'><i className="fa-solid fa-users"></i>&nbsp;Batch Size - 06 - 07 Students</p>
                        <p><i className="fa-regular fa-clock"></i>&nbsp;Timing- 9.30 AM - 9.30 PM</p>
                        <div className="d-flex justify-content-between gap-2 flex-wrap bg-soft1 p-2 rounded">
                            <div>
                                <p className="fw-bold text-dark mb-0">Teacher</p>
                                <p className="text-muted mb-0 fs-14">Manish Chauhan</p>
                            </div>
                            <div>
                                <h5 className="text-primary text-end">$ 234.90</h5>
                                <p className='text-secondary mb-0 text-end'>17 Lessons</p>
                            </div>
                        </div>
                    </div>

                    </div>
                </div> 
                <div className="col-lg-4 col-md-6 col-12 mt-3">
                    <div className="courses-card-wrapper">
                    <div className="courses-card-box border border-light-subtle bg-white position-relative rounded py-4 px-3">
                        <span className="courses-img-wrap d-inline-block rounded-circle  bg-secondary position-absolute top-0 end-0">
                            <img src="/assets/img/flag6.png" alt="courses" className='img-fluid w-100 rounded-circle' />
                        </span> 
                        <div className='mb-3'>
                            <span className="bg-primary px-2 py-1 text-white rounded">20 Hours</span>
                        </div>
                        <div className='d-flex align-items-center mb-2 gap-2'>
                            <div className='d-flex '>
                            <i className="fa-solid text-secondary fa-star"></i> 
                            <i className="fa-solid text-secondary fa-star"></i> 
                            <i className="fa-solid text-secondary fa-star"></i> 
                            <i className="fa-solid text-secondary fa-star"></i> 
                            <i className="fa-solid text-secondary fa-star"></i> 
                            </div> 
                        </div>
                        <h3 className='courses-courseName mb-3'>
                            <Link className='text-primar' href='#'>ARABIC LANGUAGE COURSE</Link>
                        </h3>
                        <p className='mb-0'><i className="fa-solid fa-users"></i>&nbsp;Batch Size - 06 - 07 Students</p>
                        <p><i className="fa-regular fa-clock"></i>&nbsp;Timing- 9.30 AM - 9.30 PM</p>
                        <div className="d-flex justify-content-between gap-2 flex-wrap bg-soft1 p-2 rounded">
                            <div>
                                <p className="fw-bold text-dark mb-0">Teacher</p>
                                <p className="text-muted mb-0 fs-14">Manish Chauhan</p>
                            </div>
                            <div>
                                <h5 className="text-primary text-end">$ 234.90</h5>
                                <p className='text-secondary mb-0 text-end'>17 Lessons</p>
                            </div>
                        </div>
                    </div>

                    </div>
                </div> 
           
            </div>
        </div>
    </section>
  )
}

export default Courses