import React, {Component} from 'react';
import GalleryItem from '../Common/GalleryItem';

import img1 from '../assets/about/bath.jpg';

const gallery = [
  {image: img1},

];

class Gallery extends Component {
  render() {
    return(
      <section className="bg-light page-section" id="gallery">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Portfolio</h2>
              <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
            </div>
          </div>
        <div className="row">
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
