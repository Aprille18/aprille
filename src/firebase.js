import firebase from "firebase/compat/app";
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyCwwQ8o9AvEPac1iPf4zTVYNmAoCi5ZkR4",
  authDomain: "react-contact-6fe49.firebaseapp.com",
  projectId: "react-contact-6fe49",
  storageBucket: "react-contact-6fe49.appspot.com",
  messagingSenderId: "146349651628",
  appId: "1:146349651628:web:a930a903e3cf0076141109"
};

 const fireDb = firebase.initializeApp(firebaseConfig);
  export default fireDb.database().ref();