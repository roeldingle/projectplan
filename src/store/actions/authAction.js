export const signIn = (credentials) => {
  return (dispatch, getState, { getFirebase }) => {
    // make async call to DB
    const firebase = getFirebase();

    firebase.auth().signInWithEmailAndPassword(
      credentials.email,
      credentials.password
    ).then(() => {
      dispatch({type: 'LOGIN_SUCCESS'})
    }).catch((err) => {
      dispatch({type: 'LOGIN_ERROR', err})
    })

  }
}
