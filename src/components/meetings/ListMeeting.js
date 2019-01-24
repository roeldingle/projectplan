import React from 'react';
import SummaryMeeting from './SummaryMeeting';


const ListMeeting = ({meetings}) => {
  return (
    <div className="meeting-list section">
    <table className="striped highlight">
      <thead>
        <tr>
            <th>#</th>
            <th style={{width:'50%'}}>Title</th>
            <th>Date created</th>
            <th>Action</th>
        </tr>
      </thead>
      <tbody>
      {meetings && meetings.map(meeting => {
        return(
              <SummaryMeeting meeting={meeting} key={meeting.id} />
          )
        })}
        </tbody>
      </table>
    </div>
  )
}

export default ListMeeting;
