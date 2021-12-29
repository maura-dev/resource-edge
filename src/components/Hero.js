import React from 'react';
import HeroImg from "../assets/hero.svg";

export default function Hero() {
    return (
        <section className='hero-section'>
            <div>
                <p className="hero-heading">Throw paperwork into the trash where it belongs.</p>
                <p className='hero-p'>Eliminate all the hassle involved in managing people operations by automating it.</p>
            </div>
            <div>
                <img src={HeroImg} alt="hero-img"/>
            </div>        
        </section>
    )
}
