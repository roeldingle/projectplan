import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import NavBar from './components/layout/NavBar';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';

import Dashboard from './components/pages/Dashboard';

import Meeting from './components/meetings/Meeting';
import CreateMeeting from './components/meetings/CreateMeeting';
import ViewMeeting from './components/meetings/ViewMeeting';

import Project from './components/projects/Project';
import CreateProject from './components/projects/CreateProject';
import UpdateProject from './components/projects/UpdateProject';
import ViewProject from './components/projects/ViewProject';



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar style={{ marginBottom: '50px'}}/>
          <Switch>
            <Route exact path='/' component={ Dashboard }></Route>
            <Route exact path='/meetings' component={ Meeting }></Route>
            <Route path='/create/meeting' component={ CreateMeeting }></Route>
            <Route exact path='/meetings/:id' component={ ViewMeeting }></Route>
            <Route exact path='/projects' component={ Project }></Route>
            <Route exact path='/projects/:id' component={ ViewProject }></Route>
            <Route path='/signin' component={ SignIn }></Route>
            <Route path='/signup' component={ SignUp }></Route>
            <Route path='/create/project' component={ CreateProject }></Route>
            <Route path='/projects/:id/edit' component={ UpdateProject }></Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
