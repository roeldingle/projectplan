import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import NavBar from './components/layout/NavBar';
import Project from './components/pages/Project';
import ViewProject from './components/project/ViewProject';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateProject from './components/project/CreateProject';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar style={{ marginBottom: '50px'}}/>
          <Switch>
            <Route exact path='/project' component={ Project }></Route>
            <Route exact path='/project/:id' component={ ViewProject }></Route>
            <Route path='/signin' component={ SignIn }></Route>
            <Route path='/signup' component={ SignUp }></Route>
            <Route path='/create/project' component={ CreateProject }></Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
