import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { updateProject } from '../../store/actions/projectAction';
import { Redirect } from 'react-router-dom';
import SideMenu from '../layout/SideMenu';


class UpdateProject extends Component{

  constructor(props) {
    super(props);
    this.state = {
      id: props.match.params.id,
      title: '',
      description: ''
    };
  }


  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });

  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.updateProject(this.state);
    this.props.history.push('/projects');
  }

  backToMain = (e) => {
    e.preventDefault();
    this.props.history.push('/projects');
  }

  render(){
    /*route protect if not loggedin*/
    const { project, auth }  = this.props;

    if(!auth.uid) return <Redirect to='/signin' />

    const links = [
      {label: '< Back', url: '/projects'}
    ];

    if(project){


    return(
      <div className="main-content">
        <div className="row">
          <h3 className="header">Update Project</h3>
          <div className="col s3">
            <SideMenu links={links}/>
          </div>
          <div className="col s9">
            <form onSubmit={this.handleSubmit} className="white">
              <div className="input-field">
                <input type="text" id="id" value={this.state.id} />
              </div>
              <div className="input-field">
                <input type="text" id="title" defaultValue={project.title} onChange={this.handleChange} />
              </div>
              <div className="input-field">
                <textarea className="materialize-textarea" id="description" defaultValue={project.description} onChange={this.handleChange}></textarea>
              </div>
              <div className="input-field right-align">
                <button className="btn pink lighten-1 z-depth-0">Save</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
      }else{
        return (
          <div className="container section">
            <p>Loading project...</p>
          </div>
        )

      }
  }

}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;
  return {
    project: {
      id: id,
      title: project.title,
      description: project.description,
      ...project
    },
    auth: state.firebase.auth,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateProject: (project) => dispatch(updateProject(project))
  }
}

export default compose(connect(mapStateToProps, mapDispatchToProps),
firestoreConnect([
  { collection: 'projects' }
])
)(UpdateProject);
