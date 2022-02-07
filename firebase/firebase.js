import firebase from "firebase";
import "firebase/storage";

const config = {
  apiKey: "AIzaSyDBm29WY1yld8-MfUy6TPhxFfBCxNbFvaI",
  authDomain: "nfo-app.firebaseapp.com",
  projectId: "nfo-app",
  storageBucket: "nfo-app.appspot.com",
  messagingSenderId: "935728472075",
  appId: "1:935728472075:web:a83cf43e9f13cd4f59a70e",
  measurementId: "G-MDNRT1Q7B2"
};
firebase.initializeApp(config);
const auth = firebase.auth();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

const storage = firebase.storage();

export {storage, googleAuthProvider, facebookAuthProvider, auth, firebase as default};
