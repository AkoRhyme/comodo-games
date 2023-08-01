import React from 'react';
import { Link } from 'react-router-dom';
// import { useLoadScript, GoogleMap } from "google-maps-react";

import Footer from '../../Home/Footer/Footer';
import Navbar from '../../Home/Navbar/Navbar';
import maps_img from '../../../img/map.jpg';
import './Contact.css';


function Contact() {
  // const { isLoaded } = useLoadScript({ googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY })

  // if (isLoaded)

  return (
    <div>
      <Navbar />
      <div className='contact-banner'>
        <img alt='' src='https://preview.colorlib.com/theme/comodo/img/banner/home-banner.jpg.webp' />
        <div className="contact-txt">
          <Link to='/home' className='link-home'>Home <i class="fa-solid fa-right-long"> </i></Link>
            <Link to='/contact' className='link-contact'> Contact</Link>
          <h2>Contact us</h2>
        </div>
      </div>
      <div className='contact-map'>
        <div className='no-api-map'>
          <img src={maps_img}/>
        </div>
      </div>
      <div className='contact_menu_area'>
        <div className="contact-menu">
          <div className="menu-left">
            <div className="contact_info">
              <div className="info_item">
               <i className="fa-solid fa-house-chimney-window"></i>
                <h6>California, United States</h6>
                <p>Santa monica bullevard</p>
              </div>
              <div className="info_item">
                <i className="fa-solid fa-mobile-retro"></i>
                <h6><a href="#">00 (440) 9865 562</a></h6>
                <p>Mon to Fri 9am to 6 pm</p>
              </div>
              <div className="info_item">
                <i className="fa-solid fa-envelope"></i>
                <h6><a href="#">support@colorlib.com</a></h6>
                <p>Send us your query anytime!</p>
              </div>
            </div>
          </div>
          <div className="menu-right">
            <form className="contact_form" action="contact_process.php" method="post" id="contactForm" novalidate="novalidate">
              <div className="contact-md-6">
                <div className="contact-form-group">
                  <input type="text" className="contact-form-control" id="name" name="name" placeholder="Enter your name" />
                </div>
                <div className="contact-form-group">
                  <input type="email" className="contact-form-control" id="email" name="email" placeholder="Enter email address" />
                </div>
                <div className="contact-form-group">
                  <input type="text" className="contact-form-control" id="subject" name="subject" placeholder="Enter Subject" />
                </div>
              </div>
              <div className="contact-md-6">
                <div className="contact-form-message">
                  <textarea className=" c-f-g" name="message" id="message" rows="1" placeholder="Enter Message"></textarea>
                </div>
              </div>
              <div className="contact-send-btn text-right">
                <button type="submit" value="submit" className="primary_btn_contact">Send Message</button>
              </div>
            </form>
          </div>
        </div>

      </div>
      <Footer />


    </div>

  )
}

export default Contact;