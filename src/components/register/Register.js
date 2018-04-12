import React from 'react';

export class Register extends React.Component {

  render() {
    return (
      <section id="register">
        <div className="bwm-form">
          <div className="row">
            <div className="col-md-5">
              <h1>Register</h1>
              <form>
                <div className="form-group">
                  <label for="username">Username</label>
                  <input type="text" className="form-control" id="username" required/>
                </div>

                <div className="form-group">
                  <label for="email">Email</label>
                  <input type="email" class="form-control" id="email" required/>
                </div>

                <div className="form-group">
                  <label for="password">Password</label>
                  <input type="password" className="form-control" id="password required"/>
                </div>

                <div className="form-group">
                  <label for="confirmationPassword">Confirm Password</label>
                  <input type="password" className="form-control" id="confirmationPassword" required/>
                </div>

                <button type="submit" className="btn btn-bwm">Submit</button>

              </form>
            </div>
            <div className="col-md-6 ml-auto">
              <div className="image-container">
                <h2 className="catchphrase">As our member you have access to most awesome places in the world.</h2>
                <img src={process.env.PUBLIC_URL + '/img/register-image.jpg'} alt=""/>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
