import React from 'react'

import HomePageCoverImage from '../media/blogofnhat/webphotos/blogofnhat-homepage-cover.png'

export default function HomePageCover() {
          return (
                    <div id="Cover">
                              <div id="CoverText">
                                        <h1 id="Title">Greetings!</h1>
                                        <div id="Description">Welcome to Blog of Nhat - the official collection of my past projects, blog posts and photographs.</div>
                              </div>
                              <img id="CoverImage" src={HomePageCoverImage} alt="homepage-cover" />
                    </div>
          )
}