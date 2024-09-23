// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoF0jD4J07X83VTrjihVeSnyuOWskcpYs",
  authDomain: "todolist-4dfcd.firebaseapp.com",
  projectId: "todolist-4dfcd",
  storageBucket: "todolist-4dfcd.appspot.com",
  messagingSenderId: "453057654862",
  appId: "1:453057654862:web:614efccd9ce946ac60531f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
