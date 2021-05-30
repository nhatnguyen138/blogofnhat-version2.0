import React from 'react'
import {
 Redirect,
 useParams
} from 'react-router-dom'

import ProjectsPostPage from '../pages/ProjectsPostPage'

import ProjectsData from '../data/blogofnhat/projects/projects.json'

export default function ProjectsPostRoute() {
          let {ID} = useParams()
          for (let i=ProjectsData.total-1; i>=0; i--) {
                    if (ID===ProjectsData.project[i].id)
                              return <ProjectsPostPage i={i} />
          }
          return <Redirect to="/projects" />
}