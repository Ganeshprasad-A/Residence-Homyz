import React from 'react'
import './Header.css'
import {BiMenuAltRight} from 'react-icons/bi';
const Header = () => {
  return (
    <section className='h-wrapper'>
       <div className='flexCenter paddings innerWidth h-container'>
              <img src='./logo.png' alt='logo' width={100}></img>

              <div className="flexCenter h-menu">
                     <ul>
                            <li><a href="">Residencies</a></li>
                            <li><a href="">Contact us</a></li>
                            <li><a href="">Get Started</a></li>
                            <li><a href="">Our Value</a></li>
                     </ul>
                     <button className='button'>
                            <a href="">Contact</a>
                     </button>
              </div>
              {/* <div className="menu-icon">
                     <BiMenuAltRight size={30}/>
              </div> */}
       </div>
    </section>
  )
}

export default Header