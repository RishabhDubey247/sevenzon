import React from "react";
import Img from "next/image";

const about = () => {
  return (
    <div className="about-title">
      <div className="container">
        <section class="vedio-section">
            <div class="scrn-conteiner">
                <div class="vedio-row">
                      <div class="video-col vedio-col-left">
                              <div class="wrapper">
                                  <div class="video">
                                      <img src="/images/about-us.png"/>
                                  </div>
                                <div class="playpause"></div>
                              </div>
                      </div>
                      <div class="video-col vedio-col-right">
                          <div class="video-content-box">
                              <div class="video-content">
                                  <h2>About Us</h2>
                                  <h5>Who we are ?</h5>
                                  <p className="card_p">
                                  Sevenzon Technologies is dedicated to delivering the best IT solutions for your business. Our company provides top-notch IT solutions and surveillance systems that meet the highest international standards for quality and performance. Our product line includes copper and fiber cabling, switching, servers, routers, and surveillance systems, and we are known for delivering these products on time, anywhere in the country.
Our commitment to providing the best customer experience is reflected in our innovative solutions, latest products, best brands, and competitive prices. Our team of experts and well-established logistics enable us to keep up with the fast-paced demands of the market, ensuring that our clients always have access to the right solutions for their needs.
At Sevenzon Technologies, we are committed to building long-lasting relationships with our clients by delivering solutions that meet their unique needs and expectations. With our cutting-edge technology and attention to detail, we strive to provide the best possible customer experience.
                                  </p>
                              </div>
                          </div>
                      </div>
                </div>
            </div>
        </section>
        <section class="about-values-seciton">
        <div class="scrn-conteiner">
            <div class="row vl-row">
                <div class="col-vs col-vs-1">
                    <div class="about-vs-content">
                        <h2>Our Strengths</h2>
                        <div class="strength">
                            <div class="str-col-1 str-card">
                                <div class="icon-str">
                                <Img src="/images/accuracy.png" height="90" width="90" />
                                </div>
                                <div class="wdr" ></div>
                                <div class="str-card-content">
                                    <p class="str-heading">Accuracy</p>
                                    <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</span>
                                </div>
                            </div>
                            <div class="str-col-1 str-card">
                                <div class="icon-str">
                                <Img src="/images/Efficiency.png" height="90" width="90" />
                                </div>
                                <div class="wdr" ></div>
                                <div class="str-card-content">
                                    <p class="str-heading">Efficiency</p>
                                    <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</span>
                                </div>
                            </div>
                            <div class="str-col-1 str-card">
                                <div class="icon-str">
                                    <Img src="/images/Dedication.png" height="90" width="90" />
                                </div>
                                <div class="wdr" ></div>
                                <div class="str-card-content">
                                    <p class="str-heading">Dedication</p>
                                   <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</span>
                                </div>
                            </div>
                            <div class="str-col-1 str-card">
                                <div class="icon-str">
                                <Img src="/images/Make_Clients.png" height="90" width="90" />
                                </div>
                                <div class="wdr" ></div>
                                <div class="str-card-content">
                                   <p class="str-heading">Make Clients</p>
                                   <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-vs col-vs-2">
                    <div class="vcs-contant">
                         <div class="vcs-card">
                            <h3>Values</h3>
                            <p>
                                Professionalism , reliability and trust lead our value 
                               system and these qualities are reflected in our work ethics and enhance our credibility.
                            </p>
                         </div>
                         <div class="vcs-card">
                            <h3>VISION</h3>
                            <p>
                            At Sevenzon Technologies, sustainability and environmental impact are at the forefront of our operations. We prioritize these considerations in every business decision we make. Responsibility is at the core of our company, and we take it seriously in all aspects of our business. We are committed to being responsible stewards of the environment and to ensuring that our actions have a positive impact on the world around us.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
    </div>
  );
};

export default about;
