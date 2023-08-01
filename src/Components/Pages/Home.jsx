import React from 'react'
import Navbar from '../Home/Navbar/Navbar';
import Banner from '../Home/Banner/Banner';
import Container from '../Home/Container/Container';
import About from '../Home/About/About';
import FAQ from '../Home/FAQ/Faq';
import FunnySpencer from '../Home/FunnySpencer/Funnyspencer';
import Footer from '../Home/Footer/Footer';
import LargestBlogPost from '../Home/LargestBlogPosts/LBP';
import Pricingplans from '../Home/Pricingplans/Pricingplans';
import RecentUpdate from '../Home/RecentUpdate/Recentup';
import ScreenGalery from '../Home/ScreenGalery/Screengalery';
import Subcribe from '../Home/Subcribe/Son';





function Home() {
  return (
    <>
      <Navbar/>
      <Banner/>
      <About/>
      <Container/>
      <RecentUpdate/>
      <ScreenGalery/>
      <FunnySpencer/>
      <Pricingplans/>
      <FAQ/>
      <LargestBlogPost/>
      <Subcribe/> 
      <Footer/>
    </>
    )
}

export default Home;