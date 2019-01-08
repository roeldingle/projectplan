import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyArq_L-uKqAFiUWf5LuIXO2IEdF65hAUSw",
    authDomain: "projectplan-55887.firebaseapp.com",
    databaseURL: "https://projectplan-55887.firebaseio.com",
    projectId: "projectplan-55887",
    storageBucket: "projectplan-55887.appspot.com",
    messagingSenderId: "855767886227"
  };

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });


export default firebase;
