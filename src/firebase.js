import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, get, child, onValue } from "firebase/database";
import { collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCH6Z-pcbadbYj_f5pRC8Qz3pEwvKSaO70",
  authDomain: "innosquare-575ee.firebaseapp.com",
  databaseURL: "https://innosquare-575ee-default-rtdb.firebaseio.com",
  projectId: "innosquare-575ee",
  storageBucket: "innosquare-575ee.firebasestorage.app",
  messagingSenderId: "824698500620",
  appId: "1:824698500620:web:a7eab5ff84eb6b9bb5a029",
  measurementId: "G-YG0G2P770H"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Realtime Database
const database = getDatabase(app);

// Export required functions
export { database, ref, push, get, child, onValue };
export { collection, getDocs };