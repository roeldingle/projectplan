import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createMeeting } from '../../store/actions/meetingAction';
import { Redirect } from 'react-router-dom';

import SideMenu from '../layout/SideMenu';


class CreateMeeting extends Component{
  state = {
    title: '',
    description: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createMeeting(this.state);
    this.props.history.push('/meetings');
  }

  backToMain = (e) => {
    e.preventDefault();
    this.props.history.push('/meetings');
  }

  render(){
    /*route protect if not loggedin*/
    const { auth } = this.props;
    if(!auth.uid) return <Redirect to='/signin' />

    const links = [
      {label: '< Back', url: '/meetings'}
    ];

    return(
      <div className="main-content">
        <div className="row">
          <h3 className="header">Create Meeting</h3>
          <div className="col s3">
            <SideMenu links={links}/>
          </div>
          <div className="col s9">
            <form onSubmit={this.handleSubmit} className="white">
              <div className="input-field">
                <label htmlFor="title">Title</label>
                <input type="text" id="title" onChange={this.handleChange} />
              </div>
              <div className="input-field">
                <label htmlFor="description">Description</label>
                <textarea className="materialize-textarea" id="description" onChange={this.handleChange}></textarea>
              </div>
              <div className="input-field right-align">
                <button className="btn pink lighten-1 z-depth-0">Save</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createMeeting: (meeting) => dispatch(createMeeting(meeting))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateMeeting);
