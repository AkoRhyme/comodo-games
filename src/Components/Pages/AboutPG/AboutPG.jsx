import React from 'react';
import { Link } from 'react-router-dom';

import './AboutPG.css'
import Funnyspencer from '../../Home/FunnySpencer/Funnyspencer';
import Faq from '../../Home/FAQ/Faq';
import Son from '../../Home/Subcribe/Son';
import Footer from '../../Home/Footer/Footer';
import Navbar from '../../Home/Navbar/Navbar';
import About from '../../Home/About/About';


function AboutPG() {
  return (
    <>
      <Navbar />
      <div className='aboutpg-banner'>
        <img alt='' src='https://preview.colorlib.com/theme/comodo/img/banner/home-banner.jpg.webp' />
        <div className="aboutpg-txt">
          <Link to='/home' className='link-home'>Home <i class="fa-solid fa-right-long"></i></Link>
            <Link to='/about' className='link-about'> About</Link>
          <h2>About Us</h2>
        </div>

      </div>
      
      <About/>
      <Funnyspencer />
      <Faq />
      <Son />
      <Footer />
    </>
  )
}

export default AboutPG;