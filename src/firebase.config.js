// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwkjLrNWLonUX9Lax3F5Rs7uEHxsOuk2c",
  authDomain: "tech-o-world.firebaseapp.com",
  projectId: "tech-o-world",
  storageBucket: "tech-o-world.appspot.com",
  messagingSenderId: "182333945231",
  appId: "1:182333945231:web:4989ab664ccb349c1e47fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;