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

    const textprojectId = 'GS2wH8mU9hE4RL2Zwm0v';

    firestore.collection('projects').doc(project.id).update({
      ...project,
      authorFname: profile.fname,
      authorLname: profile.lname,
      authorId: authId,
      createdAt: new Date()
    });

    // firestore.collection('projects').where("id", "==", textprojectId)
    //   .get()
    //   .then(function(querySnapshot) {
    //       querySnapshot.forEach(function(doc) {
    //           console.log(project.id, " => ", project.data());
    //
    //           firestore.collection('projects').doc(project.id).update({
    //             ...project,
    //             authorFname: profile.fname,
    //             authorLname: profile.lname,
    //             authorId: authId,
    //             createdAt: new Date()
    //           });
    //       });
    //  })


    // }).then(() => {
    //   dispatch({ type: 'CREATE_PROJECT', project });
    // }).catch((err) => {
    //   dispatch({ type: 'CREATE_PROJECT_ERROR', err });
    // })

  }
}
