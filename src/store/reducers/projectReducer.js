const initState = {
  projects: [
    {id: 1, title: 'Sportsace', description: 'Sports community system'},
    {id: 2, title: 'Mortimer Apparel', description: 'Equipment and apparels ordering and quotation system'},
    {id: 3, title: 'Shoot app', description: 'Q&A mobile app'},
  ]
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
      case 'CREATE_PROJECT':
        console.log('created project', action.project);
        return state;
      case 'CREATE_PROJECT_ERROR':
        console.log('created project error', action.error);
        return state;
    default:
      return state;
  }

}

export default projectReducer;
