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

export default function Home() {
  return (
    <>
    <Slider/>

    {/* middel section */}

    <div className="main_content">
    <div className='container'>
      <div className='banner'>
        <h1 className='text'>Our Mission</h1>
        <span className='text1'>
          <span>
            <span>
            We work hard to deliver great service and support, and via our targeted strategy, we align nearly every facet of our organisation to forge strong connections and better meet the technological needs of our clients.
<br></br>
We provide a series of value-added services to our partners, helping them develop profitable and fulfilling customer relationships.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
        </span>
        <button className="btn">
        <Link class='name_nav' href="/whyus"><b>Read More</b></Link>
        </button>
      </div>
    </div>
    </div>
    <Cards/>
    <Partners/>
    <Cont/>
    </>
  );
}
