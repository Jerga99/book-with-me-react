import React from 'react';
import { BookingForm } from './BookingForm';

export class Booking extends React.Component {

  render() {
    const { rental } = this.props;

    return (
      <BookingForm rental={rental}> </BookingForm>
      )
  }
}
