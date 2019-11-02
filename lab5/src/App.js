import React from 'react';
import './App.css';
import Cardlist from "./components/cardlist/index.js";
import Weather from "./components/weather/index.js";

class App extends React.Component {
  render() {
    return (
      <div>
        <Weather />
      </div>
    );
  }
}

export default App;
