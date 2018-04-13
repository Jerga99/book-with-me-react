import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
// Components
import { Header } from 'components/shared/header/Header';
import RentalList from 'components/rental/RentalList';
import RentalDetail from 'components/rental/rental-detail/RentalDetail';
import Register from 'components/register/Register';
import Login from 'components/login/Login';
import { ProtectedRoute } from 'components/shared/auth/ProtectedRoute';
// HOC
import { withQueryString } from 'hoc/withQueryString';

// Actions
import * as actions from './actions';

const LoginWithQueryString = withQueryString(Login);

class RentalApp extends React.Component {

  componentWillMount() {
    this.props.dispatch(actions.fetchRentals());
    this.checkToken();
  }

  checkToken() {
    const token = localStorage.getItem('auth_token');

    if (localStorage.getItem('auth_token')) {
      this.props.dispatch(actions.loginSuccess(token));
    }
  }

  render() {
    const {auth} = this.props;

    return (
      <BrowserRouter>
        <div className="App">
          <Header isAuth={auth.isAuth}/>
          <div className="container">
            <Route exact path='/' render={() => (<Redirect to="/rentals"/> )}/>
            <Route exact path='/rentals' component={ RentalList }/>
            <ProtectedRoute auth={auth} exact path='/rentals/:id' component={ RentalDetail }/>
            <Route  exact path='/register' render={() =>  <Register auth={auth}/>}  />
            <Route  exact path='/login' render={(props) => <LoginWithQueryString {...props} auth={auth}/>}/>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps)(RentalApp);
