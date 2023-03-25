import React from 'react'
import Img from "next/image";

const index_com2 = () => {
  return (
    <div>
        <section class="what-section">
        <div class="container">
            <div class="row what-first">
                <div class="col-lg-6 col-md-12">
                    <div class="row">
                        <div class="col-lg-6 col-md-6 col-sm-6">
                            <div class="what-car-section what-car-section-1">
                                <div class="what-card light-yellow">
                                    <div class="what-card-in">
                                        <div class="wc-img-box"><img src="/images/innovation.png" height="70"  width="70"></img></div>
                                        <div class="wc-content">
                                            <h4>Innovation</h4>
                                            <p>Sevenzon leverages cutting-edge technology to deliver innovative solutions that meet the ever-evolving needs of its clients.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="what-card light-pink">
                                    <div class="what-card-in">
                                        <div class="wc-img-box"><img src="/images/key.png" height="70"  width="70"></img></div>
                                        <div class="wc-content">
                                            <h4>Enabling</h4>
                                            <p> Sevenzon empowers its clients to stay ahead of the curve by providing the tools and resources they need to succeed.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-6">
                            <div class="what-car-section what-car-section-2">
                                <div class="what-card light-blue">
                                    <div class="what-card-in">
                                        <div class="wc-img-box"><Img src="/images/talent-search.png"  width="70" height="70"/></div>
                                        <div class="wc-content">
                                            <h4>Talent</h4>
                                            <p>Sevenzon's team of skilled professionals is dedicated to providing exceptional service and delivering top-notch results.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="what-card light-green">
                                    <div class="what-card-in">
                                        <div class="wc-img-box"><img src="/images/responsible-consumption.png"width="70" height="70"/></div>
                                        <div class="wc-content">
                                            <h4> responsible</h4>
                                            <p>Sevenzon takes responsibility for its actions and strives to make a positive impact on society, while adhering to ethical standards and best practices.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-12">
                    <div class="what-heading">
                        <Img src="/images/Artboard 1 copy 23.png" width="70" height="70"/>
                        <span class="sub-heaidng"></span>
                        <h2 class=""><b>Who we are?</b></h2>
                        <div class="wdr"></div>
                        <p>
                        Sevenzon Technologies is dedicated to delivering the best IT solutions for your business. Our company provides top-notch IT solutions and surveillance systems that meet the highest international standards for quality and performance. Our product line includes copper and fiber cabling, switching, servers, routers, and surveillance systems, and we are known for delivering these products on time, anywhere in the country.
                        </p>
                    </div>
                    <div class="resourc-box">
                        <h5>Resources to help you with your Business</h5>
                        <ul class="r-ul">
                            <li>Mobility & wireless solutions</li>
                            <li>Networking solutions</li>
                            <li>Security solutions</li>
                            <li>Web Development</li>
                        </ul>
                    </div>
                    <div class="feature-four__top-btn-box">
                        <a href="#" class="thm-btn feature-four__top-btn">Contact Now</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default index_com2