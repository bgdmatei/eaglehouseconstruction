import React, {Component} from 'react';
import Header from '../Common/Header';

import image from '../assets/img/banner.jpg';

import Services from '../Common/Services';


class Home extends Component {
  render() {
    return(
      <div>
        <Header
            title="Looking to upgrade your home?"
            subtitle="Welcome to Eagle House Construction"
            buttonText="Tell me more"
            link="/about"
            showButton={true}
            image={image}
          />
        <Services />
      </div>
      )
  }
}

export default Home;
