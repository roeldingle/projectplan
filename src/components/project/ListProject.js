import React from 'react';

import SummaryProject from './SummaryProject';

const ListProject = ({projects}) => {
  return (
    <div className="project-list section">
      {projects && projects.map(project => {
        return(
          <SummaryProject project={project} key={project.id} />
        )
      })}
    </div>
  )
}

export default ListProject;
