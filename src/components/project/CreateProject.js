import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createProject } from '../../store/actions/projectAction';
import { Redirect } from 'react-router-dom';

import SideMenu from '../layout/SideMenu';


class CreateProject extends Component{
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
    this.props.createProject(this.state);
    this.props.history.push('/projects');
  }

  backToMain = (e) => {
    e.preventDefault();
    this.props.history.push('/projects');
  }

  render(){
    /*route protect if not loggedin*/
    const { auth } = this.props;
    if(!auth.uid) return <Redirect to='/signin' />

    const links = [
      {label: 'Back to projects', url: '/projects'}
    ];

    return(
      <div className="container">

        <div className="row">
          <h3 className="header">Create Project</h3>
          <div className="col s3">
            <SideMenu links={links}/>
          </div>
          <div className="col s9">
            <form onSubmit={this.handleSubmit} className="white">
              <div className="input-field">
                <label htmlFor="title">Project Title</label>
                <input type="text" id="title" onChange={this.handleChange} />
              </div>
              <div className="input-field">
                <label htmlFor="description">Description</label>
                <textarea className="materialize-textarea" id="description" onChange={this.handleChange}></textarea>
              </div>
              <div className="input-field right-align">
                <button className="btn pink lighten-1 z-depth-0">Create Project</button>
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
    createProject: (project) => dispatch(createProject(project))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);
