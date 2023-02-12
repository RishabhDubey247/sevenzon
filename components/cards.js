import React from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const cards = () => {
  return (
    <div>
      <div class="container text-center">
        <h1 className="text">Our Solutions</h1>
      </div>
      <div class="container">
        <div class="scheme-wrap">
          <div class="scheme-card">
            <div class="box">
              <div class="content">
                <div class="scheme-card-img">
                  <img src="/images/mobsol_1.png" />
                </div>
                <h5>Mobility & wireless solutions</h5>
                <p>
                The need of networks by extending it to wherever the user or data travels and demands access to resources from more devices than ever before.
                </p>
                <a href="/product">Read More</a>
              </div>
            </div>
          </div>
          <div class="scheme-card">
            <div class="box">
              <div class="content">
                <div class="scheme-card-img">
                  <img src="/images/netsol_2.png" />
                </div>
                <h5>Networking solutions</h5>
                <p>
                At SEVENZON TECHNOLOGIES, we design and deliver high performance networks which helps you drive your enterprise smoothly without causing unnecessary downtime or interruptions
                </p>
                <a href="/product">Read More</a>
              </div>
            </div>
          </div>
          <div class="scheme-card">
              <div class="box">
                <div class="content">
                    <div class="scheme-card-img">
                        <img src ="/images/secsol_3.png"/>
                   </div>
                  <h5>Security solutions</h5>
                  <p>cyber security is one of the greatest challenges of our times and cyber security services have now become an important part of business strategies.</p>
                  <a href="/product">Read More</a>
                </div>
              </div>
            </div>
            <div class="scheme-card">
              <div class="box">
                <div class="content">
                    <div class="scheme-card-img">
                        <img src ="/images/websol_4.png"/>
                   </div>
                  <h5>Web Development & Cyber Security</h5>
                  <p>Coming Soon...</p>
                  <a href="/product">Read More</a>
                </div>
              </div>
            </div>
        </div>
        
      </div>
      
    </div>
  );
};

export default cards;
