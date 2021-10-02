import React from 'react'
import "./header.css"

function Header() {
    return (
        <nav>
        <div className="menu-icon">
           <span class="fas fa-bars"></span>
        </div>
        <div class="logo">
            HELSINGIN SANOMAT
        </div>
       
        <div className="nav-items">
            <div className="nav-left">
           <li><a href="#">News</a></li>
           <li><a href="#">foliage</a></li>
           </div>
           <div className="nav-right">
           <li><a href="#">Room</a></li>
           <li><a href="#">Login</a></li>
           <li><a href="#">Hae</a></li>
           <li><a href="#">Menu</a></li>
           </div>
      
        </div>
       
     </nav>
   
      
    )
}

export default Header
