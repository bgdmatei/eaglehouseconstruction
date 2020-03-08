import React, {Component} from 'react';
import GalleryItem from '../Common/GalleryItem';

import img1 from '../assets/about/bath.jpg';
import img2 from '../assets/about/shower.jpg';
import img3 from '../assets/about/shower2.jpg';
import img4 from '../assets/about/showercabin.jpg';
import img5 from '../assets/about/bench.jpg';
import img6 from '../assets/about/bench2.jpg';
import img7 from '../assets/about/garden.jpg';
import img8 from '../assets/about/garden2.jpg';
import img9 from '../assets/about/garden3.jpg';
import img10 from '../assets/about/fence.jpg';
import img11 from '../assets/about/paint.jpg';

const gallery = [
  {image: img1},
  {image: img2},
  {image: img3},
  {image: img4},
  {image: img5},
  {image: img6},
  {image: img7},
  {image: img11},
  {image: img9},
  {image: img10},
  {image: img8},

];

class Gallery extends Component {
  render() {
    return(
      <section className="bg-light page-section" id="gallery">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Gallery</h2>
              <h3 className="section-subheading text-muted">Here are some of our works.</h3>
            </div>
          </div>
        <div className="row justify-content-center">
            {gallery.map((item, index) => {
              return <GalleryItem {...item} key={index} />
            })}
        </div>
      </div>
    </section>
      )
  }
}

export default Gallery;
