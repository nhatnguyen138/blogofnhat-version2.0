import React from 'react'
import { Link } from 'react-router-dom'

export default function GetPostTagNames(data,id) {
          for (let i=0; i<data.total; i++) {
                    if (data.tag[i].id===id)
                              return (
                                        <div className="TagName">
                                                  <Link to={`/blogposts/tag/${id}`}>
                                                            &#35;{data.tag[i].name}
                                                  </Link>
                                        </div>
                              )
          }
}