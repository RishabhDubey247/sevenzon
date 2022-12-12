import React from 'react'
import styles from '../styles/Home.module.css'


function footer() {
  return (
    <div className='footer'>
      <div className='container-footer'>
        <div className="row">
          <div className="footer-col col-md-3">
            <h4>COMPANY</h4>
            <ul>
              <li><a href='#'>About Us</a></li>
              <li><a href='#'>Our Services</a></li>
              <li><a href='#'>Privacy policy</a></li>
              <li><a href='#'>Why us</a></li>
            </ul>
          </div>
          <div className="footer-col col-md-3">
            <h4>GET HELP</h4>
            <ul>
              <li><a href='#'>FAQs</a></li>
              <li><a href='#'>Order Details</a></li>
              <li><a href='#'>Returns</a></li>
              <li><a href='#'>Order Status</a></li>
            </ul>
          </div>
          <div className="footer-col col-md-3">
            <h4>PRODUCTS</h4>
            <ul>
              <li><a href='#'>Switching </a></li>
              <li><a href='#'>Routing</a></li>
              <li><a href='#'>WI-FI Access Point </a></li>
              <li><a href='#'>Broadband & Adslrouters</a></li>
              <li><a href='#'>LAN Extender </a></li>
            </ul>
          </div>
          <div className="footer-col col-md-3">
            <h4>FOLLOW US</h4>
            <div className='social-link'>
              <li className="logo-text"><img className="logo" src="/images/facebook_logos.png" alt="" /><a href="https://facebook.com">Facebook</a></li>
              <li className="logo-text"><img className="logo" src="/images/twitter.png" alt="" /><a href="https://twitter.com">Twitter</a></li>
              <li className="logo-text"><img className="logo" src="/images/youtube.png" alt="" /><a href="https://youtube.com">YouTube</a></li>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default footer