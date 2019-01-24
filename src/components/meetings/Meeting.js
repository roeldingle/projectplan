import React, { Component } from 'react';

import SideMenu from '../layout/SideMenu';
import ListMeeting from '../meetings/ListMeeting';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

class Meeting extends Component{

  render(){
    const { meetings, auth } = this.props;
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
      {label: '+ Create', url: '/create/meeting'},
    ]

    return(
      <div className="main-content">
        <div className="row">
          <h3 className="header">Meetings</h3>
          <div className="col s3">
            <SideMenu links={links}/>
          </div>
          <div className="col s9">
            <ListMeeting meetings={meetings} />
          </div>

        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    meetings: state.firestore.ordered.meetings,
    auth: state.firebase.auth
  }
}

export default compose(
 connect(mapStateToProps),
 firestoreConnect([
   { collection: 'meetings', orderBy: ['createdAt','desc'] }
 ])
)(Meeting);
