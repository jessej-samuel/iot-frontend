// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "iot-project-b83df.firebaseapp.com",
  databaseURL: "https://iot-project-b83df-default-rtdb.firebaseio.com",
  projectId: "iot-project-b83df",
  storageBucket: "iot-project-b83df.appspot.com",
  messagingSenderId: "859327432651",
  appId: "1:859327432651:web:ec9f51ce3b0fd4fba5984e",
  measurementId: "G-MWXD07D3W1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
export const database = getDatabase(app);
