import React from 'react'
import { Link } from 'react-router-dom'

import GetPostDate from './FunctionGetPostDate'

import GalleryData from '../data/blogofnhat/gallery/gallery.json'

export default function GalleryList() {
          const posts = []
          const GalleryPost = GalleryData.project.map((post,i) => {
                    return (
                              <div className="GalleryPost" key={i}>
                                        <div className="PostDetails">
                                                  <div className="Title">{post.title}</div>
                                                  <div className="PublishedDate">Created on {GetPostDate(post.published_date)} ({post.total} photos)</div>
                                                  <div className="Description">{post.excerpt}</div>
                                        </div>
                                        <div className="Images">
                                                  <div className="img1">
                                                            <Link to={`/gallery/${post.id}/1`}>
                                                                      <img loading="lazy" src={require(`../media/blogofnhat/gallery/${post.pictures[0]}`)} alt={post.pictures[0]} />
                                                            </Link>
                                                  </div>
                                                  <div className="img2">
                                                            <Link to={`/gallery/${post.id}/2`}>
                                                                      <img loading="lazy" src={require(`../media/blogofnhat/gallery/${post.pictures[1]}`)} alt={post.pictures[1]} />
                                                            </Link>
                                                  </div>
                                                  <div className="img3">
                                                            <Link to={`/gallery/${post.id}/3`}>
                                                                      <img loading="lazy" src={require(`../media/blogofnhat/gallery/${post.pictures[2]}`)} alt={post.pictures[2]} />
                                                            </Link>
                                                  </div>
                                                  <div className="img4">
                                                            <Link to={`/gallery/${post.id}/4`}>
                                                                      <img loading="lazy" src={require(`../media/blogofnhat/gallery/${post.pictures[3]}`)} alt={post.pictures[3]} />
                                                            </Link>
                                                  </div>
                                                  <div className="img5">
                                                            <Link to={`/gallery/${post.id}/5`}>
                                                                      <img loading="lazy" src={require(`../media/blogofnhat/gallery/${post.pictures[4]}`)} alt={post.pictures[4]} />
                                                            </Link>
                                                  </div>
                                        </div>
                              </div>
                    )
          })
          for (let i=1; i<=GalleryData.total; i++) {
                    posts.push(GalleryPost[GalleryData.total-i])
          }
          return <div id="GalleryPosts">{posts}</div>
}