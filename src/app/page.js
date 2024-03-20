import Image from "next/image";
import styles from "./page.module.css";
import Navigation from "@/component/Navigation";
import Link from "next/link";
import LearningJourney from "@/component/LearningJourney"; 
import Courses from "@/component/Courses";
import CourseReview from "@/component/CourseReview";
import AboutUs from "@/component/AboutUs";
import Footer from "@/component/Footer";
import Newsletter from "@/component/Newsletter";
import Blog from "@/component/Blog";
import Cta from "@/component/Cta";
import Testimonial from "@/component/Testimonial";
import BlogVideoNotice from "@/component/BlogVideoNotice";
import OurService from "@/component/OurService";
import HappyStudentStrip from "@/component/HappyStudentStrip";
import CareerCounsellingStrip from "@/component/CareerCounsellingStrip";

export default function Home() {
  return (
    <>
    <Navigation/>
    <LearningJourney/> 
    <AboutUs/>
    <Courses/>
    <OurService/>
    <HappyStudentStrip/>
    <BlogVideoNotice/>
    <CourseReview/>
    <Cta/>
    <Blog/>
    <Testimonial/>
    <CareerCounsellingStrip/>
    <Newsletter/>
    <Footer/>
   
    </>
  );
}  
