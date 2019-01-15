import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/actions/authAction';



class SignUp extends Component{
  state = {
    email: '',
    password: '',
    fname: '',
    lname: ''
  }

  handleChange = (e) => {

    this.setState({
      [e.target.id]: e.target.value
    });

  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.state);
  }

  render(){

    const {auth, authError} = this.props;
    /*route protect if not loggedin*/
    if(auth.uid) return <Redirect to='/' />
    return(
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Sign Up</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="fname">First Name</label>
            <input type="text" id="fname" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="lname">Last Name</label>
            <input type="text" id="lname" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">SIGN UP</button>
            <div className="red-text center">
              { authError ? <p>{ authError }</p> : null }
            </div>
          </div>
        </form>
      </div>
    )
  }

}

const mapStateToProps = (state) =>{
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    signUp: (newUser) => dispatch(signUp(newUser))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
