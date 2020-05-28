import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Alert } from "./components/Alert";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        With color property
        <Alert text="Josh" color="lightpink" />
        <Alert text="Josh" color="lightgreen" />
        <Alert text="Josh" color="lightblue" />
        <Alert text="Josh" color="orange" />
        With random color
        <Alert text="Josh" />
        <Alert text="Josh" />
        <Alert text="Josh" />
        <Alert text="Josh" />
      </header>
    </div>
  );
}

export default App;
