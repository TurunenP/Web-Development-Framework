import React from 'react'
import "./Header.css"

function Header() {

    
    return (
        <div>
            {/* header */}

            <div class="topnav">

            <a class="active" href="#home"> <img className="img" src="./assets/logo.png" alt=""/></a>
           
            <a href="#about"><span className="small_text">Deriver to </span> <br/>Kenya</a>
         
   
            
       
            <div className="header_right">
                <a href="#contact"><span className="small_text">Hello ,User </span><br/>Account</a>
                <a href="#contact"><span className="small_text">Returns </span><br/> & Oders</a>
                <a href="#contact"> <i className="fa fa-cart-plus fa-2x"></i> Cart</a>
            </div>

            
            </div>
            
        </div>
    )
}

export default Header
