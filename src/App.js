import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
// import logo from './logo.svg';
import './App.css';
import 'bootstrap-daterangepicker/daterangepicker.css';
// Components
import { Header } from 'components/shared/header/Header';
import RentalList from 'components/rental/RentalList';
import RentalDetail from 'components/rental/rental-detail/RentalDetail';

// Actions
import * as actions from './actions';

const store = require('./reducers').init();
store.dispatch(actions.fetchRentals());

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Header/>
            <div className="container">
              <Route exact path='/' render={() => (<Redirect to="/rentals"/> )}/>
              <Route exact path='/rentals' component={RentalList}/>
              <Route exact path='/rentals/:id' component={RentalDetail}/>
            </div>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
