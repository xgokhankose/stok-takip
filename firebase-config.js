// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZzZnFcy5VY2n1TasJhQCPYWijJ34tZpg",
  authDomain: "stok-takip-835a3.firebaseapp.com",
  projectId: "stok-takip-835a3",
  storageBucket: "stok-takip-835a3.appspot.com",
  messagingSenderId: "899188217654",
  appId: "1:899188217654:web:e35a7ff0580fb2fee1c597",
};
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
// Initialize Firebase
