import React from 'react'
import { Link } from 'react-router-dom'

import MenuIcon from '../media/blogofnhat/logos/menu.svg'

export default function NavBar() {
   return (
      <div onLoad={NavBtnSelected}>
         <input type="checkbox" id="DisplayMenuCheck" />
         <label htmlFor="DisplayMenuCheck">
            <img id="MenuIcon" src={MenuIcon} alt="Menu"/>
         </label>
         <nav id="NavBar">
            <Link to="/">
               <div className="NavBtn">Home</div>
            </Link>
            <Link to="/projects">
               <div className="NavBtn">Projects</div>
            </Link>
            <Link to="/blogposts">
               <div className="NavBtn">Blog Posts</div>
            </Link>
            <Link to="/gallery">
               <div className="NavBtn">Gallery</div>
            </Link>
            <Link to="/aboutme">
               <div className="NavBtn">About Me</div>
            </Link>
         </nav>
      </div>
      )
}

function NavBtnSelected() {
   let path = window.location.pathname;
   if (path.includes("404")) {
      // Do nothing
   }
   else if (path.includes("projects"))
      document.getElementsByClassName("NavBtn")[1].className+= " Selected"
   else if (path.includes("blogposts"))
      document.getElementsByClassName("NavBtn")[2].className+= " Selected"
   else if (path.includes("gallery"))
      document.getElementsByClassName("NavBtn")[3].className+= " Selected"
   else if (path.includes("aboutme"))
      document.getElementsByClassName("NavBtn")[4].className+= " Selected"
   else
      document.getElementsByClassName("NavBtn")[0].className+= " Selected"
}