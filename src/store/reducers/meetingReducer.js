const initState = {
  meeting: []
};

const meetingReducer = (state = initState, action) => {
  switch (action.type) {
      case 'CREATE_MEETING':
        console.log('created meeting', action.meeting);
        return state;
      case 'CREATE_MEETING_ERROR':
        console.log('created meeting error', action.error);
        return state;
    default:
      return state;
  }

}

export default meetingReducer;
