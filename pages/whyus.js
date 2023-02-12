import React from 'react'
import Img from "next/image";

import Counter from "../components/counter";

const whyus = () => {
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
                                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="what-card light-pink">
                                    <div class="what-card-in">
                                        <div class="wc-img-box"><img src="/images/key.png" height="70"  width="70"></img></div>
                                        <div class="wc-content">
                                            <h4>Enabling</h4>
                                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
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
                                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="what-card light-green">
                                    <div class="what-card-in">
                                        <div class="wc-img-box"><img src="/images/responsible-consumption.png"width="70" height="70"/></div>
                                        <div class="wc-content">
                                            <h4> responsible</h4>
                                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
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
                        <span class="sub-heaidng">Sub Heading </span>
                        <h2 class="">What is <b>Sevenzon ?</b></h2>
                        <div class="wdr"></div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
                            ad doloribus saepe asperiores voluptatibus deserunt. Quae,
                            voluptatem non possimus perspiciatis,
                            maxime aspernatur dolorum libero ad nam culpa quas odit quasi.
                        </p>
                    </div>
                    <div class="resourc-box">
                        <h5>Resources to help you with your Loan</h5>
                        <ul class="r-ul">
                            <li>Business Plan</li>
                            <li>Budget Planner</li>
                            <li>Cashflow Forecast</li>
                        </ul>
                    </div>
                    <div class="feature-four__top-btn-box">
                        <a href="#" class="thm-btn feature-four__top-btn">Contact Now</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
      <Counter/>
  </div>
  );
}

export default whyus