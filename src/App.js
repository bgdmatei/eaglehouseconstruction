import React, {Component} from 'react';
import PageWrapper from './components/PageWrapper';
import {BrowserRouter as Router, Route} from 'react-router-dom';


//Pages
import Home from './components/Pages/Home';

class App extends Component {
  render() {
    return (
      <div className="page-wrap">
        <Router>
          <PageWrapper>
            <Route
              exact={true}
              path="/"
              component={Home}
            />
          </PageWrapper>
        </Router>
      </div>
    );
  }
}

export default App;
