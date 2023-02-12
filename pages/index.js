import Head from "next/head";
import Image from "next/image";
import navbar from "../components/navbar";
import styles from "../styles/Home.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.css";
import Cards from "../components/cards";
import Partners from "../components/partners";
import Slider from "../components/slider";
import Cont from "../components/cont";
import Link from 'next/link'
import Index from "../components/index_com";
import Index2 from "../components/index_com2"; 

export default function Home() {
  return (
    <>
    <div className="">
    <Slider/>

    <Index2/>
<Cards/>
<Index/>
<Partners/>
{/* <Cont/>  */}
    </div>
    </>
  );
}
