import React from "react";
import Image from "next/image";
import styles from '../styles/Home.module.css'

const header = () => {
  return (
    <div className="logo_nav">
      <div className="logo_div">
      <img className="logo" src="/images/mainlogo.png" alt="" />
      <p className="company_name">SEVENZON TECHNOLOGIES</p>
      </div>
      <div className="mail">
        <a href="mailto:sales@sevenzon.co.in" className="e-mail">Email:-sales@sevenzon.co.in</a>
        <p>Mobile No. :- +91-7289070797</p>
      </div>
    </div>
  );
};

export default header;
