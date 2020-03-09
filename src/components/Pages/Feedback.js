import React, {Component} from 'react';
import FeedbackPost from '../Common/FeedbackPost';

const feedbacks = [
  {name: 'John Bates', description: '"I am not usually one for reviews but I have to say these guys were excellent. I trusted them with access to my flat in London for some urgent work and they were professional, honest and delivered as promised."'},
  {name: 'Mark Burns', description: '"Quick, reliable and top quality job. We are very happy with the completed job."'},
  {name: 'Steve Watts', description: '"Very impressed with this company.Attended and completed the job all in one day. Very friendly, reliable and the quality of the finish is excellent. Would highly recommend."'}
];

class Feedback extends Component {
  render() {
    return(
        <section className=" page-section" id="feedback">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading text-uppercase">Feedback</h2>
              </div>
            </div>
          </div>

          <div className="row p-5">
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
