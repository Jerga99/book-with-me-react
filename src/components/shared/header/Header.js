import React from 'react';
import { Link } from 'react-router-dom'
import RentalSearch from 'components/rental/RentalSearch';

export function Header(props) {
  const { isAuth } = props;

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <Link className="navbar-brand" to="/rentals">BookWithMe </Link>
        <RentalSearch />
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ml-auto">
            {(!isAuth && <Link to="/login" className="nav-item nav-link active" href="">Login <span className="sr-only">(current)</span></Link>)}
            {(!isAuth && <Link to="/register" className="nav-item nav-link" href="">Register</Link>)}
            {(isAuth && <a onClick={props.invalidateUser} className="nav-item nav-link" href="">Logout</a>)}
          </div>
        </div>
      </div>
    </nav>
    )
}
