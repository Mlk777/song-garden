const initialState = {};
const genreReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_GENRE':
      // console.log('A new genre has been added', action.genre);
      return state;
    case 'ADD_GENRE_ERROR':
      // console.log('Add genre error', action.err);
      return state;
    default:
      return state;
  }
};

export default genreReducer;
