// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore,collection, getDocs } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrq7sI5SKAYh_s8-4CL8s-1qo27Bxt3pU",
  authDomain: "mapuniversity-517f5.firebaseapp.com",
  projectId: "mapuniversity-517f5",
  storageBucket: "mapuniversity-517f5.appspot.com",
  messagingSenderId: "918008357536",
  appId: "1:918008357536:web:85ba3f37566d0535a69fc5",
  measurementId: "G-K7D87D74Q4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
const db = getFirestore(app);
export {db,collection,getDocs}
 