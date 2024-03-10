import Image from "next/image";
import styles from "./page.module.css";
import Navigation from "@/component/Navigation";
import Link from "next/link";
import LearningJourney from "@/component/LearningJourney";

export default function Home() {
  return (
    <>
    <Navigation/>
    <LearningJourney/>
    
    </>
  );
}
