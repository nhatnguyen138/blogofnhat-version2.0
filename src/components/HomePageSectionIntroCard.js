import React from 'react'
import { Link } from 'react-router-dom'

export default function HomePageSectionIntroCard(props) {
          const {id,title,description} = props
          return (
                    <Link to={`/${id}`}>
                              <div className="SectionIntro">
                                        <div className="Text">
                                                  <h2 className="Title">{title}</h2>
                                                  <div className="Description">{description}</div>
                                        </div>
                                        <img loading="lazy" className="Image" src={require(`../media/blogofnhat/webphotos/${id}.jpg`)} alt={id} /> 
                              </div>
                    </Link>
          )
}