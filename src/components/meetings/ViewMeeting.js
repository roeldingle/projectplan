import React from 'react';

import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import SideMenu from '../layout/SideMenu';


const ViewMeeting = (props) => {
  const { meeting, auth }  = props;

  if(!auth.uid) return <Redirect to='/signin' />

  const links = [
    {label: '< Back', url: '/meetings'},
  ]

  if(meeting){
    return (
      <div className="main-content">
        <div className="row">
          <h3 className="header">View Meeting</h3>
          <div className="col s3">
            <SideMenu links={links}/>
          </div>
          <div className="col s9">
            <div className="card z-depth-0">
              <div className="card-content">
                <span className="card-title">{meeting.title}</span>
                <p>{meeting.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }else{
    return (
      <div className="container section">
        <p>Loading meeting...</p>
      </div>
    )

  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const meetings = state.firestore.data.meetings;
  const meeting = meetings ? meetings[id] : null;
  return {
    meeting: meeting,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'meetings' }
  ])
)(ViewMeeting);
