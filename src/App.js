import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import NavBar from './components/layout/NavBar';
import Dashboard from './components/pages/Dashboard';
import LevelTen from './components/pages/LevelTen';
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
            <Route exact path='/' component={ Dashboard }></Route>
            <Route exact path='/level-10' component={ LevelTen }></Route>
            <Route exact path='/projects' component={ Project }></Route>
            <Route exact path='/projects/:id' component={ ViewProject }></Route>
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
