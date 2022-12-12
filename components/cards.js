import React from "react";
import styles from "../styles/Home.module.css";
import Link from 'next/link'

const cards = () => {
  return (
    <div>
      <h1 className="text">Our Solutions</h1>
    <div className="body">
    <div class="container">
    <div class="row gx-3" >
        
            <div class="col-lg-4  card mb-0">
                <h2 class="card-title">MOBILE &amp; WIFI SOLUTION</h2>
                <p class="card-body">
                  As Wireless, mobility and digitization changing the way we work or study,
                  and redefining the need of networks
                </p>
                <a href="/product">learn more</a>
              </div>
     
        
            <div class="col-lg-4  card">
                <h2 class="card-title">NETWORKING SOLUTION</h2>
                <p class="card-body">
                  We deliver high performance networks which helps you drive your enterprise
                  without causing unnecessary downtime or interruptions
                </p>
                <a href="/product">learn more</a>
              </div>
      
        
            <div class="col-lg-4  card">
                <h2 class="card-title">SECURITY SOLUTION</h2>
                <p class="card-body">
                  Cyber security is the greatest challenges of our times and cyber security
                  services have now become an important part of business strategies
                </p>
                <a href="/product">learn more</a>
              </div>
      
    </div>
</div>
    </div>
    </div>
  );
};

export default cards;
