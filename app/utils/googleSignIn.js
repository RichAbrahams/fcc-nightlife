import * as firebase from 'firebase';

export default function authGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider)
    .then((result) => result)
    .catch((err) => {
      throw new Error(err);
    });
}
