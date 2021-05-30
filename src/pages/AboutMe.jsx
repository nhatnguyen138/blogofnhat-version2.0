import React from 'react'
import { Link } from 'react-router-dom'

import MetaTags from '../components/DefaultMetaTags'
import BackToTop from '../components/DefaultBackToTop'
import Header from '../components/DefaultHeader'
import NavBar from '../components/DefaultNavBar'
import Footer from '../components/DefaultFooter'

import AboutMeCoverImage from '../media/blogofnhat/webphotos/blogofnhat-homepage-cover.png'
import HtmlLogo from '../media/blogofnhat/logos/1-html.png'
import CssLogo from '../media/blogofnhat/logos/2-css.png'
import JsLogo from '../media/blogofnhat/logos/3-js.png'
import ReactLogo from '../media/blogofnhat/logos/4-react.png'
import SassLogo from '../media/blogofnhat/logos/5-sass.png'
import TsLogo from '../media/blogofnhat/logos/6-typescript.png'
import PhpLogo from '../media/blogofnhat/logos/7-php.png'
import SqlLogo from '../media/blogofnhat/logos/8-mysql.png'
import NodeLogo from '../media/blogofnhat/logos/9-nodejs.png'
import CppLogo from '../media/blogofnhat/logos/10-cpp.png'
import LinuxLogo from '../media/blogofnhat/logos/11-linux.png'
import GithubLogo from '../media/blogofnhat/logos/12-github.png'
import FacebookIcon from '../media/blogofnhat/logos/facebook.svg'
import InstagramIcon from '../media/blogofnhat/logos/instagram.svg'
import LinkedInIcon from '../media/blogofnhat/logos/linkedin.svg'
import GitHubIcon from '../media/blogofnhat/logos/github.svg'

import '../styles/blogofnhat/_AboutMe.scss'

export default function AboutMePage() {
          return(
                    <div id="Container" onLoad={window.scrollTo(0,0)}>
                              <MetaTags
                                        section = "About Me"
                                        description = "Get to know more about me!"
                                        image = "http://blogofnh.at/media/blogofnhat/logos/blogofnhat-logo.png"
                                        url = "http://blogofnh.at/aboutme"
                              />
                              <BackToTop />
                              <Header />
                              <NavBar />
                              <main id="AboutMeContainer">
                                        <div id="AboutMeCover">
                                                  <h1 id="Title">About Me</h1>
                                                  <img id="CoverImage" src={AboutMeCoverImage} alt="aboutme-cover" />
                                        </div>
                                        <div id="AboutMeDescription">
                                                  <p><span id="FirstLetter">M</span>y name is Nhat K. "James" Nguyen and I'm from Vietnam. I am a bachelor's graduate in Computer Science since late 2019. After the graduation, I tried to find jobs and an ideal career path based on my degree and it turned out that I really like web design. I love designing UI/UX for website, yet I also like being the one tailoring all the pieces of the web components together. Thus, I'm learning web development as one way to persue my current passion.</p>
                                                  <p>During the years in uni, I have experience developing some web applications; however, back then I only programmed the back-end code or the requirements were not heavily focused on the front-end and the design, so my joy of web design hasn't been built until recently. This website 'Blog of Nhat' is the first website which I designed and programmed both front-end and back-end from start to finish.</p>
                                                  <p>Thank you for visiting 'Blog of Nhat'. I hope you will find something meaningful within the website.</p>
                                        </div>
                                        <div id="AboutMeMySkills">
                                                  <div id="Title">Skills</div>
                                                  <div id="Description">These are the skills I've gained from my university years as well as my experience throughout my past projects.</div>
                                                  <div id="SkillLogos">
                                                            <img className="Logos" src={HtmlLogo} alt="html" />
                                                            <img className="Logos" src={CssLogo} alt="css" />
                                                            <img className="Logos" src={JsLogo} alt="js" />
                                                            <img className="Logos" src={ReactLogo} alt="react" />
                                                            <img className="Logos" src={SassLogo} alt="sass" />
                                                            <img className="Logos" src={TsLogo} alt="ts" />
                                                            <img className="Logos" src={PhpLogo} alt="php" />
                                                            <img className="Logos" src={SqlLogo} alt="sql" />
                                                            <img className="Logos" src={NodeLogo} alt="node" />
                                                            <img className="Logos" src={CppLogo} alt="cpp" />
                                                            <img className="Logos" src={LinuxLogo} alt="linux" />
                                                            <img className="Logos" src={GithubLogo} alt="github" />
                                                  </div>
                                        </div>
                                        <div id="AboutMeMyProjects">
                                                  <div id="Title">My Work</div>
                                                  <div id="Description">You can take a look at the website to see how I'm capable of making in terms of front-end web development; you can also check out my other work which I will put on the <Link to="/projects">Projects</Link> section.</div>
                                        </div>
                                        <div id="AboutMeContact">
                                                  <div id="Title">Contact</div>
                                                  <div id="Description">You can email me via <span style={{fontWeight:"bold"}}>kimnhat98@gmail.com</span> or you can find me on my socials.</div>
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
                              </main>
                              <Footer />
                    </div>
          )
}