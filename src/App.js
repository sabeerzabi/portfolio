import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counters from "./components/counters";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counters/>
      </header>
    </div>
  );
}

export default App;
