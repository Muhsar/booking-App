import React, { Component } from 'react'
import banner from '../symbol-banner.png'
class Home extends Component {
  render(){
    
    return (
      <div>
      <section>
      <div className="bg-title-sub-page bg-menu-page-02 ">
      <div className="parallax-banner" >
      <div className="content-banner">
          <div className="text-banner wow zoomIn">
              <h3>Welcome to MyBooking</h3>
              <h3 className="center">App</h3>
          </div>
          <div className="symbol-banner wow zoomIn" data-wow-delay="0.5s">
              <img alt="symbol" src={banner}/>
              <div className="line-symbol-banner wow fadeInLeftBig" id="short-line-left" data-wow-delay="0.5s"></div>
              <div className="line-symbol-banner wow fadeInLeftBig" id="long-line-left" data-wow-delay="0.5s"></div>
              <div className="line-symbol-banner wow fadeInRightBig" id="short-line-right" data-wow-delay="0.5s"></div>
              <div className="line-symbol-banner wow fadeInRightBig" id="long-line-right" data-wow-delay="0.5s"></div>
          </div>
      </div>
  </div>
      </div>
  </section>
      </div>
    )
  }
}


export default Home