import React, {Component} from 'react';


class GalleryItem extends Component {
  render() {
    return(
      <div className="col-md-5 col-sm-6 portfolio-item ">
        <div className="">
        </div>
        <img className="img-gallery" src={this.props.image} alt="" />
        <div className="portfolio-caption">
          <h4>{this.props.title}</h4>
          <p className="text-muted">{this.props.subtitle}</p>
        </div>
      </div>
      )
  }
}

export default GalleryItem;
