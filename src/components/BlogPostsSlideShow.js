import React from 'react'
import { Link } from 'react-router-dom'

import SlideShowImage1 from '../media/blogofnhat/blogposts/prologue.jpg'
import SlideShowImage2 from '../media/blogofnhat/blogposts/nam-thich-trang-that-day.jpg'
import SlideShowImage3 from '../media/blogofnhat/blogposts/cau-chuyen-ve-ban-sac-tieng-viet.jpg'

export default function BlogPostsSlideShow() {
          return (
                    <div id="BlogPostsSlideShow" onLoad={DisplaySlide}>
                              <Link to="/blogposts/prologue">
                                        <div className="Slide">
                                                  <img className="SlideImage" src={SlideShowImage1} alt="prologue" />
                                                  <div className="SlideTitle">
                                                            <div className="Featured"><span>FEATURED</span></div>
                                                            <div className="Text">Prologue</div>
                                                  </div>
                                        </div>
                              </Link>
                              <Link to="/blogposts/nam-thich-trang-that-day">
                                        <div className="Slide">
                                                  <img className="SlideImage" src={SlideShowImage2} alt="nam-thich-trang-that-day" />
                                                  <div className="SlideTitle">
                                                            <div className="Featured">
                                                                      <span>FEATURED</span>
                                                                      <span> | Short Stories | </span>
                                                                      <span style={{fontFamily: "Roboto Mono, sans-serif"}}>VI</span>
                                                            </div>
                                                            <div className="Text">'Nam thích Trang, thật đấy'</div>
                                                  </div>
                                        </div>
                              </Link>
                              <Link to={"/blogposts/cau-chuyen-ve-ban-sac-tieng-viet"}>
                                        <div className="Slide">
                                                  <img className="SlideImage" src={SlideShowImage3} alt="cau-chuyen-ve-ban-sac-tieng-viet" />
                                                  <div className="SlideTitle">
                                                            <div className="Featured">
                                                                      <span>FEATURED</span>
                                                                      <span> | Audacious Opinions | </span>
                                                                      <span style={{fontFamily: "Roboto Mono, sans-serif"}}>VI</span>
                                                            </div>
                                                            <div className="Text">Câu chuyện về bản sắc tiếng Việt</div>
                                                  </div>
                                        </div>
                              </Link>
                              <div id="prev" style={{float:"left"}} onClick={() => ChangeSlide(-1)}><div id="prev-text">&#10094; previous</div></div>
                              <div id="next" style={{float:"right"}} onClick={() => ChangeSlide(1)}><div id="next-text">next &#10095;</div></div>
                    </div>
          )
}


let slideIndex = 1
let slideLoop = setInterval(function() {ChangeSlide(1)},6000)

function DisplaySlide(n) {
          let i;
          let slides = document.getElementsByClassName("Slide")

          if (n>slides.length)
                    slideIndex = 1
          else if (n<1)
                    slideIndex = slides.length
          for (i=0;i<slides.length;i++)
                    if (i===slideIndex-1)
                              slides[i].style.display = "block"  
                    else slides[i].style.display = "none"
}

function ChangeSlide(n) {
          clearInterval(slideLoop)
          DisplaySlide(slideIndex+=n)
          slideLoop = setInterval(function() {ChangeSlide(1)},6000)
}