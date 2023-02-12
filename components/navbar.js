import React from "react";
import Image from "next/image";
import Link from "next/link";

const navbar = () => {
  return (
  <div className="sticky">
    <div>
      <div className="nav_div">
        <div className="logo_nav">
          <div className="logo_div">
            <Link  href="/" ><img className="logo_main" src="/images/mainlogo.png" alt=""></img></Link>
            <p className="company_name">SEVENZON TECHNOLOGIES</p>
          </div>
          <div class="wb_element" data-plugin="Button"><a class="wb_button" href="mailto:sales@sevenzon.co.in" target="_blank"><span>Drop Your Message Here</span></a></div>
        </div>
     </div>
      <div class="nav">
  <div class="nav-btn">
    <label for="nav-check">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
  <div class="nav-links">
    <Link href="/">Home</Link>
    <Link href="/product">Solutions</Link>
    <Link href="/about">About Us</Link>
    <Link href="/whyus">Why us</Link>
    <Link href="/contact">Contact</Link>
  </div>
</div>
</div>
</div>
  );
};

export default navbar;
