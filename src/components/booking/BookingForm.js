import React from 'react';
import { BookingCalendar } from './BookingCalendar';


export class BookingForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      startAt: "",
      endAt: "",
      guests: ""
    };

    this.selectDates = this.selectDates.bind(this);
    this.selectGuests = this.selectGuests.bind(this);
  }

  selectDates(startAt, endAt) {
    this.setState({
      startAt,
      endAt
    })
  }

  selectGuests(event) {
    this.setState({
      guests: event.target.value
    })
  }

  render() {
  const {rental, handleFormConfirm} = this.props;
  const {startAt, endAt, guests} = this.state;

    return (
      <div className="booking">
        <h3 className="booking-price">${rental.dailyRate} <span className="booking-per-night">per night</span></h3>
        <hr></hr>
        <div className="form-group">
        <label htmlFor="dates">Dates</label>
          <BookingCalendar handleSelectDates={this.selectDates} bookings= {rental.bookings} />
        </div>
        <div className="form-group">
          <label htmlFor="guests">Guests</label>
          <input onChange={this.selectGuests} value={this.state.guests} type="number" className="form-control" id="guests" aria-describedby="emailHelp" placeholder=""></input>
        </div>
        <button disabled={!startAt || !endAt || !guests} onClick={() => handleFormConfirm({...this.state})} className="btn btn-bwm btn-confirm btn-block">Reserve place now</button>
        <hr></hr>
        <p className="booking-note-title">People are interested into this house</p>
        <p className="booking-note-text">
          More than 500 people checked this rental in last month.
        </p>
      </div>
    )
  }
}
