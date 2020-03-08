import React, {Component} from 'react';
import FeedbackPost from '../Common/FeedbackPost';

const feedbacks = [
  {name: 'Mihai', description: 'foarte bun'},
  {name: 'Mihai', description: 'foarte bun'},
  {name: 'Mihai', description: 'foarte bun'}
];

class Feedback extends Component {
  render() {
    return(
        <section className=" page-section" id="feedback">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading text-uppercase">Feedback</h2>
                <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
              </div>
            </div>
          </div>

          <div className="row">
            {feedbacks.map((feedback, i) => {
              return <FeedbackPost
                        {...feedback} key={i}
              />
            })}
          </div>
        </section>
      )
  }
}

export default Feedback;
