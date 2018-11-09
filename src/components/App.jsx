import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import KegsList from './KegsList';
import Admin from './Admin';

function App(){
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={KegsList} />
        <Route exact path='/admin' component={Admin} />
      </Switch>
    </div>
  );
}

export default App;