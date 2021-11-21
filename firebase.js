// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjR8G9OoRgrMLZP-qfhLBWN0tQRx6SQRM",
  authDomain: "nextjs-firebase-8455d.firebaseapp.com",
  projectId: "nextjs-firebase-8455d",
  storageBucket: "nextjs-firebase-8455d.appspot.com",
  messagingSenderId: "446594790924",
  appId: "1:446594790924:web:a99538d7b345b87f0d6029"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore()

export { db }