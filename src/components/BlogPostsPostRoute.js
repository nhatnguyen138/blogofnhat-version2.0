import React from 'react'
import {
 Redirect,
 useParams
} from 'react-router-dom'

import BlogPostsPostPage from '../pages/BlogPostsPostPage'

import BlogPostsData from '../data/blogofnhat/blogposts/blogposts.json'

export default function BlogPostsPostRoute() {
          let {ID} = useParams()
          for (let i=BlogPostsData.total-1; i>=0; i--) {
                    if (ID===BlogPostsData.blogpost[i].id)
                              return <BlogPostsPostPage i={i} />
          }
          return <Redirect to="/blogposts" />
}