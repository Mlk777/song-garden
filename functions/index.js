const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send('Hello Weis!');
});

const createNotification = notification => {
  return admin
    .firestore()
    .collection('notifications')
    .add(notification)
    .then(doc => console.log('notification added', doc));
};

exports.genreCreated = functions.firestore
  .document('genre/{genreId}')
  .onCreate(doc => {
    const genre = doc.data();
    const notification = {
      content: 'Added a new genre',
      user: `${genre.authorFirstName} ${genre.authorLastName}`,
      time: admin.firestore.FieldValue.serverTimestamp(),
    };

    return createNotification(notification);
  });

exports.songCreated = functions.firestore
  .document('songs/{songId}')
  .onCreate(doc => {
    const song = doc.data();
    const notification = {
      content: 'added a new song',
      user: `${song.authorFirstName} ${song.authorLastName}`,
      time: admin.firestore.FieldValue.serverTimestamp(),
    };

    return createNotification(notification);
  });

exports.userJoined = functions.auth.user().onCreate(user => {
  return admin
    .firestore()
    .collection('users')
    .doc(user.uid)
    .get()
    .then(doc => {
      const newUser = doc.data();
      const notification = {
        content: 'joined the party',
        user: `${newUser.firstName} ${newUser.lastName}`,
        time: admin.firestore.FieldValue.serverTimestamp(),
      };

      return createNotification(notification);
    });
});
