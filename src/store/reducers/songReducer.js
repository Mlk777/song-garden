const initialState = {};
const songReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_SONG':
      // console.log('A song has been added', action.song);
      return state;
    case 'ADD_SONG_ERROR':
      // console.log('add song error', action.err);
      return state;
    default:
      return state;
  }
};

export default songReducer;
