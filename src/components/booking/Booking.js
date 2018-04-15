import React from 'react';
import { BookingForm } from './BookingForm';
import { getRangeOfDates } from 'helpers';
import { connect } from 'react-redux';
import * as actions from 'actions';

export class Booking extends React.Component {

  constructor(props) {
    super(props);

    this.confirmProposedData = this.confirmProposedData.bind(this);
  }

  confirmProposedData({startAt, endAt, guests}) {
    this.createBooking(startAt, endAt, guests);
  }

  createBooking(startAt, endAt, guests) {
    const booking = {};
    const { rental } = this.props;

    booking.startAt = startAt;
    booking.endAt = endAt;
    booking.days = getRangeOfDates(startAt, endAt).length;
    booking.totalPrice = booking.days * rental.dailyRate;
    booking.rental = rental;
  }

  render() {
    const { rental } = this.props;

    return (
      <BookingForm handleFormConfirm={this.confirmProposedData} rental={rental}> </BookingForm>
      )
  }
}
