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
          <section id="rentalListing">
            <h1 class="page-title">Your Home All Around the World</h1>
            <div class="row">
              <div class='col-md-3 col-xs-6'>
                <div class="card bwm-card">
                  <img class="card-img-top" src="http://via.placeholder.com/350x250" alt=""></img>
                  <div class="card-block">
                    <h6 class="card-subtitle">Whole Apartment &#183; New York</h6>
                    <h4 class="card-title">Some nice apartment</h4>
                    <p class="card-text">$240 per Night &#183; Free Cancelation</p>
                    <a href="" class="card-link">More Info</a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default App;
