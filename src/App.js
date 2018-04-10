import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Header } from './components/shared/header/Header';
import { RentalCard } from './components/rental/RentalCard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <div className="container">
          <RentalCard></RentalCard>
        </div>
      </div>
    );
  }
}

export default App;
