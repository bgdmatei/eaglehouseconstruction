import React, {Component} from 'react';

class FeedbackPost extends Component {
  render(){
    return(
            <div className="col-sm-4">
              <div className="team-member">
                <h4 className="mb-3">{this.props.name}</h4>
                <p className="text-muted">{this.props.description}</p>
                <i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star"></i>
              </div>
            </div>
      )
  }
}

export default FeedbackPost;
