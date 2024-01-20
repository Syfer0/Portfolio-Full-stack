import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCLAEutAHHdugqyDOr9OAFjnYTCChCkw_c",
  authDomain: "portfolio-arman-mulani.firebaseapp.com",
  projectId: "portfolio-arman-mulani",
  storageBucket: "portfolio-arman-mulani.appspot.com",
  messagingSenderId: "411146772526",
  appId: "1:411146772526:web:22ccb0a7c1ed3bbd5bffbf",
  measurementId: "G-89SGBXN1PY",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export default db;
