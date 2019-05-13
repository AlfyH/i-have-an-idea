import firebase from "firebase/app";
import "firebase/auth";
// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyB4AHBnVxjYOb61lFGRu1S9NsN2rEfUpJk",
    authDomain: "i-have-an-idea.firebaseapp.com",
    databaseURL: "https://i-have-an-idea.firebaseio.com",
    projectId: "i-have-an-idea",
    storageBucket: "i-have-an-idea.appspot.com",
    messagingSenderId: "692097319627",
    appId: "1:692097319627:web:0d0f7de149a4cfba"
  };
  // Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;
