import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from "./components/Card/index.js";

class App extends React.Component{
  render(){
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
        </header>
        <Card content="This is a card!"></Card>
      </div>
    );
  }
}

export default App;
