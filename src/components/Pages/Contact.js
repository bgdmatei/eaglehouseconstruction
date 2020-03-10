import React, {Component} from 'react';

class Contact extends Component {
  render(){
    return(
      <section className="page-section bg-black" id="contact">

        <div className="container">

          <div className="row">
            <div className="col-lg-12 text-center mb-5">
              <h2 className="section-heading text-uppercase">Contact</h2>
            </div>
            <div className="col-md-4 mb-3 mb-md-0">
              <div className="card py-4 h-100">
                <div className="card-body text-center">
                  <i className="fas fa-map-marked-alt text-primary mb-2"></i>
                  <h4 className="text-uppercase m-0">Address</h4>
                  <hr className="my-4" />
                  <div className="medium text-black-50">4 Goaring Road, London, United Kingdom</div>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-3 mb-md-0">
              <div className="card py-4 h-100">
                <div className="card-body text-center">
                  <i className="fas fa-envelope text-primary mb-2"></i>
                  <h4 className="text-uppercase m-0">Email</h4>
                  <hr className="my-4" />
                  <div className="medium email text-black-50">
                    <a href="mailto:eaglepaintingandhandyman@gmail.com">eaglepaintingandhandyman@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-3 mb-md-0">
              <div className="card py-4 h-100">
                <div className="card-body text-center">
                  <i className="fas fa-mobile-alt text-primary mb-2"></i>
                  <h4 className="text-uppercase m-0">Phone</h4>
                  <hr className="my-4" />
                  <div className="medium text-black-50">+44 7543 728 591</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      )
  }
}

export default Contact;
