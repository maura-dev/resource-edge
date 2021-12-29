import React from 'react'
import About from '../components/About'
import Features from '../components/Features'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'
import MobileHeader from '../components/MobileHeader'

export default function LandingPage() {
    return (
        <div>
            <Header/>
            <MobileHeader/>
            <Hero/>
            <Features/>
            <About/>
            <Footer/>
        </div>
    )
}
