import * as firebase from 'firebase';

export default function authTwitter() {
  const provider = new firebase.auth.TwitterAuthProvider();
  return firebase.auth().signInWithPopup(provider)
    .then((result) => result)
    .catch((err) => {
      throw new Error(err);
    });
}
