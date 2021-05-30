import React from 'react'

import BlogPostsPostCard from './BlogPostsPostCard'

import BlogPostsData from '../data/blogofnhat/blogposts/blogposts.json'

export default function BlogPostsList() {
          const posts = []
          for (let i=1; i<=BlogPostsData.total-1; i++) {
                    posts.push(<BlogPostsPostCard i={BlogPostsData.total-i} />)
          }
          return <div id="BlogPosts">{posts}</div>
}