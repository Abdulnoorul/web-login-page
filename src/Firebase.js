// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAD5T7DH_NHomwy5vkrHvQEZKS51rmxoEc",
  authDomain: "web-login-page-246ef.firebaseapp.com",
  projectId: "web-login-page-246ef",
  storageBucket: "web-login-page-246ef.firebasestorage.app",
  messagingSenderId: "1001127447717",
  appId: "1:1001127447717:web:b320d41db96c51da05d14c",
  measurementId: "G-1W7HYH7FL7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app)
export default app;