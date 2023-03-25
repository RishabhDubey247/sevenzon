import React from 'react'
import Img from "next/image";

import Counter from "../components/counter";

const whyus = () => {
  return (
    <div>
        <section>
      <section class="what-section">
        <div class="container">
            <div class="row what-first">
                <div class="col-lg-7 col-md-12">
                <Img src="/images/overview.png" width="500" height="350"/>
                </div>
                <div class="col-lg-5 col-md-12">
                <div class="what-heading">
                        <Img src="/images/Artboard 1 copy 23.png" width="70" height="70"/>
                        <span class="sub-heaidng"></span>
                        <h2 class=""><b>WHY CHOOSE SEVENZON TECHNOLOGIES?</b></h2>
                        <div class="wdr"></div>
                        <p>
                        Sevenzon Technologies stands out in a competitive market by delivering top-quality products that meet the specific needs of our clients. Our approach to every project is unique, and it begins with a deep understanding of your starting point, future goals, values, customers, and the challenges you face.We believe that the only way to effectively solve a problem 
                        is by examining it from all angles.<br></br> That's why we have a thorough and proven process to uncover all the relevant information, and our team is dedicated to satisfying their curiosity to ensure that you receive the best possible solutions.Whether you're looking for innovative IT solutions or state-of-the-art surveillance systems, Sevenzon Technologies is committed to delivering the best possible customer experience. Choose us for quality products and expert support that will help you reach new levels of success.

                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="what-section">
        <div class="container">
            <div class="row what-first">
                <div class="col-lg-7 col-md-12">
                <div class="what-heading">
                        <Img src="/images/Artboard 1 copy 23.png" width="70" height="70"/>
                        <span class="sub-heaidng"></span>
                        <h2 class=""><b>OUR MISSION</b></h2>
                        <div class="wdr"></div>
                        <p>
                        At Sevenzon Technologies, we aim to provide top-quality IT solutions and surveillance systems that meet the needs of our clients. We are driven by a vision and guided by values to make a positive impact in the lives of our clients, partners, and candidates. Our mission is to deliver excellence in everything we do.
<br></br>In addition to our core services, we are also committed to responsible corporate citizenship and promoting sustainable business practices. We believe in contributing to the growth and development of the communities we serve, and we are constantly seeking out new opportunities to make a positive difference.
                        </p>
                    </div>
                </div>
                <div class="col-lg-5 col-md-12">
                <Img src="/images/ourmission.png" width="500" height="500"/>
                </div>
            </div>
        </div>
        <Counter />
    </section>
</section>
    </div>
  );
}

export default whyus