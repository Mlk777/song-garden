export const addSong = song => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore
      .collection('songs')
      .add({
        ...song,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId: authorId,
        createdAt: new Date(),
      })
      .then(() => {
        dispatch({ type: 'ADD_SONG', song });
      })
      .catch(err => {
        dispatch({ type: 'ADD_SONG_ERROR', err });
      });
  };
};
