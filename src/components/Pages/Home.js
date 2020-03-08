import React, {Component} from 'react';
import Header from '../Common/Header';

import image from '../assets/img/banner.jpg';

import Services from '../Common/Services';
import About from '../Pages/About'
import Gallery from '../Pages/Gallery';
import Feedback from '../Pages/Feedback';

class Home extends Component {
  render() {
    return(
      <div>
        <Header
            title="Looking to upgrade your home?"
            subtitle="Welcome to Eagle House Construction"
            buttonText="Get a free quote"
            link="/contact"
            showButton={true}
            image={image}
          />
        <Services />
        <About />
        <Gallery />
        <Feedback />
      </div>
      )
  }
}

export default Home;
