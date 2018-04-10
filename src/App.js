import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Header } from './components/shared/header/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <div className="container">
          App body
        </div>
      </div>
    );
  }
}

export default App;
