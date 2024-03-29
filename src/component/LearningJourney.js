
"use client";
import React from "react";
import Slider from "react-slick";

const LearningJourney = () => {
  var settings = {
    dots: false,
    infinite: true,
    autoplay:true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <>
    

<section className="Learining-wrapper position-relative">
 
      
        
         
   
        
         <Slider {...settings}>
                <div>
              
          <div className="position-relative">
          <video width="100%" height="100%" muted   autoplay="true" preload="none">
      <source src="https://video.wixstatic.com/video/2ec19b_a813e27647554a9dbd792f1445c1c92e/720p/mp4/file.mp4" type="video/mp4" />
      <track
        src="https://video.wixstatic.com/video/2ec19b_a813e27647554a9dbd792f1445c1c92e/720p/mp4/file.mp4"
        kind="subtitles"
        srcLang="en"
        label="English"
      />
      Your browser does not support the video tag.
    </video>
    <div className="position-absolute banner-TextWrapper">
    <p className="text-danger  fw-600">Learn English in Canada</p>
              <h2 style={{color:'#0070b6'}} className="Banner-heading lh-1">Think
Abroad,<br></br>
Think Oracle Language</h2>
<button class="btn-hover DiscoverMore-Abouts color-2">Enquire Now </button>
    </div>
          </div>
                </div>
                <div>
              
          <div className="position-relative">
            <img className="img-fluid w-100" src ="/assets/img/Homebanners1.jpg"/>
          </div>
                </div>
     
                
              </Slider>
    
    </section>
     
    </>
  );
};

export default LearningJourney;
