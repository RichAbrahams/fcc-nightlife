import * as firebase from 'firebase';

export default function signOut() {
  return firebase.auth().signOut()
    .then((result) => result)
    .catch((error) => error);
}
