import React from "react";
import styles from "../styles/Home.module.css";
import Script from "next/script";
import $ from "jquery";
import Carousel from "react-slick";
import Image from "next/image";

const slider = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,
    arrows: false,
  };
  return (
    <>
      <Carousel {...settings}>
        <div className="slickItem">
          <div className="topArea">
            <div className="left">
              <h2 className="slider_text"><span className="everything">Everything</span> you will need for your  Office <div className="animated"><b>Networking</b></div></h2>
              <h2></h2>
            </div>
            <div className="img-box">
              <Image
                src="/images/sl1.png"
                alt=""
                loading="lazy"
                width="800"
                height="350"
              />
            </div>
          </div>
        </div>
        <div className="slickItem">
          <div className="topArea">
            <div className="left">
              <h2 className="slider_text"><span className="everything">Everything</span> you will need for your Office <br></br><span className="animated"><b>Electronic Safety</b></span></h2>
            </div>
            <div className="img-box">
              <Image
                src="/images/sl2.png"
                alt=""
                loading="lazy"
                width="800"
                height="350"
              /></div>
          </div>
        </div>
      </Carousel>
    </>
  );
};

export default slider;
