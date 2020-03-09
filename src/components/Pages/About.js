import React, {Component} from 'react';

import work1 from '../assets/about/bath.jpg';
import work2 from '../assets/about/fence.jpg';
import logo from '../assets/about/logo.png';
import work3 from '../assets/about/paint.jpg';

class About extends Component {
  render(){
    return(
        <div>
          <section className="page-section" id="about">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 text-center mb-5">
                  <h2 className="section-heading text-uppercase">About</h2>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <ul className="timeline">
                    <li>
                      <div className="timeline-image">
                        <img className="rounded-circle img-fluid" src={work1} alt=""/>
                      </div>
                      <div className="timeline-panel">
                        <div className="timeline-heading">
                          <h4>June 2019</h4>
                          <h4 className="subheading">Complete bathroom tiling</h4>
                        </div>
                        <div className="timeline-body">
                          <p className="text-muted">An honest worker with attention to detail who priorities the clients' needs and delivers upon the agreed timelines.</p>
                        </div>
                      </div>
                    </li>
                    <li className="timeline-inverted">
                      <div className="timeline-image">
                        <img className="rounded-circle img-fluid" src={work2} alt=""/>
                      </div>
                      <div className="timeline-panel">
                        <div className="timeline-heading">
                          <h4>September 2019</h4>
                          <h4 className="subheading">Fencing job</h4>
                        </div>
                        <div className="timeline-body">
                          <p className="text-muted">The jobs completed are expected to be of the highest standards such as full building, plumbing and heating services, Plastering, Tiling, Kitchen/Bathroom Fitting </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="timeline-image">
                        <img className="rounded-circle img-fluid" src={logo} alt=""/>
                      </div>
                      <div className="timeline-panel">
                        <div className="timeline-heading">
                          <h4>December 2019</h4>
                          <h4 className="subheading">Transition to Full Service</h4>
                        </div>
                        <div className="timeline-body">
                          <p className="text-muted">A reliable contractor with 25 years of experience within the construction industry.
                    Available for small and larger projects as well offering free quotation services.</p>
                        </div>
                      </div>
                    </li>
                    <li className="timeline-inverted">
                      <div className="timeline-image">
                        <img className="rounded-circle img-fluid" src={work3} alt=""/>
                      </div>
                      <div className="timeline-panel">
                        <div className="timeline-heading">
                          <h4>January 2020</h4>
                          <h4 className="subheading">Paint job</h4>
                        </div>
                        <div className="timeline-body">
                          <p className="text-muted">Please see the images and feedback's  of several completed works.</p>
                        </div>
                      </div>
                    </li>
                    <li className="timeline-inverted">
                      <div className="timeline-image">
                        <h4>Be Part
                        <br />Of Our
                        <br />Story!</h4>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      )
  }
}

export default About;
