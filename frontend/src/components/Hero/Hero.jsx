import React from 'react'
import './Hero.css';
import {HiLocationMarker} from 'react-icons/hi'
import CountUp from 'react-countup';
const Hero = () => {
  return (
    <section className='hero-wrapper'>
       <div className='paddings innerWidth flexCenter hero-container'>
              <div className='hero-left'>
                     <div className="hero-title">
                            <div className='orange-circle'></div>
                            <h1>Discover<br/>more Suitable<br/>Property</h1>
                     </div>
                     <div className="flexColStart secondaryText hero-des">
                            <span>Choose a plot which suit's your interest</span>
                            <br />
                            <span>Forget all difficulties in finding a residence for you</span>
                     </div>
                     <div className='flexCenter search-bar'>
                            <HiLocationMarker color="var(--blue)" size={25}/>
                     <input type="text"/>
                     <button className='button'>Search</button>
                     </div>
              </div>
                     <div className=" flexCenter stats">
                            <div className="flexColStart stat">
                                   <span>
                                          <CountUp start={8800} end={9000} duration={4}/>
                                          <span className='orangeText'> +</span>
                                          <br/>
                                          <span className='secondaryText'>Premium Quality</span>
                                   </span>
                            </div>
                            <div className='flexColStart stat'>
                                   <span>
                                   <CountUp start={1950} end={2000} duration={4}/>
                                          <span className='orangeText'> +</span>
                                          <br/>
                                          <span className='secondaryText'>Happy Customers</span>
                                   </span>
                            </div>

                            <div className='flexCenter flexColStart stat'>
                                   <span>
                                   <CountUp start={10} end={28} duration={2}/>
                                          <span className='orangeText'> +</span>
                                          <br />
                                          <span className='secondaryText'>Award Winning</span>
                                   </span>
                            </div>
                            
                     </div>
       </div>
       <div className='flexCenter hero-right'>
                     <div className='image-container'>
                            <img src='./hero-image.png' alt=""></img>
                     </div>
              </div>
    </section>
  )
}

export default Hero