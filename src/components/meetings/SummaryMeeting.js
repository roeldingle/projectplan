import React from 'react';
import { Link } from 'react-router-dom';

const SummaryMeeting = ({meeting}) => {
  return (

    <tr>
      <td>1</td>
      <td><Link to={'/meetings/' + meeting.id}>{meeting.title}</Link></td>
      <td>{meeting.createdAt ? meeting.createdAt.toDate().toDateString() +' '+ meeting.createdAt.toDate().toLocaleTimeString('en-US') : null}</td>
      <td>Delete</td>
    </tr>

  )
}

export default SummaryMeeting;
