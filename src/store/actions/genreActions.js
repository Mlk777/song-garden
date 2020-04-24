export const addGenre = genre => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore
      .collection('genre')
      .add({
        ...genre,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId: authorId,
        createdAt: new Date(),
      })
      .then(() => {
        dispatch({ type: 'ADD_GENRE', genre });
      })
      .catch(err => {
        console.error(err);
        dispatch({ type: 'ADD_GENRE_ERROR', err });
      });
  };
};
