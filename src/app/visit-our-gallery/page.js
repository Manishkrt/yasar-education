
import CompanyLogoSlider from '@/component/CompanyLogoSlider';
import CoomonStudentSlider from '@/component/CoomonStudentSlider';
import Footer from '@/component/Footer';
import Navigation from '@/component/Navigation';
import QuiryForm from '@/component/QuiryForm';
import React from 'react'

const page = () => {
  return (
   <>
     <Navigation/>
   <CoomonStudentSlider/>
   <>
  <section className="gallery-page pt-pb">
   {/* <h5 class="section-title__tagline text-center">Gallery<svg class="arrow-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 55 13"><g clip-path="url(#clip0_324_36194)"><path d="M10.5406 6.49995L0.700562 12.1799V8.56995L4.29056 6.49995L0.700562 4.42995V0.819946L10.5406 6.49995Z"></path><path d="M25.1706 6.49995L15.3306 12.1799V8.56995L18.9206 6.49995L15.3306 4.42995V0.819946L25.1706 6.49995Z"></path><path d="M39.7906 6.49995L29.9506 12.1799V8.56995L33.5406 6.49995L29.9506 4.42995V0.819946L39.7906 6.49995Z"></path><path d="M54.4206 6.49995L44.5806 12.1799V8.56995L48.1706 6.49995L44.5806 4.42995V0.819946L54.4206 6.49995Z"></path></g></svg></h5> */}

    <div className="container">
      <div className="row">
        {/* gallery-item-start */}
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
        {/* gallery-item-end */}
        {/* gallery-item-start */}
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
        {/* gallery-item-end */}
        {/* gallery-item-start */}
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
        {/* gallery-item-end */}
        {/* gallery-item-start */}
        <div className="col-lg-4 col-md-6">
          <div className="gallery-page__single">
            <img src="assets/img/gallery-4.jpg" alt="eduact" />
            <div className="gallery-page__icon">
              <a
                className="img-popup"
               
              />
            </div>
          </div>
        </div>
        {/* gallery-item-end */}
        {/* gallery-item-start */}
        <div className="col-lg-4 col-md-6">
          <div className="gallery-page__single">
            <img src="assets/img/gallery-5.jpg" alt="eduact" />
            <div className="gallery-page__icon">
              <a
                className="img-popup"
               
              />
            </div>
          </div>
        </div>
        {/* gallery-item-end */}
        {/* gallery-item-start */}
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
        {/* gallery-item-end */}
      </div>
    </div>
  </section>
  <section className="gallery-page">
    <div className="container">
      <div className="row">
        {/* gallery-item-start */}
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
        {/* gallery-item-end */}
        {/* gallery-item-start */}
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
        {/* gallery-item-end */}
        {/* gallery-item-start */}
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
        {/* gallery-item-end */}
        {/* gallery-item-start */}
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
        {/* gallery-item-end */}
        {/* gallery-item-start */}
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
        {/* gallery-item-end */}
        {/* gallery-item-start */}
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
        {/* gallery-item-end */}
      </div>
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
