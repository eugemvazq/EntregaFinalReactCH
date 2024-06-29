// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHmWjviAifofNjrN613y_UQuI6pfQIeGI",
  authDomain: "amimeva-5a1d1.firebaseapp.com",
  projectId: "amimeva-5a1d1",
  storageBucket: "amimeva-5a1d1.appspot.com",
  messagingSenderId: "852120809318",
  appId: "1:852120809318:web:29d88a0ba9fc9a376262a7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);