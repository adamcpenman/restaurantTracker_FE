import React from 'react';
import './App.css';
import { Route, withRouter } from "react-router-dom";


import RestData from "./Components/RestData"
import AddRest from "./Components/AddRest"

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>RESTAURANT TRACKER</h1>
      </header>
      {/* <RestData /> */}
      <Route exact path="/" component={RestData} />
      <Route path="/add-task" exact component={AddRest} />

    </div>
  );
}

export default withRouter(App);

