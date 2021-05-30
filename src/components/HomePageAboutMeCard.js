import React from 'react'
import { Link } from 'react-router-dom'

import Avatar from '../media/blogofnhat/webphotos/blogofnhat-avatar.png'

export default function HomePageAboutMeCard() {
          return (
                    <div id="AboutMe">
                              <img id="AboutMeAvatar" src={Avatar} alt="avatar" />
                              <div id="AboutMeText">
                                        <h2 id="Title">About Me</h2>
                                        <div id="Description">My name is Nhat K. "James" Nguyen and I'm from Vietnam. I love UI/UX design, so I'm learning web development as one way to persue it (kind of).</div>
                                        <Link to="/aboutme"><div id="Button">More about me &gt;&gt;</div></Link>
                              </div>
                    </div>
          )
}