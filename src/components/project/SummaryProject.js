import React from 'react';

const SummaryProject = ({project}) => {
  return (
      <div className="card z-depth-0 project-summary">
        <div className="card-content grey-text text-darken-3">
          <span className="card-title">
          {project.title}
          </span>
          <p>Posted by {project.authorFname} {project.authorLname}</p>
          <p className="grey-text">{project.createdAt ? project.createdAt.toDate().toDateString() +' '+ project.createdAt.toDate().toLocaleTimeString('en-US') : null}</p>
        </div>
      </div>
  )
}

export default SummaryProject;
