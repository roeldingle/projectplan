import React from 'react';


const ViewProject = (props) => {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>Lksiofjdshufsdufhsf dsfjopsf sdkflksfjs Lksiofjdshufsdufhsf dsfjopsf sdkflksfjsLksiofjdshufsdufhsf dsfjopsf sdkflksfjsLksiofjdshufsdufhsf dsfjopsf sdkflksfjsLksiofjdshufsdufhsf dsfjopsf sdkflksfjsLksiofjdshufsdufhsf dsfjopsf sdkflksfjs</p>
        </div>
        <div className="card-action lighten-4 grey-text">
          <div>Posted by Roel Dingle</div>
          <div>December 20, 2018</div>
        </div>
      </div>
    </div>
  )
}

export default ViewProject;
