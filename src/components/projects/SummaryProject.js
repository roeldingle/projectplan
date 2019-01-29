import React from 'react';
import { Link } from 'react-router-dom';

const SummaryProject = ({project}) => {
  return (

    <tr>
      <td>1</td>
      <td>{project.authorFname} {project.authorLname}</td>
      <td><Link to={'/projects/' + project.id}>{project.title}</Link></td>
      <td>{project.createdAt ? project.createdAt.toDate().toDateString() +' '+ project.createdAt.toDate().toLocaleTimeString('en-US') : null}</td>
    </tr>

  )
}

export default SummaryProject;
