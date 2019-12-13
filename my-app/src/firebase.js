const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyC3mK1Z4yjw3ti-jBPQ4pR02FbWJAW4mRY",
  authDomain: "bravoure-burger.firebaseapp.com",
  databaseURL: "https://bravoure-burger.firebaseio.com",
  projectId: "bravoure-burger",
  storageBucket: "bravoure-burger.appspot.com",
  messagingSenderId: "308684190751",
  appId: "1:308684190751:web:87c9ae8d916a4c4257512a",
  measurementId: "G-L3L0TNVDLY"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const db = firebase.firestore();
