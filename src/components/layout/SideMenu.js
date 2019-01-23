import React from 'react';
import { Link } from 'react-router-dom';
import SignInLink from './SignInLink';
import SignOutLink from './SignOutLink';

import { connect } from 'react-redux';

const SideMenu = (props) => {

  const { auth, profile } = props;
  const links = props.links;
  return (
      <div>
        <ul className="section table-of-contents">
          {links.map(function(name, index){
            return <li><Link to={name.url} >{name.label}</Link></li>;
          })}
        </ul>
      </div>
  )
}

const mapStateToProps = (state) => {

  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(SideMenu);
