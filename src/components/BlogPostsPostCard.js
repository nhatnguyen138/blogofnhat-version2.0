import React from 'react'
import { Link } from 'react-router-dom'

import GetPostCategoryName from '../components/FunctionGetPostCategoryName'
import GetPostDate from '../components/FunctionGetPostDate'

import BlogPostsData from '../data/blogofnhat/blogposts/blogposts.json'
import CategoriesData from '../data/blogofnhat/blogposts/categories.json'

export default function BlogPostsPostCard(props) {
          let {i} = props
          const categoryID = BlogPostsData.blogpost[i].category

          const BlogPost = BlogPostsData.blogpost.map((post,i) => {
                    if (post.picture==="")
                              return    <div className="BlogPost" key={i}>
                                                  <Link to={`/blogposts/category/${post.category}`}>
                                                            <div className="Category">
                                                                      <div className="CategoryBtn">
                                                                                <img className="CategoryImage" src={require(`../media/blogofnhat/logos/${categoryID}.svg`)} alt={post.category} />
                                                                      </div>
                                                                      <div className="CategoryName">{GetPostCategoryName(CategoriesData,post.category)}</div>
                                                            </div>
                                                  </Link>
                                                  <div className="BlogPostDetails">
                                                            <Link to={`/blogposts/${post.id}`}>
                                                                      <div className="Title">{post.title}</div>
                                                            </Link>
                                                            <div className="Date">Published on {GetPostDate(post.published_date)}</div>
                                                            <div className="Excerpt">{post.excerpt}</div>
                                                  </div>
                                        </div>
                    else      return    <div className="BlogPost" key={i}>
                                                  <Link to={`/blogposts/category/${post.category}`}>
                                                            <div className="Category">
                                                                      <div className="CategoryBtn">
                                                                                <img className="CategoryImage" src={require(`../media/blogofnhat/logos/${categoryID}.svg`)} alt={post.category} />
                                                                      </div>
                                                                      <div className="CategoryName">{GetPostCategoryName(CategoriesData,post.category)}</div>
                                                            </div>
                                                  </Link>
                                                  <img loading="lazy" className="BlogPostImage" src={require(`../media/blogofnhat/blogposts/${post.picture}`)} alt={post.id} />
                                                  <div className="BlogPostDetails">
                                                            <Link to={`/blogposts/${post.id}`}>
                                                                      <div className="Title">{post.title}</div>
                                                            </Link>
                                                            <div className="Date">Published on {GetPostDate(post.published_date)}</div>
                                                            <div className="Excerpt">{post.excerpt}</div>
                                                  </div>
                                        </div>
          })
          return (BlogPost[i])
}