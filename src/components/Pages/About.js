import React, {Component} from 'react';

import work1 from '../assets/about/bath.jpg';
import work2 from '../assets/about/fence.jpg';
import logo from '../assets/about/logo.jpg';
import work3 from '../assets/about/paint.jpg';

class About extends Component {
  render(){
    return(
        <div>
          <section className="page-section" id="about">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 text-center">
                  <h2 className="section-heading text-uppercase">About</h2>
                  <h3 className="section-subheading text-muted">Learn more about out how it all started.</h3>
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
                          <h4 className="subheading">Our Humble Beginnings</h4>
                        </div>
                        <div className="timeline-body">
                          <p className="text-muted">Our first job was a full bathroom retiling</p>
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
                          <h4 className="subheading">Our second job</h4>
                        </div>
                        <div className="timeline-body">
                          <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
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
                          <p className="text-muted">We decided to open our own company but also expanding out service list!</p>
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
                          <h4 className="subheading">Paint</h4>
                        </div>
                        <div className="timeline-body">
                          <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
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
