// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDqp4CySr2q8v3uIpCZdYcS2IJIct2EKGs",
    authDomain: "prafull-todo-1.firebaseapp.com",
    projectId: "prafull-todo-1",
    storageBucket: "prafull-todo-1.appspot.com",
    messagingSenderId: "47205080114",
    appId: "1:47205080114:web:2fbed1e04600cce195b02b",
    measurementId: "G-YMDKY88MBQ"
};

// Initialize Firebase
const firebase_app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(firebase_app);
const auth = getAuth(firebase_app);

export default firebase_app
export { auth }
