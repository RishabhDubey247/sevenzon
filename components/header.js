import React from "react";
import Image from "next/image";
import styles from '../styles/Home.module.css'

const header = () => {
  return (
      <div className="mail">
        <div className="mail-1">
        <a href="mailto:sales@sevenzon.co.in" className="e-mail">Email:-sales@sevenzon.co.in</a>
        <p>Mobile No. :- +91-7289070797</p>
        <p> Address:- Plot No. 16 Gyankhan 2 Indrapuram </p>
        </div>
      </div>
  );
};

export default header;
