import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyA0mG1JhUxxFNtcqzcl6TA2wHdfC2rlx5U",
    authDomain: "clone-f59e0.firebaseapp.com",
    projectId: "clone-f59e0",
    storageBucket: "clone-f59e0.appspot.com",
    messagingSenderId: "919683973312",
    appId: "1:919683973312:web:755dea3c188b218c29ed25"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {db, auth, provider };