import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCBEQz4oEVbXw0bRQuoY-A03adB-tD5IgI",
    authDomain: "on-tap-1a19c.firebaseapp.com",
    projectId: "on-tap-1a19c",
    storageBucket: "on-tap-1a19c.appspot.com",
    messagingSenderId: "450177467402",
    appId: "1:450177467402:web:331bfe12fadcb1c0674bf3"
  };

  firebase.initializeApp(firebaseConfig);

  // set up provider for Google Signin 
  const auth = firebase.auth();
  var provider = new firebase.auth.GoogleAuthProvider();

  //login action
  const loginWithGoogle = () => {
    return auth.signInWithPopup(provider);
  }

  const signupWithEmailAndPassword = async (email, password) => {
    await auth.createUserWithEmailAndPassword(email, password)
  }

  const loginWithEmailAndPassword = async (email, password) => {
    await auth.signInWithEmailAndPassword(email, password)
  }

  //logout action
  const logout = () => {
    return auth.signOut();
  }
  
  export {
      loginWithGoogle, 
      loginWithEmailAndPassword,
      signupWithEmailAndPassword,
      logout,
      auth
  }