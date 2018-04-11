import React from 'react';
import { Link } from 'react-router-dom'

export function RentalCard(props) {
  return (
      <div className={props.colClass}>
        <Link to={`/rentals/${props.rental._id}`}>
          <div className="card bwm-card">
            <img className="card-img-top" src="http://via.placeholder.com/350x250" alt=""></img>
            <div className="card-block">
              <h6 className="card-subtitle">Whole Apartment &#183; {props.rental.city}</h6>
              <h4 className="card-title">{props.rental.title}</h4>
              <p className="card-text">${props.rental.dailyRate} per Night &#183; Free Cancelation</p>
            </div>
          </div>
        </Link>
      </div>
    )
}
