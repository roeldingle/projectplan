export const createProject = (project) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to DB
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authId = getState().firebase.auth.uid;

    firestore.collection('projects').add({
      ...project,
      authorFname: profile.fname,
      authorLname: profile.lname,
      authorId: authId,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_PROJECT', project });
    }).catch((err) => {
      dispatch({ type: 'CREATE_PROJECT_ERROR', err });
    })

  }
}

export const updateProject = (project) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to DB
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authId = getState().firebase.auth.uid;

    firestore.collection('projects').doc(project.id).update({
      ...project,
      authorFname: profile.fname,
      authorLname: profile.lname,
      authorId: authId,
      updatedAt: new Date()
      }).then(() => {
        dispatch({ type: 'UPDATE_PROJECT', project });
      }).catch((err) => {
        dispatch({ type: 'UPDATE_PROJECT_ERROR', err });
      })

  }
}

export const deleteProject = (projectId) => {
  return (dispatch, getState, {  getFirebase,getFirestore }) => {
    // make async call to DB
    const firestore = getFirestore();
    
    firestore.collection('projects').doc(projectId)
      .delete()
      .then(() => {
        dispatch({ type: 'DELETE_PROJECT' });
      }).catch((err) => {
        dispatch({ type: 'DELETE_PROJECT_ERROR', err });
      })

  }
}
