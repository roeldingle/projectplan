import React from 'react';
import SummaryProject from './SummaryProject';


const ListProject = ({projects}) => {
  return (
    <div className="project-list section">
    <table className="striped highlight">
      <thead>
        <tr>
            <th>#</th>
            <th>Author</th>
            <th style={{width:'50%'}}>Title</th>
            <th>Date created</th>
        </tr>
      </thead>
      <tbody>
      {projects && projects.map(project => {
        return(
              <SummaryProject project={project} key={project.id} />
          )
        })}
        </tbody>
      </table>
    </div>
  )
}

export default ListProject;
