import React from "react";
import Image from "next/image";

const company = () => {
  return (
    <div className="company">
      <div className="company-row">
        <img className="company-image" src="/images/company.jpg" alt="" />
        <div className="company-info">
          <div className="company-content">
            <h2>Company Info,</h2>
            <p>Our Mission & Value</p>
            <p1>Our promise to perform responsibly as a company.</p1>
          </div>
          <div className="company-about">
            We <b>SEVENZON TECHNOLOGIES</b> are committed towards providing
            optimum satisfaction to our clients and develop a fruitful aswell as
            long standing relationship with them. Our company is engaged in
            offering a range of IT Solutions and Surveillance Systems that is
            one of the best in the existing market and matches the international
            standards in terms of quality and functionality. Our comprehensive
            range includes ,copper and fiber, switching, Servers,
            Routers,Surveillance . We also undertake to deliver our range of
            goods on time anywhere across the country and are well known to
            provide satisfying solutions to our clients in terms of the products
            and their suitability to the client’s needs. We have the best
            technology, backed by very systematic logistics that helps us to
            keep pace with the fast growing demands of the market. The range IT
            Solutions and Surveillance Systems that we offer to our clients
            helps them to choose the best ones that would satisfy their needs.
            Innovative solutions, latest products, best brands, best price range
            and on time delivery are what we are much known for.
          </div>
        </div>
      </div>
        <h2>Our mission</h2>
       <div className="row">
        <div className="col-md-6">
        <Image
                src="/images/our_mission.gif"
                alt=""
                loading="lazy"
                width="500"
                height="300"
              />
        </div>
        <div className="col-md-6">
        <p>
          We are a business inspired by Vision,driven by Mission and underpinned
          by Values. We have put our Vision,Mission and Values here for you to
          see,along with what they mean to our candidates, clients and partners
          so that you can decide whether we are a company built of things which
          matter to you Replace this text with information about you and your
          business or add information that will be useful for your customers.
        </p>
       </div>
      </div>
      <div className="company-card-2">
        <h2>Our responsibility</h2>
        <p className="company-card-body">
          At SEVENZON TECHNOLOGIES , we put sustainable development and the
          environment at the core of our organisation by integrating these
          considerations in the decision-making process of our business lines.
          Responsibility isn’t just a part of our company name: it runs through
          everything that we do and believe in Ourself.
        </p>
      </div>
    </div>
  );
};

export default company;
