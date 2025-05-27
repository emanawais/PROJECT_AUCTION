// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyALjvGhAywACerUkvG5G3cbzbUeHKw4iNU",
  authDomain: "eman-auction.firebaseapp.com",
  projectId: "eman-auction",
  storageBucket: "eman-auction.appspot.com",
  messagingSenderId: "764143128376",
  appId: "1:764143128376:web:f7ac40696353cdd3e4bbcd"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);