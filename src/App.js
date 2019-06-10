import React from 'react';
import './App.css';
import Header from './components/header/header';
import 'jquery';
import 'popper.js';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './styles/custom.css';
import './scripts/custom';
import Counters from "./components/counters";

function App() {
  return (
    <div className="App">
        <Counters/>
    </div>
  );
}

export default App;
