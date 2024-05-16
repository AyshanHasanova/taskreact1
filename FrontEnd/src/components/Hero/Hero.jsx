import React from 'react'
import './Hero.css'
import { Link } from 'react-router-dom'


const Hero = () => {
  return (
    <div className='hero'>
     <div className="hero-text">

        <h1>Wood $ cloth sofa</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, vel?</p>
        <button>Buy now</button>
     </div>
     <div className="hero-img">
        <Link>
        <img src="https://preview.colorlib.com/theme/aranoz/img/banner_img.png.webp" alt="" />
        </Link>
     </div>
    </div>
  )
}

export default Hero
