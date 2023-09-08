// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAGXK1O4r_Z2frI7Ra10x5ZBHlI6Gfk1H0",
  authDomain: "robin-chat-51632.firebaseapp.com",
  projectId: "robin-chat-51632",
  storageBucket: "robin-chat-51632.appspot.com",
  messagingSenderId: "396899425162",
  appId: "1:396899425162:web:4d66d1db8dd578d606c673",
  measurementId: "G-87VSN4GFF0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);