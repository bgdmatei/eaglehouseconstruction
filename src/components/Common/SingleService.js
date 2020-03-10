import React, {Component} from 'react';


class SingleService extends Component {
  render() {
    return(
        <div className="col-md-4">
          <span className="fa-stack icon fa-4x">
            <img src={this.props.icon} alt='' />
          </span>
          <h4 className="service-heading">{this.props.title}</h4>
          <p className="text-muted">{this.props.description}</p>
        </div>
      )
  }
}

export default SingleService;
