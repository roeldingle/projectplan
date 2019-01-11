import React from 'react';

import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';


const ViewProject = (props) => {
  const { project }  = props;

  if(project){
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{project.title}</span>
            <p>{project.description}</p>
          </div>
          <div className="card-action lighten-4 grey-text">
            <div>Posted by {project.authorFname} {project.authorLname}</div>
            <div>December 20, 2018</div>
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

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;
  return {
    project: project
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects' }
  ])
)(ViewProject);
