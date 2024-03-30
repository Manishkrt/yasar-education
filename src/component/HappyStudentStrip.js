import React from 'react'

const HappyStudentStrip = () => {
  return (
    <>
{/* <section className='Happy-student-Strip-wrapper mt-0 p-4'>
<div className='container'>
    <div className='row'>
        <div className='col-lg-3 text-center'>
            <div className='wrapper-happy-card'>
           
            <h2 className='text-white'><i className="fa-regular fa-face-smile"></i>&nbsp;20,000 <i className="fa-solid fa-plus"></i></h2>
            <p className='text-white mb-0'>Happy Students</p>
           
            </div>
        </div>
        <div className='col-lg-3 text-center'>
            <div className='wrapper-happy-card'>
           
            <h2 className='text-white'><i className="fa-solid fa-trophy"></i>&nbsp;25 <i className="fa-solid fa-plus"></i></h2>
            <p className='text-white mb-0'>BEST AWARDS WON</p>
           
            </div>
        </div>
        <div className='col-lg-3 text-center'>
            <div className='wrapper-happy-card'>
           
            <h2 className='text-white'><i className="fa-solid fa-circle-check"></i>&nbsp;500 <i className="fa-solid fa-plus"></i></h2>
            <p className='text-white mb-0'>CLASSES COMPLETED</p>
           
            </div>
        </div>
        <div className='col-lg-3 text-center'>
            <div className='wrapper-happy-card'>
           
            <h2 className='text-white'><i className="fa-solid fa-book"></i>&nbsp;20 <i className="fa-solid fa-plus"></i></h2>
            <p className='text-white mb-0'>TOTAL COURSES</p>
           
            </div>
        </div>
    </div>
</div>
</section> */}

<section
  className="fact-one pt-pb"
  style={{ backgroundImage: "url(/assets/img/fact-bg-1.png)" }}
>
  <div className="container">
    <div className="row">
      <div
        className="col-lg-3 col-md-6 "
        
      >
        <div className="fact-one__item text-center">
          <svg
            viewBox="0 0 303 181"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="1.5"
              y="2.00049"
              width={300}
              height={177}
              rx={7}
              stroke="#4F5DE4"
              strokeWidth={3}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="20 20"
            />
          </svg>
          <div className="fact-one__count">
            <span className="count-box counted">
              <span className="count-text" data-stop="30.3" data-speed={1500}>
             20,000
              </span>
            </span>
            +
          </div>
          {/* /.fact-one__count */}
          <h3 className="fact-one__title">Happy Students</h3>
          {/* /.fact-one__title */}
        </div>
        {/* /.fact-item */}
      </div>
      <div
        className="col-lg-3 col-md-6"
       
      >
        <div className="fact-one__item text-center">
          <svg
            viewBox="0 0 303 181"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="1.5"
              y="2.00049"
              width={300}
              height={177}
              rx={7}
              stroke="#4F5DE4"
              strokeWidth={3}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="20 20"
            />
          </svg>
          <div className="fact-one__count">
            {/* <span style={{fontSize:'40px'}} ><i className="fa-solid fa-trophy"></i></span>&nbsp; */}
            <span className="count-box counted">
              <span className="count-text" data-stop="40.5" data-speed={1500}>
                25
              </span>
            </span>
            +
          </div>
          {/* /.fact-one__count */}
          <h3 className="fact-one__title">Best Awards Won</h3>
          {/* /.fact-one__title */}
        </div>
        {/* /.fact-item */}
      </div>
      <div
        className="col-lg-3 col-md-6 wow fadeInUp animated"
        data-wow-delay="300ms"
        style={{
          visibility: "visible",
          animationDelay: "300ms",
          animationName: "fadeInUp"
        }}
      >
        <div className="fact-one__item text-center">
          <svg
            viewBox="0 0 303 181"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="1.5"
              y="2.00049"
              width={300}
              height={177}
              rx={7}
              stroke="#4F5DE4"
              strokeWidth={3}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="20 20"
            />
          </svg>
          <div className="fact-one__count">
            <span className="count-box counted">
              <span className="count-text" data-stop="88.9" data-speed={1500}>
                1500+
              </span>
            </span>
            
          </div>
          {/* /.fact-one__count */}
          <h3 className="fact-one__title">Batches Completed</h3>
          {/* /.fact-one__title */}
        </div>
        {/* /.fact-item */}
      </div>
      <div
        className="col-lg-3 col-md-6"
       
      >
        <div className="fact-one__item text-center">
          <svg
            viewBox="0 0 303 181"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="1.5"
              y="2.00049"
              width={300}
              height={177}
              rx={7}
              stroke="#4F5DE4"
              strokeWidth={3}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="20 20"
            />
          </svg>
          <div className="fact-one__count">
            <span className="count-box counted">
              <span className="count-text" data-stop="6.30" data-speed={1500}>
              25
              </span>
            </span>
            +
          </div>
          {/* /.fact-one__count */}
          <h3 className="fact-one__title">Courses</h3>
          {/* /.fact-one__title */}
        </div>
        {/* /.fact-item */}
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default HappyStudentStrip;
