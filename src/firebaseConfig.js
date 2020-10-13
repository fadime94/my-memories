import firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA2KSAEEMSU656axPkpDvH4XtkknRWCDiE",
    authDomain: "my-memories-8ff66.firebaseapp.com",
    databaseURL: "https://my-memories-8ff66.firebaseio.com",
    projectId: "my-memories-8ff66",
    storageBucket: "my-memories-8ff66.appspot.com",
    messagingSenderId: "589160303203",
    appId: "1:589160303203:web:b49a66af2f303550634656"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  export default firebase.firestore();

  export const storage = firebase.storage();

  //storage
  var admin = require("firebase-admin");

  var serviceAccount = require("./my-memories-8ff66-firebase-adminsdk-r1n5k-99a9d32a74.json");
  
  admin.initializeApp(/* {
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://my-memories-8ff66.firebaseio.com"
  } */);

export const  defaultBucket = admin.storage().bucket("images");