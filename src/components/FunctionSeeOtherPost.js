import React from 'react'
import { Link } from 'react-router-dom'

export default function SeeOtherPost(section, id, type) {
          return ( 
                    <Link to={`/${section}/${id.id}`}>
                              <div className={`See${type}Post`}>
                                        <div className="top-text">{type} Entry: </div>
                                        <div className="bottom-text">{id.title}</div>
                              </div>
                    </Link>
          )
}