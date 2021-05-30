import React from 'react'
import {
  Switch,
  Route,
  useRouteMatch
} from 'react-router-dom'

import MetaTags from '../components/DefaultMetaTags'
import BackToTop from '../components/DefaultBackToTop'
import Header from '../components/DefaultHeader'
import NavBar from '../components/DefaultNavBar'
import Widgets from '../components/DefaultWidgets'
import Footer from '../components/DefaultFooter'

import BlogPostsSlideShow from '../components/BlogPostsSlideShow'
import BlogPostsList from '../components/BlogPostsList'
import BlogPostsCategoryRoute from '../components/BlogPostsCategoryRoute'
import BlogPostsTagRoute from '../components/BlogPostsTagRoute'
import BlogPostsPostRoute from '../components/BlogPostsPostRoute'

import '../styles/blogofnhat/_BlogPosts.scss'

export default function BlogPostsMainPage() {
  let {path} = useRouteMatch()
  return(
    <div id="Container" onLoad={window.scrollTo(0,0), DisplayBackToSectionButton}>
      <MetaTags
        section = "Blog Posts"
        description = "This includes the blog posts that I have written by either English or Vietnamese since I got into blogsites few years ago."
        image = "http://blogofnh.at/media/blogofnhat/logos/blogofnhat-logo.png"
        url = "http://blogofnh.at/blogposts"
      />
      <BackToTop />
      <Header />
      <NavBar />
      <main id="BlogPostsContainer">
        <Switch>
          <Route exact path={path}>
            <div id="BlogPostsOverview">
              <h1 id="Title">Blog Posts</h1>
              <BlogPostsSlideShow />
            </div>
            <BlogPostsList />
          </Route>
          <Route path={`${path}/category/:categoryID`} component={BlogPostsCategoryRoute} />
          <Route path={`${path}/tag/:tagID`} component={BlogPostsTagRoute} />
          <Route path={`${path}/:ID`} component={BlogPostsPostRoute} />
        </Switch>
        <Widgets
          path={path}
          sectionName={"Blog Posts"}
        />
      </main>
      <Footer />
    </div>
  )
}

function DisplayBackToSectionButton() {
  const back_to_section = document.getElementById("BackToSection")
  if (window.location.href!=="/blogposts" && window.location.pathname.includes("/blogposts/"))
    back_to_section.style.display = "block"
  else back_to_section.style.display = "none"
}