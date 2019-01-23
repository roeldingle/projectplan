import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authAction';

const SignInLink = (props) => {
  return (
    <ul className="right">
      <li><NavLink to='/'>Dashboard</NavLink></li>
      <li><NavLink to='/level-10'>Level 10</NavLink></li>
      <li><NavLink to='/projects'>Projects</NavLink></li>
      <li><a href="#" onClick={props.signOut} >Log Out</a></li>
      <li><NavLink to='/' className='btn btn-floating pink lighten-1'>{props.profile.initials}</NavLink></li>
    </ul>
  )
}

const mapDispatchToProps = (dispatch) =>{
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignInLink);
