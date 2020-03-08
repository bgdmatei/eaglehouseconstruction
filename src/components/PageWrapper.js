import React, {Component} from 'react';
import {Link as Scroll} from 'react-scroll';
import {Link} from 'react-router-dom';

import logo from './assets/about/logo.jpg';

class PageWrapper extends Component {
  render() {
    return(
        <div>
          <nav className="navbar navbar-expand-lg navbar-dark " id="mainNav" >
            <div className="container">
              <img className="logo" src={logo } alt=""/>&nbsp;&nbsp;
              <Link className="navbar-brand js-scroll-trigger" to="/">Eagle House Construction</Link>
              <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                Menu
                <i className="fas fa-bars"></i>
              </button>
              <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav text-uppercase ml-auto" >

                  <li className="nav-item">
                    <Scroll className="nav-link js-scroll-trigger" smooth={true} to="services" >Services</Scroll>
                  </li>
                  <li className="nav-item">
                    <Scroll className="nav-link js-scroll-trigger" smooth={true} to="about" >About</Scroll>
                  </li>
                  <li className="nav-item">
                    <Scroll className="nav-link js-scroll-trigger" smooth={true} to="portfolio" >Gallery</Scroll>
                  </li>
                  <li className="nav-item">
                    <Scroll className="nav-link js-scroll-trigger" smooth={true} to="contact" >Contact</Scroll>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          {this.props.children}
        </div>
      )
  }
}

export default PageWrapper;
