import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// ReactDOm, c'est le coeur de react, et on crée une racine
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // Ce met en mode développement et permet d'avoir des problèmes dans le site, montre les "warning".
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

