import React from 'react';
import { BookingForm } from './BookingForm';
import { getRangeOfDates } from 'helpers';
import { connect } from 'react-redux';
import { BookingConfirmation } from './BookingConfirmation';
import * as actions from 'actions';

export class Booking extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      booking: {},
      didConfirm: false
    }

    this.confirmProposedData = this.confirmProposedData.bind(this);
    this.cancelConfirmation = this.cancelConfirmation.bind(this);
  }

  confirmProposedData({startAt, endAt, guests}) {
    this.createBooking(startAt, endAt, guests);
    this.openConfirmationModal();
  }

  openConfirmationModal() {
    this.setState({didConfirm: true});
  }

  cancelConfirmation() {
   this.setState({didConfirm: false});
  }

  createBooking(startAt, endAt, guests) {
    const booking = {};
    const { rental } = this.props;

    booking.guests = guests;
    booking.startAt = startAt;
    booking.endAt = endAt;
    booking.days = getRangeOfDates(startAt, endAt).length;
    booking.totalPrice = booking.days * rental.dailyRate;
    booking.rental = rental;

    this.setState({
      booking
    })
  }

  render() {
    const { rental } = this.props;
    const { booking, didConfirm } = this.state;

    return (
      <section id="bookingPanel">
        <BookingConfirmation close={this.cancelConfirmation} didConfirm={didConfirm} booking={booking} rental={rental}/>
        <BookingForm handleFormConfirm={this.confirmProposedData} rental={rental}> </BookingForm>
      </section>
      )
  }
}
