import React from 'react'

import MetaTags from '../components/DefaultMetaTags'
import BackToTop from '../components/DefaultBackToTop'

import ProjectsData from '../data/blogofnhat/projects/projects.json'
import SeeOtherPost from '../components/FunctionSeeOtherPost'

import '../styles/blogofnhat/_ProjectsPostPage.scss'

export default function ProjectsPostPage(props) {
          const {i} = props
          return(
                    <div id="ProjectsPosts" onLoad={window.scrollTo(0,0)}>
                              <MetaTags
                                        section = {ProjectsData.project[i].title + " | Projects"}
                                        description = {ProjectsData.project[i].excerpt}
                                        image = {`http://blogofnh.at/media/blogofnhat/projects/${ProjectsData.project[i].picture}`}
                                        url = {`http://blogofnh.at/projects/${ProjectsData.project[i].id}`}
                              />
                              <BackToTop />
                              {ProjectPost[i]}
                    </div>
          )
}

const ProjectPost = ProjectsData.project.map((post,i,otherpost) => {
          const PrevNextPosts = []
          if (i>0)
                    PrevNextPosts.push(SeeOtherPost("projects",otherpost[i-1],"Previous"))
          if (i<ProjectsData.total-1) 
                    PrevNextPosts.push(SeeOtherPost("projects",otherpost[i+1],"Next"))

          return    <div id="Post" key={i}>
                              <img className="ProjectImage" src={require(`../media/blogofnhat/projects/${post.picture}`)} alt={post.id} />
                              <div className="ProjectDetails">
                                        <div className="Title">{post.title}</div>
                                        <div className="Excerpt">{post.excerpt}</div>
                                        <div className="Content"><div dangerouslySetInnerHTML={{ __html: ProjectsData.project[i].content }} /></div>
                                        <div className="PrevNextPosts">{PrevNextPosts}</div>
                              </div>
                    </div>
})