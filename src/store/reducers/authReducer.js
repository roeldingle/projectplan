const initState = {};

const authReducer = (state = initState, action) => {

  switch (action.type) {
      case 'LOGIN_ERROR':
        return {
          ...state,
          authError: 'Login failed !! ' + action.error
        };
      case 'LOGIN_SUCCESS':
        console.log('created project error', action.error);
        return state;
    default:
      return state;
  }

  return state;

}

export default authReducer;
