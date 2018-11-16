import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import KegsList from './KegsList';
import Admin from './Admin';
import Footer from './Footer';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      
    }
  }

  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={KegsList} />
          <Route exact path='/admin' component={Admin} />
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default App;
