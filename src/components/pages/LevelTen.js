import React, { Component } from 'react';

import SideMenu from '../layout/SideMenu';
import ListProject from '../project/ListProject';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

class LevelTen extends Component{

  render(){
    const { projects, auth } = this.props;
    /*route protect if not loggedin*/
    if(!auth.uid) return <Redirect to='/signin' />

    // const links = [
    //   'Good News',
    //   'Scorecards',
    //   'Rocks',
    //   'Headlines',
    //   'IDS',
    //   'To-do',
    //   'People Analyzer',
    // ]

    const links = [
      {label: 'Create Level 10', url: '/create/level-10'},
    ]

    return(
      <div className="dashboard main-content">
        <div className="row">
          <h3 className="header">Level 10</h3>
          <div className="col s3">
            <SideMenu links={links}/>
          </div>
          <div className="col s9">
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
   { collection: 'projects', orderBy: ['createdAt','desc'] }
 ])
)(LevelTen);
