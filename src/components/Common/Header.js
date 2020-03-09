import React, {Component} from 'react';
import {Link} from 'react-scroll';

class Header extends Component {
  render() {
    return(
        <header className="masthead" style={{backgroundImage: `url(${this.props.image})`}}>
          <div className="container">
            <div className="intro-text">
              <div className="intro-lead-in">{this.props.title}</div>
              <div className="intro-heading text-uppercase">{this.props.subtitle1}</div>
              <div className="intro-heading text-uppercase">{this.props.subtitle2}</div>
              {this.props.showButton && <Link className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" smooth={true} to={this.props.link}>{this.props.buttonText}</Link>}

            </div>
          </div>
        </header>
      )
  }
}

export default Header;
