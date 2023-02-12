import React from "react";
import Link from "next/link";
import Img from "next/image";

const form = () => {
  return (
      <section class="">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="form-wrap">
                      <div class="contact-page-form" method="post">
                        <h2>Get in Touch</h2> 
                        <form action="contact-mail.php" method="post">
                          <div class="row">
                          <div class="col-md-6 col-sm-6 col-xs-12">
                            <div class="single-input-field">
                              <input type="text" placeholder="Your Name" name="name"/>
                            </div>
                          </div>  
                          <div class="col-md-6 col-sm-6 col-xs-12">
                            <div class="single-input-field">
                              <input type="email" placeholder="E-mail" name="email" required/>
                            </div>
                          </div>                              
                          <div class="col-md-6 col-sm-6 col-xs-12">
                            <div class="single-input-field">
                              <input type="text" placeholder="Phone Number" name="phone"/>
                            </div>
                          </div>  
                          <div class="col-md-6 col-sm-6 col-xs-12">
                            <div class="single-input-field">
                              <input type="text" placeholder="Subject" name="subject"/>
                            </div>
                          </div>                
                          <div class="col-md-12 message-input">
                            <div class="single-input-field">
                              <textarea  placeholder="Write Your Message" name="message"></textarea>
                            </div>
                          </div>                                                
                          <div class="single-input-fieldsbtn">
                            <input type="submit" value="Send Now"/>
                          </div>                          
                        </div>
                        </form>   
                      </div>
                    </div>      
                  </div>
                  <div class="col-md-6">
                    <div class="contact-img">
                        <div class="contact-inner-img"><Img src = "/images/inquiry.png" width="800" height="600"/></div>
                    </div>
                  </div>
            </div>
          </div>
      </section> 
  );
};

export default form;
