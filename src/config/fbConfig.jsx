import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGjaPNAXy6HXFjNrGpqgj-rcOy37vpO-w",
  authDomain: "francais-study.firebaseapp.com",
  projectId: "francais-study",
  storageBucket: "francais-study.appspot.com",
  messagingSenderId: "697743625415",
  appId: "1:697743625415:web:54021a4dc22a21b0c8c2e2",
  measurementId: "G-CDVBBG177P",
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampInSnapShots: true });

export default firebase;
