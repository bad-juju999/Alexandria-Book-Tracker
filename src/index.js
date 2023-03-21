import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyApSQ4ZVY6lHlM4CC3SIPJnb2dt4aIRBYU",
  authDomain: "trial-2-4580d.firebaseapp.com",
  projectId: "trial-2-4580d",
  storageBucket: "trial-2-4580d.appspot.com",
  messagingSenderId: "327266031259",
  appId: "1:327266031259:web:6b30b63b8af5fb04e0983e",
  measurementId: "G-L22RD55C4M",
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
