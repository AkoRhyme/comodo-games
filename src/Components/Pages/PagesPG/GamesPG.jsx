import React from "react";
import './GamesPG.css';
import { Link } from "react-router-dom";
import Navbar from "../../Home/Navbar/Navbar";
import Footer from "../../Home/Footer/Footer";
import Container from "../../Home/Container/Container";
import RecentUpdate from "../../Home/RecentUpdate/Recentup";
import Faq from "../../Home/FAQ/Faq";
import Son from "../../Home/Subcribe/Son";


function GamesPG (){
    return(
      <div>
          <Navbar/> 
        <div className='games-pg'>
        <img alt='' src='https://preview.colorlib.com/theme/comodo/img/banner/home-banner.jpg.webp' />
        <div className="gamespg-txt">
          <Link to='/home' className='link-home'>Home <i class="fa-solid fa-right-long"> </i></Link>
            <Link to='/GamesPG' className='link-gamespg'> Upcoming Games</Link>
          <h2>Upcoming Games</h2>
        </div>
      </div>

      <Container/>
      <RecentUpdate/>
      <Faq/>
      <Son/>
      <Footer/>
      </div>
    )
}

export default GamesPG;