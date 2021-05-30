import React from 'react'

import MetaTags from '../components/DefaultMetaTags'
import BackToTop from '../components/DefaultBackToTop'
import Header from '../components/DefaultHeader'
import NavBar from '../components/DefaultNavBar'
import Footer from '../components/DefaultFooter'

import '../styles/blogofnhat/_AboutMe.scss'

export default function NotFoundPage() {
          return(
                    <div id="Container" onLoad={window.scrollTo(0,0)}>
                              <MetaTags
                                        section = "404"
                                        description = "Oops! Page not found."
                                        image = "http://blogofnh.at/media/blogofnhat/logos/blogofnhat-logo.png"
                                        url = "http://blogofnh.at/404"
                              />
                              <BackToTop />
                              <Header />
                              <NavBar />
                              <main style={{width:"100vw",height:"90vh",lineHeight:"90vh",textAlign:"center"}}>
                                        Oops! Page not found.
                              </main>
                              <Footer />
                    </div>
          )
}