import React from 'react'
import { Link } from 'react-router-dom'

import ProjectsData from '../data/blogofnhat/projects/projects.json'

export default function ProjectsList() {
          const posts = []
          const ProjectPost = ProjectsData.project.map((post,i) => {
                    return (
                              <div className="ProjectPost" key={i}>
                                        <img loading="lazy" src={require(`../media/blogofnhat/projects/${post.picture}`)} alt={post.id} />
                                        <Link to={`/projects/${post.id}`}>
                                                  <div className="PostDetails">
                                                            <div className="Title">{post.title}</div>
                                                            <div className="Description">{post.excerpt}</div>
                                                  </div>
                                        </Link> 
                              </div>
                    )
          })
          for (let i=1; i<=ProjectsData.total; i++) {
                    posts.push(ProjectPost[ProjectsData.total-i])
          }
          return <div id="ProjectsPosts">{posts}</div>
}