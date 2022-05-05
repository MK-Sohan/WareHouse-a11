// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDs-3krxUZvcih0WusPcYlXI25hx5ZIYcw",
  authDomain: "assignment-11-ee9c8.firebaseapp.com",
  projectId: "assignment-11-ee9c8",
  storageBucket: "assignment-11-ee9c8.appspot.com",
  messagingSenderId: "713682507804",
  appId: "1:713682507804:web:d3d278a323afe1689267d9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
