import React, {Component} from 'react';
import Header from '../Common/Header';

import image from '../assets/img/banner.jpg';

// Pages
import Services from '../Common/Services';
import About from '../Pages/About'
import Gallery from '../Pages/Gallery';
import Feedback from '../Pages/Feedback';
import Contact from '../Pages/Contact';

class Home extends Component {
  render() {
    return(
      <div>
        <Header
            title="Looking to upgrade your home?"
            subtitle1="Welcome to "
            subtitle2="Eagle House Construction"
            buttonText="Get a free quote"
            link="contact"
            showButton={true}
            image={image}
          />
        <Services />
        <About />
        <Gallery />
        <Feedback />
        <Contact />
      </div>
      )
  }
}

export default Home;
