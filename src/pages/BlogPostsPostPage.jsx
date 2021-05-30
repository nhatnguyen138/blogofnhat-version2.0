import React from 'react'
import { Link } from 'react-router-dom'

import MetaTags from '../components/DefaultMetaTags'

import GetPostCategoryName from '../components/FunctionGetPostCategoryName'
import GetPostTagNames from '../components/FunctionGetPostTagNames'
import GetPostDate from '../components/FunctionGetPostDate'
import SeeOtherPost from '../components/FunctionSeeOtherPost'

import BlogPostsData from '../data/blogofnhat/blogposts/blogposts.json'
import CategoriesData from '../data/blogofnhat/blogposts/categories.json'
import TagsData from '../data/blogofnhat/blogposts/tags.json'

import '../styles/blogofnhat/_BlogPostsPostPage.scss'

export default function BlogPostsPostPage(props) {
          const {i} = props
          return (
                    <div id="BlogPosts" onLoad={window.scrollTo(0,0)}>
                              <MetaTags
                                        section = {BlogPostsData.blogpost[i].title + " | Blog Posts"}
                                        description = {BlogPostsData.blogpost[i].excerpt}
                                        image = {`http://blogofnh.at/media/blogofnhat/blogposts/${BlogPostsData.blogpost[i].picture}`}
                                        url = {`http://blogofnh.at/blogposts/${BlogPostsData.blogpost[i].id}`}
                              />
                              {BlogPost[i]}
                    </div>
          )
}


const BlogPost = BlogPostsData.blogpost.map((post,i, otherpost) => {
          const categoryID = BlogPostsData.blogpost[i].category

          const tagNames = []
          for (let j=0; j<TagsData.total; j++)
                    tagNames.push(GetPostTagNames(TagsData,post.tags[j]))

          const PrevNextPosts = []
          if (i>0)
                    PrevNextPosts.push(SeeOtherPost("blogposts",otherpost[i-1],"Previous"))
          if (i<BlogPostsData.total-1) 
                    PrevNextPosts.push(SeeOtherPost("blogposts",otherpost[i+1],"Next"))
          
          // Photoless Posts
          if (post.picture==="")
                    return    <div id="Post" key={i}>
                                        <div className="Category">
                                                  <div className="CategoryBtn">
                                                            <img className="CategoryImage" src={require(`../media/blogofnhat/logos/${categoryID}.svg`)} alt={post.category} />
                                                  </div>
                                                  <Link to={`/blogposts/category/${post.category}`}>
                                                            <div className="CategoryName">{GetPostCategoryName(CategoriesData,post.category)}</div>
                                                  </Link>
                                        </div>
                                        <div className="BlogPostDetails">
                                                  <div className="Title">{post.title}</div>
                                                  <div className="Date">Published on {GetPostDate(post.published_date)} by Nhat K. "James" Nguyen</div>
                                                  <div className="TagList">{tagNames}</div>
                                                  <div className="Content"><div dangerouslySetInnerHTML={{ __html: BlogPostsData.blogpost[i].content }} /></div>
                                                  <div className="PrevNextPosts">{PrevNextPosts}</div>
                                        </div>
                              </div>
          
          // Uncategorised Posts (ie. Blogposts/Prologue)
          else if (post.category==="")
                    return    <div id="Post" key={i}>
                                        <img className="BlogPostImage" src={require(`../media/blogofnhat/blogposts/${post.picture}`)} alt={post.id} />
                                        <div className="BlogPostDetails">
                                                  <div className="Title">{post.title}</div>
                                                  <div className="Date">Published on {GetPostDate(post.published_date)}  by Nhat K. "James" Nguyen</div>
                                                  <div className="TagList">{tagNames}</div>
                                                  <div className="Content"><div dangerouslySetInnerHTML={{ __html: BlogPostsData.blogpost[i].content }} /></div>
                                                  <div className="PrevNextPosts">{PrevNextPosts}</div>
                                        </div>
                              </div>
          
          // Normal Post (with image and category ID)
          else
                    return    <div id="Post" key={i}>
                                        <div className="Category">
                                                  <div className="CategoryBtn">
                                                            <img className="CategoryImage" src={require(`../media/blogofnhat/logos/${categoryID}.svg`)} alt={post.category} />
                                                  </div>
                                                  <Link to={`/blogposts/category/${post.category}`}>
                                                            <div className="CategoryName">{GetPostCategoryName(CategoriesData,post.category)}</div>
                                                  </Link>
                                        </div>
                                        <img className="BlogPostImage" src={require(`../media/blogofnhat/blogposts/${post.picture}`)} alt={post.id} />
                                        <div className="BlogPostDetails">
                                                  <div className="Title">{post.title}</div>
                                                  <div className="Date">Published on {GetPostDate(post.published_date)}  by Nhat K. "James" Nguyen</div>
                                                  <div className="TagList">{tagNames}</div>
                                                  <div className="Content"><div dangerouslySetInnerHTML={{ __html: BlogPostsData.blogpost[i].content }} /></div>
                                                  <div className="PrevNextPosts">{PrevNextPosts}</div>
                                        </div>
                              </div>
})