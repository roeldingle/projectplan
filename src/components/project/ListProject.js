import React from 'react';
import SummaryProject from './SummaryProject';
import { Link } from 'react-router-dom';

const ListProject = ({projects}) => {
  return (
    <div className="project-list section">
      {projects && projects.map(project => {
        return(
          <Link to={'/projects/' + project.id}>
            <SummaryProject project={project} key={project.id} />
          </Link>
        )
      })}
    </div>
  )
}

export default ListProject;
