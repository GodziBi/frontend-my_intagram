import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD2bucnxWgUK2NSK4UVPIIAcs071B5jUm4",
  authDomain: "instagram-aa8c9.firebaseapp.com",
  projectId: "instagram-aa8c9",
  storageBucket: "instagram-aa8c9.appspot.com",
  messagingSenderId: "1088185468370",
  appId: "1:1088185468370:web:e96d262a4c5c2c676d740b",
  measurementId: "G-98KSV96084"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);