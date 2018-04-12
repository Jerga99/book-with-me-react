import React from 'react';

export class Login extends React.Component {

  render() {
    return (
      <section id="login">
        <div className="bwm-form">
          <div className="row">
            <div className="col-md-5">
              <h1>Login</h1>
              <form>
                <div class="form-group">
                  <label for="email">Email</label>
                  <input type="email" className="form-control" id="email" required/>
                </div>

                <div className="form-group">
                  <label for="password">Password</label>
                  <input type="password" className="form-control" id="password" required/>
                </div>

                <button type="submit" className="btn btn-bwm">Submit</button>

              </form>
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
