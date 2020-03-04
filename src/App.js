import React from 'react';
import './App.css';

import RestData from "./Components/RestData"
import AddRest from "./Components/AddRest"

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>RESTAURANT TRACKER</h1>
      </header>
      <RestData />
      <AddRest />
    </div>
  );
}

export default App;
