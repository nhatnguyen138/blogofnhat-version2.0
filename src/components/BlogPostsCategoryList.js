import React from 'react'

import MetaTags from './DefaultMetaTags'

import BlogPostsPostCard from './BlogPostsPostCard'

import CategoriesData from '../data/blogofnhat/blogposts/categories.json'

export default function BlogPostsCategoryList(i) {
          const title = "Category: " + CategoriesData.category[i].name
          const posts = []
          if (CategoriesData.category[i].count>0)
                    for (let j=CategoriesData.category[i].count-1; j>=0; j--)
                              posts.push(<BlogPostsPostCard i={CategoriesData.category[i].posts[j]}/>)
                    
          return(
                    <div id="BlogPosts" onLoad={window.scrollTo(0,0)}>
                              <MetaTags
                                        section ={ title + " | Blogposts"}
                                        description = {title}
                                        image = "http://blogofnh.at/media/blogofnhat/logos/blogofnhat-logo.png"
                                        url = {`http://blogofnh.at/blogposts/category/${CategoriesData.category[i].id}`}
                              />
                              <h1 className="PageTitle">{title}</h1>
                              <div className="PageDescription">{CategoriesData.category[i].description}</div>
                              {posts}
                    </div>
          )
}