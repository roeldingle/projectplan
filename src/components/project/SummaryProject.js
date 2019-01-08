import React from 'react';
import { Link } from 'react-router-dom';

const SummaryProject = ({project}) => {
  return (
      <div className="card z-depth-0 project-summary">
        <div className="card-content grey-text text-darken-3">
          <span className="card-title">
          <Link to="/project/{{id}}">{project.title}</Link>
          </span>
          <p>Posted by Roel</p>
          <p className="grey-text">December 20, 2018</p>
        </div>
      </div>
  )
}

export default SummaryProject;
