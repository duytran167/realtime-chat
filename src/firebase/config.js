import firebase from 'firebase/compat/app';

import 'firebase/compat/analytics';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC24z72SOR3ltM3NJSdhY_HZpGoablFOJE",
  authDomain: "chat-app-cce86.firebaseapp.com",
  projectId: "chat-app-cce86",
  storageBucket: "chat-app-cce86.appspot.com",
  messagingSenderId: "806411762370",
  appId: "1:806411762370:web:3d22c0c15a28788160595b",
  measurementId: "G-1RBP38JVLG"
};

// Initialize Firebase
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();

if (window.location.hostname === 'localhost') {
  // auth.useEmulator('http://localhost:9099');
  // db.useEmulator('localhost', '8080');
}

export { db, auth };
export default firebase;