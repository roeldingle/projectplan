const initState = {
  authError: null
};

const authReducer = (state = initState, action) => {

  switch (action.type) {
      case 'LOGIN_ERROR':
        console.log('Login failed');
        return {
          ...state,
          authError: 'Login failed !! ' + action.error
        };
      case 'LOGIN_SUCCESS':
      return {
        ...state,
        authError: null
      };
    default:
      return state;
  }
}

export default authReducer;
