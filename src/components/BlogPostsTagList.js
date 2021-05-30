import React from 'react'

import MetaTags from './DefaultMetaTags'

import BlogPostsPostCard from './BlogPostsPostCard'

import TagsData from '../data/blogofnhat/blogposts/tags.json'

export default function BlogPostsTagList(i) {
          const title = "Tag: " + TagsData.tag[i].name
          const posts = []
          if (TagsData.tag[i].count>0)
                    for (let j=TagsData.tag[i].count-1; j>=0; j--)
                              posts.push(<BlogPostsPostCard i={TagsData.tag[i].posts[j]}/>)

          return(
                    <div id="BlogPosts" onLoad={window.scrollTo(0,0)}>
                              <MetaTags
                                        section = {title + " | Blog Posts"}
                                        description = {title}
                                        image = "http://blogofnh.at/media/blogofnhat/logos/blogofnhat-logo.png"
                                        url = {`http://blogofnh.at/blogposts/tag/${TagsData.tag[i].id}`}
                              />
                              <h1 className="PageTitle">{title}</h1>
                              <div className="PageDescription">{TagsData.tag[i].description}</div>
                              {posts}
                    </div>
          )
}