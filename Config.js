import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBKzMlQ8i7MnPhZxbyuFQxVi72Q4DgRkUg",
    authDomain: "todolist-84905.firebaseapp.com",
    databaseURL: "https://todolist-84905.firebaseio.com",
    projectId: "todolist-84905",
    storageBucket: "todolist-84905.appspot.com",
    messagingSenderId: "974130388021",
    appId: "1:974130388021:web:4e6808a963591add5ee57c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
export default firebase.database();