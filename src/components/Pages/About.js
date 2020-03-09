import React, {Component} from 'react';

import work from '../assets/about/about.jpg';
// import work2 from '../assets/about/fence.jpg';
// import logo from '../assets/about/logo.png';
// import work3 from '../assets/about/paint.jpg';

class About extends Component {
  render(){
    return(
        <div>
          <section className="page-section about-heading" id="about">
            <div className="container">
              <img className="img-fluid rounded about-heading-img mb-3 mb-lg-0" src={work} alt="" />
              <div className="about-heading-content">
                <div className="row">
                  <div className="col-xl-9 col-lg-10 mx-auto">
                    <div className="bg-faded rounded p-5">
                      <h2 className="section-heading mb-4">
                        <span className="section-heading-upper"></span>
                        <span className="section-heading-lower">About Us</span>
                      </h2>
                      <p>A reliable contractor with 25 years of experience within the construction industry. Available for small and larger projects as well offering free quotation services. An honest worker with attention to detail who priorities the clients' needs and delivers upon the agreed timelines.</p>
                      <p className="mb-0">The jobs completed are expected to be of the highest standards such as full building, plumbing and heating services, Plastering, Tiling, Kitchen/Bathroom Fitting.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )
  }
}

export default About;
