import React from 'react'
import {
  Redirect,
  useParams
} from 'react-router-dom'

import BlogPostsCategoryPage  from '../pages/BlogPostsCategoryPage'

import CategoriesData from '../data/blogofnhat/blogposts/categories.json'

export default function BlogPostsCategoryRoute() {
  let {categoryID} = useParams()
  for (let i=0; i<=CategoriesData.total-1; i++) {
    if (categoryID===CategoriesData.category[i].id)
      return <BlogPostsCategoryPage section={"category"} i={i} />
  }
  return <Redirect to="/blogposts" />
}