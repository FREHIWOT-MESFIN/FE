import React from 'react'
import Navbar from './Navbar';
import Hero  from './Hero';
import Mission from './Mission';
import Features from './Features';
import Footer from './Footer';
import Process from './process';
import Faq from './Faq';
import DownloadL from './DownloadL';


const LandingPage = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Mission />
        <Features />
        <Process />
        <Faq />
        <DownloadL />
        <Footer />
    </div>
  )
}

export default LandingPage