import React from "react";

const contact = () => {
  return (
    <div className="contact-us">
      <h1 className="contact-headline">CONTACT US</h1>
      <div className="map">
        <div className="contact-details">
          <h1></h1>
          <p>
          <img src="/images/phone.png" alt="" /><b>Phone NO :-</b> +91-7289070797
          </p>
          <p>
          <img src="/images/email.png" alt="" /><b>E-mail :-</b> Sales@sevenzon.co.in
          </p>
          <p>
          <img src="/images/location.png" alt="" /> <b>Address :-</b>
            Plot no-16 ,flat no-202 , Indirapuram Ghaziabad - 201014
          </p>
        </div>
        <div className="map-screen">
        <img className="map-image" src="/images/map-screen.png" alt="" />
        <iframe className="map-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.5020190902874!2d77.35070321490879!3d28.644683482413047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfacbced3921f%3A0xf44f76a01ca064e!2sSevenzon%20Technologies!5e0!3m2!1sen!2sin!4v1665655852289!5m2!1sen!2sin"
          width="400"
          height="200"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        </div>
      </div>
    </div>
  );
};

export default contact;
