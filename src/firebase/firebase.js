import { initializeApp } from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDwo4CUSm9sd1-6o38tmBh83ZZT8YVjiao",
  authDomain: "auth-development-a2e07.firebaseapp.com",
  databaseURL: "https://auth-development-a2e07-default-rtdb.firebaseio.com",
  projectId: "auth-development-a2e07",
  storageBucket: "auth-development-a2e07.appspot.com",
  messagingSenderId: "233132180742",
  appId: "1:233132180742:web:2e6414a06076e5765d0a87",
};

export const myFirebase = initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;
