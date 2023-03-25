import React from "react";
import Image from "next/image";
import Link from "next/link";

const navbar = () => {
  return (
    <header class="header">
    <nav class="navbar navbar-expand-sm justify-content-center ">
      <div class="container-fluid navbar-container">
        <div class="d-flex align-items-center">
          <Link href="/" class="navbar-brand">
            <img className="logo_main" src="/images/mainlogo.png" alt=""></img>
          </Link>
          <p className="company_name mb-0 ml-3">SEVENZON TECHNOLOGIES</p>
        </div>
        <div class="collapse navbar-collapse" id="mynavbar">
        <ul class="navbar-nav m-auto">
          <li class="nav-item mr-3">
            <Link href="/">Home</Link>
          </li>
          <li class="nav-item mr-3">
            <Link href="/about">About Us</Link>
          </li>
          <li class="nav-item mr-3">
            <Link href="/product">Solutions</Link>
          </li>
          <li class="nav-item mr-3">
            <Link href="/whyus">Why us</Link>
          </li>
          <li class="nav-item mr-3">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <a href="mailto:sales@sevenzon.co.in" class="btn btn-danger">
          Drop Your Message Here
        </a>
      </div>
    
    </nav>
    </header>
  );
};
export default navbar;