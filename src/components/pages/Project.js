import React, { Component } from 'react';

import Notification from './Notification';
import ListProject from '../project/ListProject';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

class Project extends Component{

  render(){
    const { projects, auth } = this.props;
    /*route protect if not loggedin*/
    if(!auth.uid) return <Redirect to='/signin' />

    return(
      <div className="dashboard container">
        <div className="row">
          <div className="col s12">
            <p className="section">
            <NavLink className="waves-effect waves-light btn red btn-add" to='/create/project'>+ Project</NavLink>
            </p>
            <ListProject projects={projects} />
          </div>
        </div>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth
  }
}

export default compose(
 connect(mapStateToProps),
 firestoreConnect([
   { collection: 'projects' }
 ])
)(Project);
