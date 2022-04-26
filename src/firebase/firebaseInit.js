import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAhfzr_uZsAqd7BT6P1h4UliXZ6LeL9X3I",
    authDomain: "fireblogs-576ee.firebaseapp.com",
    projectId: "fireblogs-576ee",
    storageBucket: "fireblogs-576ee.appspot.com",
    messagingSenderId: "866366789391",
    appId: "1:866366789391:web:bc881aaa1401978c28907a"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const timestamp =firebase.firestore.FieldValue.serverTimestamp;

  export {timestamp};

  export default firebaseApp.firestore;