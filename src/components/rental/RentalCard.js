import React from 'react';

export function RentalCard(props) {

  return (
      <div className={props.colClass}>
        <div className="card bwm-card">
          <img className="card-img-top" src="http://via.placeholder.com/350x250" alt=""></img>
          <div className="card-block">
            <h6 className="card-subtitle">Whole Apartment &#183; New York</h6>
            <h4 className="card-title">Some nice apartment</h4>
            <p className="card-text">$240 per Night &#183; Free Cancelation</p>
            <a href="" className="card-link">More Info</a>
          </div>
        </div>
      </div>
    )
}
