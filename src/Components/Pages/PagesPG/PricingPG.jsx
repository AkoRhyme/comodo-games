import React from "react";
import "./PricingPG.css";
import { Link } from "react-router-dom";
import Navbar from "../../Home/Navbar/Navbar";
import Footer from "../../Home/Footer/Footer";
import Pricingplans from "../../Home/Pricingplans/Pricingplans";
import Subcribe from "../../Home/Subcribe/Son";

function PricingPG (){
    return(
      <div>
          <Navbar/> 
        <div className='pricing-pg'>
        <img alt='' src='https://preview.colorlib.com/theme/comodo/img/banner/home-banner.jpg.webp' />
        <div className="pricingpg-txt">
          <Link to='/home' className='link-home'>Home <i class="fa-solid fa-right-long"> </i></Link>
            <Link to='/PricingPG' className='link-pricingpg'> Pricing</Link>
          <h2>Pricing Plans</h2>
        </div>
      </div>
      <Pricingplans/>
      <Subcribe/>
      <Footer/>
      </div>
    )
}

export default PricingPG;