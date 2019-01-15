import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createProject } from '../../store/actions/projectAction';
import { Redirect } from 'react-router-dom';


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
    this.props.history.push('/project');
  }

  render(){
    /*route protect if not loggedin*/
    const { auth } = this.props;
    if(!auth.uid) return <Redirect to='/signin' />

    return(
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Create Project</h5>
          <br />
          <div className="input-field">
            <label htmlFor="title">Project Title</label>
            <input type="text" id="title" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="description">Description</label>
            <textarea className="materialize-textarea" id="description" onChange={this.handleChange}></textarea>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Create Project</button>
          </div>
        </form>
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
