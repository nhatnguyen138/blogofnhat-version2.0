import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

import HomePage           from './pages'
import AboutMePage        from './pages/AboutMe'
import ProjectsMainPage   from './pages/ProjectsMainPage'
import BlogPostsMainPage  from './pages/BlogPostsMainPage'
import GalleryMainPage    from './pages/GalleryMainPage'
import NotFoundPage       from './pages/404'



export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/"         component={HomePage} />
          <Route path="/projects"       component={ProjectsMainPage} />
          <Route path="/blogposts"      component={BlogPostsMainPage} />
          <Route path="/gallery"        component={GalleryMainPage} />
          <Route exact path="/aboutme"  component={AboutMePage} />
          <Route exact path="/404"      component={NotFoundPage} />
          <Redirect to="/404" />
        </Switch>
      </Router>
    )
  }
}