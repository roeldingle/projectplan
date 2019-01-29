const initState = {
  projects: []
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
      case 'CREATE_PROJECT':
        console.log('created project', action.project);
        return state;
      case 'CREATE_PROJECT_ERROR':
        console.log('created project error', action.error);
        return state;
        case 'UPDATE_PROJECT':
          console.log('update project', action.project);
          return state;
        case 'UPDATE_PROJECT_ERROR':
          console.log('update project error', action.error);
          return state;
        case 'DELETE_PROJECT':
          console.log('DELETE project');
          return state;
        case 'DELETE_PROJECT_ERROR':
          console.log('DELETE project error', action.error);
          return state;
    default:
      return state;
  }

}

export default projectReducer;
