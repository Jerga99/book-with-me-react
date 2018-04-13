import React from 'react';
import LoginForm from './LoginForm';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as actions from 'actions';

export class Login extends React.Component {

  constructor(props) {
    super(props);
    this.loginUser = this.loginUser.bind(this);
  }

  loginUser(values) {
    this.props.dispatch(actions.login(values));
  }

  render() {
    const { errors } = this.props.auth;
    const { register } = this.props.params;

    if (this.props.auth.isAuth) {
      return <Redirect to='/'/>;
    }

    return (
      <section id="login">
        <div className="bwm-form">
          <div className="row">
            <div className="col-md-5">
              <h1>Login</h1>
              { register &&
                <div className="alert alert-success">
                  <p>You have been succesfuly registered, please login in</p>
                </div>
              }
              <LoginForm errors={errors} submitCb={this.loginUser}/>
            </div>
            <div className="col-md-6 ml-auto">
              <div className="image-container">
                <h2 className="catchphrase">Hundreds of awesome places in reach of few clicks.</h2>
                <img src={process.env.PUBLIC_URL + '/img/login-image.jpg'} alt=""/>

              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps)(Login);
