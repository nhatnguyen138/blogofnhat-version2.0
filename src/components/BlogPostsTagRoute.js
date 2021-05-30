import React from 'react'
import {
 Redirect,
 useParams
} from 'react-router-dom'

import BlogPostsCategoryPage from '../pages/BlogPostsCategoryPage'

import TagsData from '../data/blogofnhat/blogposts/tags.json'

export default function BlogPostsTagRoute() {
          let {tagID} = useParams()
          for (let i=0; i<=TagsData.total-1; i++) {
                    if (tagID===TagsData.tag[i].id)
                              return <BlogPostsCategoryPage section={"tag"} i={i} />
          }
          return <Redirect to="/blogposts" />
}