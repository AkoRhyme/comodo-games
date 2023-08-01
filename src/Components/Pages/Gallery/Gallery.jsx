import React from 'react'
import { Link } from 'react-router-dom';

import './Gallery.css';
import Navbar from '../../Home/Navbar/Navbar';
import Screengalery from '../../Home/ScreenGalery/Screengalery';
import Footer from  '../../Home/Footer/Footer';

function Gallery() {
  return (
    <>
    <Navbar/>
      <div className='gallery-banner'>
        <img alt='' src='https://preview.colorlib.com/theme/comodo/img/banner/home-banner.jpg.webp' />
        <div className="gallery-txt">
          <Link to='/home' className='link-home'>Home   <i class="fa-solid fa-right-long"></i></Link>
            <Link to='/gallery' className='link-gallery'>   Gallery</Link>
          <h2>Screen Shot Gallery</h2>
        </div>
      </div>
      <Screengalery/>
      <Footer/>


    </>


  )
}

export default Gallery;