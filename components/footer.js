import React from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'


function footer() {
  return (
    <div className='footer'>
      <div className='container-footer'>
        <div className="row">
          <div className="footer-col col-md-3">
            <h4>COMPANY</h4>
            <ul>
              <li><Link href='#'>About Us</Link></li>
              <li><Link href='#'>Our Services</Link></li>
              <li><Link href='#'>Privacy policy</Link></li>
              <li><Link href='#'>Why us</Link></li>
            </ul>
          </div>
          <div className="footer-col col-md-3">
            <h4>GET HELP</h4>
            <ul className='footer_list'>
              <li><Link href='#'>FAQs</Link></li>
              <li><Link href='#'>Order Details</Link></li>
              <li><Link href='#'>Returns</Link></li>
              <li><Link href='#'>Order Status</Link></li>
            </ul>
          </div>
          <div className="footer-col col-md-3">
            <h4>PRODUCTS</h4>
            <ul className='footer_list'>
              <li><Link href='/product'>Switching </Link></li>
              <li><Link href='#'>Routing</Link></li>
              <li><Link href='#'>WI-FI Access Point </Link></li>
              <li><Link href='#'>Broadband & Adslrouters</Link></li>
              <li><Link href='#'>LAN Extender </Link></li>
            </ul>
          </div>
          <div className="footer-col col-md-3">
            <h4>FOLLOW US</h4>
            <div className='social-link'>
              <li className="logo-text"><img className="logo" src="/images/facebook_logos.png" alt="" /><Link href="https://facebook.com">Facebook</Link></li>
              <li className="logo-text"><img className="logo" src="/images/twitter.png" alt="" /><Link href="https://twitter.com">Twitter</Link></li>
              <li className="logo-text"><img className="logo" src="/images/youtube.png" alt="" /><Link href="https://youtube.com">YouTube</Link></li>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default footer