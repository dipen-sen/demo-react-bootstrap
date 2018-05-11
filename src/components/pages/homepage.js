import React, { Component } from 'react';
import Carousel from '../carousel/carousel';
import homeVideo from '../../assets/videos/LOGO.mp4'
import HomePageCarousel from '../carousel/carousel';

class Homepage extends Component {
  render() {
    return (
      <div className="homepage">
        HomePage Content Goes here.
        <div>
          <HomePageCarousel />
        </div>
      </div>
    );
  }
}

export default Homepage;