import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './bootstrap.min.css'
import reportWebVitals from './reportWebVitals';

import{ getApps,getApp, initializeApp} from'firebase/app';
import { getAnalytics } from "firebase/analytics";
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  getDoc,
  getDocs,
  deleteDoc,
  query,
  where,
} from "firebase/firestore";

/*const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECTID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APPID,
};

*/
const firebaseConfig = {
  apiKey: "AIzaSyCfrLQpfC0bEIDICqPxl8YZfFjaNzGxAbU",
  authDomain: "practice-ae625.firebaseapp.com",
  projectId: "practice-ae625",
  storageBucket: "practice-ae625.appspot.com",
  messagingSenderId: "674064173449",
  appId: "1:674064173449:web:3fc6bb2a6b910e56b1b958",
  measurementId: "G-PKWX9QHWEC"
};//無法將內容用.env檔藏起來

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
