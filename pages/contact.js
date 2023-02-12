import React from "react";
import Img from "next/image";

const contact = () => {
  return (
    <div className="">
      <section class="inner-hero-banner card-page">
        <div class="bg"></div>
        <div class="bg bg2"></div>
        <div class="bg bg3"></div>
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-6">
              <div class="in-hero-content-box">
                <div class="inner-text">
                  <div class="hero-anim">
                    <Img src="/images/debit-card.png" height="20" width="20" />
                    <p>
                      <span class="circle-h"></span> Explore Your Self
                    </p>
                  </div>
                  <h2 class="in-banner-heading">
                    Get in touch<br></br>
                    <b>To get Information</b>
                  </h2>
                  <p class="inb-subheading">
                    For more query you can connect with us with a call , message
                    or go to link of our website SEVENZON.{" "}
                  </p>
                  <div class="hero-btn-box">
                    <div class="feature-four__top-btn-box">
                      <a href="#" class="thm-btn feature-four__top-btn">
                        Get in Touch
                      </a>
                    </div>
                    <div class="play-btn">
                      <a id="play-video" class="video-play-button" href="#">
                        <span></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-6">
              <div class="in-hBanner">
                <Img
                  src="/images/contact-banner.png"
                  height="440"
                  width="550"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="card-section">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-sm-12 col-md-12 col-xl-4 col-xs-12">
              <div class="card">
                <div class="card-body">
                  <div class="card-image">
                    <Img src="/images/telephone.png" width="50px" height="50" />
                  </div>
                  <h5 class="card-title">Telephone +91-7289070797</h5>
                  <p class="card-text ">
                    Your concerns have always been our priority, reach out to us
                    at this toll-free number for any query. Lines will be open
                    from 10am to 7pm
                  </p>
                </div>
              </div>
            </div>
            <div class="card-center col-lg-4 col-sm-12 col-md-12 col-xl-4 col-xs-12">
              <div class="card">
                <div class="card-body">
                  <div class="card-image">
                    <Img src="/images/whatapp.png" width="50px" height="50" />
                  </div>
                  <h5 class="card-title">Whatsapp +91-7289070797</h5>
                  <p class="card-text">
                    If you are not a call person, you can reach out to us with a
                    text via WhatsApp. Our experts will be there to solve any
                    issue
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-lg-4 col-sm-12 col-md-12 col-xl-4 col-xs-12">
              <div class="card">
                <div class="card-body">
                  <div class="card-image">
                    <Img src="/images/mail.png" width="50px" height="50" />
                  </div>
                  <h5 class="card-title">Mail us Sales@sevenzon.co.in</h5>
                  <p class="card-text">
                    If you need to ask anything related to our products or any
                    general query, you can always drop us a mail. We will reach
                    you back!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="contact-page-sec">
        <div class="container">
          <div class="row">
            <div class="col-md-8">
              <div class="mapPnl">
              <div className="map-screen">
        <iframe
          className="map-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.5020190902874!2d77.35070321490879!3d28.644683482413047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfacbced3921f%3A0xf44f76a01ca064e!2sSevenzon%20Technologies!5e0!3m2!1sen!2sin!4v1665655852289!5m2!1sen!2sin"
          width="600"
          height="4500"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="addressAreaWrap">
                <div class="addressArea">
                  <h2>Our Location</h2>
                  <p>
                  HEAD OFFICE
Plot no-16,Flat no-202
Gyankhand-2,Indirapuram
Ghaziabad - 201014
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default contact;
