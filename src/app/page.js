import Image from "next/image";
import styles from "./page.module.css";
import Navigation from "@/component/Navigation";
import Link from "next/link";
import LearningJourney from "@/component/LearningJourney"; 
import Courses from "@/component/Courses";
import CourseReview from "@/component/CourseReview";
import AboutUs from "@/component/AboutUs";

export default function Home() {
  return (
    <>
    <Navigation/>
    <LearningJourney/> 
    <AboutUs/>
    <Courses/>
    <CourseReview/>
    </>
  );
}  
