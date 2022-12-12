import React from 'react'
import Image from "next/image";
import styles from '../styles/Home.module.css'
import Link from 'next/link'


const navbar = () => {
  return (
    <div className='nav_bar'>
        <Link class='name_nav' href="/#">Home</Link>
        <Link class='name_nav' href="/product">Product</Link>
        <Link class='name_nav' href="/whyus">Why Us</Link>
        <Link class='name_nav' href="/company">Company Profile</Link>
    </div>
  )
}

export default navbar