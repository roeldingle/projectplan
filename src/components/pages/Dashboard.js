import React, { Component } from 'react';
import Notification from './Notification';
import ListProject from '../project/ListProject';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

class Dashboard extends Component{

  render(){
    const { projects, auth } = this.props;
    /*route protect if not loggedin*/
    if(!auth.uid) return <Redirect to='/signin' />

    return(
      <div className="dashboard container">
        <div className="row">

          <div className="col s12 m6">
            Dashboard
          </div>
          <div className="col s12 m3">
            <Notification />
          </div>
          <div className="col s12 m3">

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
)(Dashboard);
