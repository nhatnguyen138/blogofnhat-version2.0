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

import ProjectsOverview from '../components/ProjectsOverview'
import ProjectsList from '../components/ProjectsList'
import ProjectsPostRoute from '../components/ProjectsPostRoute'

import '../styles/blogofnhat/_Projects.scss'

export default function ProjectsMainPage() {
  let {path} = useRouteMatch()
  return (
    <div id="Container" onLoad={window.scrollTo(0,0), DisplayBackToSectionButton}>
      <MetaTags
        section = "Projects"
        description = "Get to know all the projects that I have done, including the development of this website."
        image = "http://blogofnh.at/media/blogofnhat/logos/blogofnhat-logo.png"
        url = "http://blogofnh.at/projects"
      />
      <BackToTop />
      <Header />
      <NavBar />
      <main id="ProjectsContainer">
        <Switch>
          <Route exact path={path}>
            <ProjectsOverview />
            <ProjectsList />
          </Route>
          <Route path={`${path}/:ID`} component={ProjectsPostRoute} />
          <Redirect to={path} />
        </Switch>
        <Widgets
          path={path}
          sectionName={"Projects"}
        />
      </main>
      <Footer />
    </div>
  )
}

function DisplayBackToSectionButton() {
  const back_to_section = document.getElementById("BackToSection")
  if (window.location.href!=="/projects" && window.location.pathname.includes("/projects/"))
    back_to_section.style.display = "block"
  else back_to_section.style.display = "none"
}