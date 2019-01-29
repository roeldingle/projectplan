import React, {Component} from 'react';

import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect, Link } from 'react-router-dom';
import SideMenu from '../layout/SideMenu';
import { deleteProject } from '../../store/actions/projectAction';

class ViewProject extends Component{
//const ViewProject = (props) => {
  handleDelete = () => {
    this.props.deleteProject(this.props.match.params.id);
    this.props.history.push('/projects');
  }

  render(){
    const { project, auth }  = this.props;

    if(!auth.uid) return <Redirect to='/signin' />

    const links = [
      {label: '< Back', url: '/projects'},
    ]

    if(project){
      return (
        <div className="main-content">
          <div className="row">
            <h3 className="header">View Project</h3>
            <div className="col s3">
              <SideMenu links={links}/>
            </div>
            <div className="col s9">
                <div className="card z-depth-0">
                  <div className="card-content">
                    <div className="card-title">{project.title}</div>
                    <p>{project.description}</p>
                  </div>
                  <div className="card-action lighten-4 grey-text">
                    <div>Posted by {project.authorFname} {project.authorLname}</div>
                    <div>December 20, 2018</div>
                  </div>
                  <div className="input-field right-align">
                  <button onClick={ this.handleDelete } style={{ marginLeft: '3px' }} className="right btn red lighten-1 z-depth-0">Delete</button>
                  <Link className="right btn blue lighten-1 z-depth-0" to={'/projects/' + this.props.match.params.id + '/edit'}>Edit</Link>
                  </div>

                </div>
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
    project: project,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteProject: (projectId) => dispatch(deleteProject(projectId))
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    { collection: 'projects' }
  ])
)(ViewProject);
