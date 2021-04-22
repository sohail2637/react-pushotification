import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { initNotifacation } from "./services/firebaseServices";

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <button onClick={initNotifacation}>config notification</button>
    </div>
  );
}

export default App;
