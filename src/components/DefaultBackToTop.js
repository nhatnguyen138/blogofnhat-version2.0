import React from 'react'
import { Link } from 'react-router-dom'

import Logo from '../media/blogofnhat/logos/blogofnhat-logo.png'

export default function BackToTop() {
   window.addEventListener('scroll', BackToTopScroll)
   return (
      <div id="BackToTop">
         <Link to="/">
            <img id="Logo" src={Logo} alt="Blog of Nhat"/>
         </Link>
         <div id="BackToTopBtn" onClick={BackToTopFunction}>Back to top &#9650;</div>
      </div>
   )
}

function BackToTopScroll() {
   const back_to_top = document.getElementById("BackToTop")
   if (document.body.scrollTop > 240 || document.documentElement.scrollTop > 240) {
      back_to_top.style.display = "block";
      back_to_top.style.animation = "BackToTop-Appear 0.6s";
   }
   else {
      back_to_top.style.display = "none"
   }
}

function BackToTopFunction() {
   window.scrollTo({top: 0, behavior: 'smooth'})
}