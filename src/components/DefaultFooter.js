import React from 'react'

import FacebookIcon from '../media/blogofnhat/logos/facebook.svg'
import InstagramIcon from '../media/blogofnhat/logos/instagram.svg'
import LinkedInIcon from '../media/blogofnhat/logos/linkedin.svg'
import GitHubIcon from '../media/blogofnhat/logos/github.svg'

export default function Footer() {
   return (
      <footer>
         <div style={{float:"left"}}>
            <p>Blog of Nh.at</p>
            <p>Nhat K. "James" Nguyen &copy; 2021</p>
         </div>
         <div style={{float:"right"}}>
         <a href="https://www.facebook.com/jamesnguyen813/" target="_blank" rel="noopener noreferrer">
            <img className="SocialIcon" src={FacebookIcon} alt="Facebook"/>
         </a>
         <a href="https://www.instagram.com/jamesnguyen813/" target="_blank" rel="noopener noreferrer">
            <img className="SocialIcon" src={InstagramIcon} alt="Instagram"/>
         </a>
         <a href="https://www.linkedin.com/in/nhatkimnguyen130898/" target="_blank" rel="noopener noreferrer">
            <img className="SocialIcon" src={LinkedInIcon} alt="LinkedIn"/>
         </a>
         <a href="https://www.github.com/dicara138" target="_blank" rel="noopener noreferrer">
            <img className="SocialIcon" src={GitHubIcon} alt="GitHub"/>
         </a>
         </div>
      </footer>
   )
}