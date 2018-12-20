import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import NavBar from './components/layout/NavBar';
import Dashboard from './components/dashboard/Dashboard';
import ViewProject from './components/project/ViewProject';
import SignIn from './components/auth/SignIn';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path='/' component={ Dashboard }></Route>
            <Route path='/project/:id' component={ ViewProject }></Route>
            <Route path='/signin' component={ SignIn }></Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
