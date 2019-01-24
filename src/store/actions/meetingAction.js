export const createMeeting = (meeting) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {

    // make async call to DB
    const firestore = getFirestore();

    console.log(firestore);

    firestore.collection('meetings').add({
      ...meeting,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_MEETING', meeting });
    }).catch((err) => {
      dispatch({ type: 'CREATE_MEETING_ERROR', err });
    })

  }
}
