import React, {Component} from 'react';
import SingleService from './SingleService';

import img1 from '../assets/services/log.png';
import img2 from '../assets/services/fence.png';
import img3 from '../assets/services/brick.png';
import img4 from '../assets/services/paint.png';
import img5 from '../assets/services/plumber.png';
import img6 from '../assets/services/handyman.png';

const services = [
  {title: 'Log cabin construction', description: 'Hey', icon: img1},
  {title: 'Fencing', description: 'yo', icon: img2},
  {title: 'Bricklayer', description: '', icon: img3},
  {title: 'Painting & Decorating Services', description: '', icon: img4},
  {title: 'Plumbing and heating service', description: '', icon: img5},
  {title: 'Handyman  ', description: '', icon: img6}
];

class Services extends Component {
  render() {
    return(
        <section className="page-section" id="services">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading text-uppercase">Services</h2>
                <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
              </div>
            </div>
            <div className="row text-center">
              {services.map((service, index) => {
                return <SingleService
                {...service}
                key={index} />
              })}

            </div>
          </div>
        </section>
      )
  }
}

export default Services;
