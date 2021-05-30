import React from 'react'
import {
 Link,
 Redirect,
 useParams
} from 'react-router-dom'

import GalleryData from '../data/blogofnhat/gallery/gallery.json'

export default function GalleryPostRoute() {
          let {ID, number} = useParams()
          console.log(typeof(number))
          for (let i=GalleryData.total-1; i>=0; i--) {
                    if (ID.includes(GalleryData.project[i].id)) {
                              if (!isNaN(number) && (parseInt(number,10)>=1 && parseInt(number,10)<=GalleryData.project[i].total))
                                        return (
                                                  <DisplayImage
                                                            name={GalleryData.project[i].title}
                                                            id={ID}
                                                            number={parseInt(number,10)}
                                                            total={GalleryData.project[i].total}
                                                  />
                                        )
                              else      return <Redirect to="/gallery" />
                    }
          }
          return <Redirect to="/gallery" />
}

function DisplayImage(props) {
          const {name,id,number,total} = props
          if (number===1) {
                    return (
                              <div id="ImageDisplayer">
                                        <Link to="/gallery"><div id="CloseDisplayer">X</div></Link>
                                        <img id="ImageDisplayed" src={require(`../media/blogofnhat/gallery/${id}-${number}.jpg`)} alt={id} />
                                        <Link to={`/gallery/${id}/${number+1}`}><div id="NextImage">&#10095;</div></Link>
                                        <div id="ImageNumber">{name} | {number}/{total}</div>
                              </div>
                    )
          }
          else if (number===total) {
                    return (
                              <div id="ImageDisplayer">
                                        <Link to="/gallery"><div id="CloseDisplayer">X</div></Link>
                                        <img id="ImageDisplayed" src={require(`../media/blogofnhat/gallery/${id}-${number}.jpg`)} alt={id} />
                                        <Link to={`/gallery/${id}/${number-1}`}><div id="PreviousImage">&#10094;</div></Link>
                                        <div id="ImageNumber">{name} | {number}/{total}</div>
                              </div>
                    )
          }
          else {
                    return (
                              <div id="ImageDisplayer">
                                        <Link to="/gallery"><div id="CloseDisplayer">X</div></Link>
                                        <img id="ImageDisplayed" src={require(`../media/blogofnhat/gallery/${id}-${number}.jpg`)} alt={id} />
                                        <Link to={`/gallery/${id}/${number-1}`}><div id="PreviousImage">&#10094;</div></Link>
                                        <Link to={`/gallery/${id}/${number+1}`}><div id="NextImage">&#10095;</div></Link>
                                        <div id="ImageNumber">{name} | {number}/{total}</div>
                              </div>
                    )
          }
}