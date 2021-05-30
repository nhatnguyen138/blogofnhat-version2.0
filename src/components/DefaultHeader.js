import React from 'react'
import { Link } from 'react-router-dom'

import Logo from '../media/blogofnhat/logos/blogofnhat-logo.png'

export default function Header() {
   return (
      <header>
         <Link to="/">
            <img id="HeaderLogo" src={Logo} alt="blogofnhat-logo" />
         </Link>
      </header>
   )
}