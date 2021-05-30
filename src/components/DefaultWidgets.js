import React from 'react'
import { Link } from 'react-router-dom'

import FacebookIcon from '../media/blogofnhat/logos/facebook.svg'
import InstagramIcon from '../media/blogofnhat/logos/instagram.svg'
import LinkedInIcon from '../media/blogofnhat/logos/linkedin.svg'
import GitHubIcon from '../media/blogofnhat/logos/github.svg'

export default function Widgets(props) {
          const {path, sectionName} = props
          return (
                    <div id="Widgets">
                              <Link to={path}>
                                        <div id="BackToSection">
                                                  &#9664; Back to {sectionName}
                                        </div>
                              </Link>
                              <div id="AboutMeWidget">
                                        <h2 id="Title">About Me</h2>
                                        <div id="Description">My name is Nhat K. "James" Nguyen and I'm from Vietnam. I love UI/UX design, so I'm learning web development as one way to persue it (kind of).</div>
                                        <Link to="/aboutme"><div id="Button">More about me &gt;&gt;</div></Link>
                                        <div id="Socials">
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
                              </div>
                    </div>
          )
}