import React from 'react'

import MetaTags from '../components/DefaultMetaTags'
import BackToTop from '../components/DefaultBackToTop'
import Header from '../components/DefaultHeader'
import NavBar from '../components/DefaultNavBar'
import Footer from '../components/DefaultFooter'

import HomePageCover from'../components/HomePageCover'
import HomePageAboutMeCard from '../components/HomePageAboutMeCard'
import HomePageSectionIntroCard from '../components/HomePageSectionIntroCard'

import '../styles/blogofnhat/_Home.scss'

export default function HomePage() {
          return (
                    <div id="Container" onLoad={window.scrollTo(0,0)}>
                              <MetaTags
                                        section = ""
                                        description = "Welcome to Blog of Nhat!"
                                        image = "http://blogofnh.at/media/blogofnhat/logos/blogofnhat-logo.png"
                                        url = "http://blogofnh.at"
                              />
                              <BackToTop />
                              <Header />
                              <NavBar />
                              <main>
                                        <HomePageCover />
                                        <HomePageAboutMeCard />
                                        <HomePageSectionIntroCard
                                                  id = "projects"
                                                  title =  "Projects"
                                                  description = "Get to know all the projects that I have done, including the development of this website."
                                        />
                                        <HomePageSectionIntroCard
                                                  id = "blogposts"
                                                  title = "Blog Posts"
                                                  description = "This includes the blog posts that I have written by either English or Vietnamese since I got into blogsites few years ago."
                                        />
                                        <HomePageSectionIntroCard
                                                  id = "gallery"
                                                  title = "Gallery"
                                                  description = "See all of my pictures captured by my DSLR camera here, as photography is one of my favorites."
                                        />
                              </main>
                              <Footer />
                    </div>
          )
}