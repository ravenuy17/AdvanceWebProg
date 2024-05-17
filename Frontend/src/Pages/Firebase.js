import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRZHUc8cYHlj8LxRSy0ooe6Zs79S3LmAk",
  authDomain: "advancewebdos.firebaseapp.com",
  projectId: "advancewebdos",
  storageBucket: "advancewebdos.appspot.com",
  messagingSenderId: "290583264091",
  appId: "1:290583264091:web:b2786e33a0d7845b97787e",
  measurementId: "G-QEFPXRK4SW"
};
firebase.initializeApp(firebaseConfig);
var storage = firebase.storage();
export default storage;