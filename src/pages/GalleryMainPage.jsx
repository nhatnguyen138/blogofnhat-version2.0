import React from 'react'
import {
  Switch,
  Route,
  Redirect,
  useRouteMatch
} from 'react-router-dom'

import MetaTags from '../components/DefaultMetaTags'
import BackToTop from '../components/DefaultBackToTop'
import Header from '../components/DefaultHeader'
import NavBar from '../components/DefaultNavBar'
import Widgets from '../components/DefaultWidgets'
import Footer from '../components/DefaultFooter'

import GalleryList from '../components/GalleryList'
import GalleryPostRoute from '../components/GalleryPostRoute'

import '../styles/blogofnhat/_Gallery.scss'

export default function GalleryMainPage() {
  let {path} = useRouteMatch()
  return(
    <div id="Container" onLoad={window.scrollTo(0,0)}>
      <MetaTags
        section = "Gallery"
        description = "See all of my pictures captured by my DSLR camera here, as photography is one of my favorites."
        image = "http://blogofnh.at/media/blogofnhat/logos/blogofnhat-logo.png"
        url = "http://blogofnh.at/gallery"
      />
      <BackToTop />
      <Header />
      <NavBar />
      <main id="GalleryContainer">
        <h1 id="SectionTitle">Gallery</h1>
        <GalleryList />
        <Widgets
          path={path}
          sectionName={"Gallery"}
        />
        <Switch>
          <Route path={`${path}/:ID/:number`} component={GalleryPostRoute} />
          <Redirect to={path} />
        </Switch>
      </main>
      <Footer />
    </div>
  )
}