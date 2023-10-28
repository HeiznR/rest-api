import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

interface IData {
  name: string;
  age: number;
}

function App() {
  const [data, setData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/users");
      const data = await response.json();
      setData(data);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{JSON.stringify(data)}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
