import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
   <>


   
    
        <nav> 

        <Link to={"/Home"}>
        <img src="https://preview.colorlib.com/theme/aranoz/img/logo.png" alt="" />
    </Link>
            <ul>
                <li><a href="#"></a>Home</li>
                <li><a href="#"></a>Shop<i class="fa-solid fa-caret-down"></i></li>
                <li><a href="#"></a>Pages<i class="fa-solid fa-caret-down"></i></li>
                <li><a href="#"></a>Blog<i class="fa-solid fa-caret-down"></i></li>
                <li><a href="#"></a>Contact</li>
            </ul>
            <div className="header-right">
   <i class="fa-solid fa-magnifying-glass"></i>
   <i class="fa-regular fa-heart"></i>
  <p> <i class="fa-solid fa-cart-plus"></i><sup>0</sup></p>
   </div>

        </nav>




  
   </>
  )
}

export default Header
