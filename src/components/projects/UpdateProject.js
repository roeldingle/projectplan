import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { updateProject } from '../../store/actions/projectAction';
import { Redirect } from 'react-router-dom';
import SideMenu from '../layout/SideMenu';


class UpdateProject extends Component{

  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      title: '',
      description: ''
    };
  }

  componentDidMount() {

    console.log(this.props);
    // this.setState({
    //   title: this.props.project.title,
    //   description: this.props.project.description,
    // })
  }


  // setData = (project) => {
  //
  //   this.setState({
  //     title: project.title,
  //     description: project.description,
  //   });
  //
  // }


  handleChange = (e) => {

    this.setState({
      [e.target.id]: e.target.value
    });

  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.updateProject(this.state);
    this.props.history.push('/projects');
  }

  backToMain = (e) => {
    e.preventDefault();
    this.props.history.push('/projects');
  }

  render(){
    /*route protect if not loggedin*/
    const { project, auth }  = this.props;
    const projectId = this.props.match.params.id;


    if(!auth.uid) return <Redirect to='/signin' />

    const links = [
      {label: '< Back', url: '/projects'}
    ];

    if(project){


    return(

      <div className="main-content">
        <div className="row">
          <h3 className="header">Update Project</h3>
          <div className="col s3">
            <SideMenu links={links}/>
          </div>
          <div className="col s9">
            <form onSubmit={this.handleSubmit} className="white">
              <div className="input-field">
                <input type="text" id="id" value={projectId} />
              </div>
              <div className="input-field">
                <label htmlFor="title">Project Title</label>
                <input type="text" id="title" value={this.state.title} onChange={this.handleChange} />
              </div>
              <div className="input-field">
                <label htmlFor="description">Description</label>
                <textarea className="materialize-textarea" id="description" value={project.description} onChange={this.handleChange}></textarea>
              </div>
              <div className="input-field right-align">
                <button className="btn pink lighten-1 z-depth-0">Save</button>
              </div>
            </form>
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

}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;

  return {
    project: project,
    auth: state.firebase.auth,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateProject: (project) => dispatch(updateProject(project))
  }
}

export default compose(connect(mapStateToProps, mapDispatchToProps),
firestoreConnect([
  { collection: 'projects' }
])
)(UpdateProject);
