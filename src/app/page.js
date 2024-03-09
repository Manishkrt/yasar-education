import Image from "next/image";
import styles from "./page.module.css";
import Navigation from "@/component/Navigation";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <Navigation/>
    <h1 className="container bg-dark" >start</h1>
    <Link href="#"></Link>
    </>
  );
}
