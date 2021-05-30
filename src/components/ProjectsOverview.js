import React from 'react'

import ProjectsOverviewImage from '../media/blogofnhat/projects/projects.jpg'

export default function ProjectsOverview() {
          return (
                    <div id="ProjectsOverview">
                              <h1 id="Title">Projects</h1>
                              <div id="Description">
                                        <p>Get to know all the projects that I have done, including the development of this website.</p>
                                        <p>The section includes posts that mention the development of the following projects and how they were progressed during their development.</p>
                              </div>
                              <img loading="lazy" src={ProjectsOverviewImage} alt="Projects Overview" />
                    </div>
          )
}