import React from 'react';
import './App.css';
import APIService from './services/APIService'

function App() {
  var Service = new APIService();

  return (
    <div className="App">
      APP
      <button onClick={Service.getdeck}>new Deck</button>
    </div>
  );
}

export default App;
