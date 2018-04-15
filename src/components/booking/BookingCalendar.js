import React from 'react';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import { getRangeOfDates, formatDate } from 'helpers';
import * as moment from 'moment';

export class BookingCalendar extends React.Component {

  constructor(props) {
    super(props);

    this.dateInput = React.createRef();
    this.takenDates = [];

    this.state = {
      selectedBooking: {
        startAt: "",
        endAt: ""
      }
    }

    this.checkInvalidDates = this.checkInvalidDates.bind(this);
    this.handleApply = this.handleApply.bind(this);
  }

  componentWillMount() {
    this.computeTakenDates();
  }

  checkInvalidDates(date) {
    return this.takenDates.includes(formatDate(date)) || date.diff(moment(), 'days', true) <= 0;
  }

  handleApply(event, dateRangePicker) {
    const starAt = formatDate(dateRangePicker.startDate);
    const endAt = formatDate(dateRangePicker.endDate);


    this.dateInput.current.value = starAt + " to " +  endAt;

    this.setState({
      selectedBooking: {
        starAt,
        endAt
      }
    })
  }

  computeTakenDates() {
    const {bookings} = this.props;

    if (bookings && bookings.length) {
      bookings.forEach(booking => {
        const range = getRangeOfDates(booking.startAt, booking.endAt);
        range.forEach(date => {

        this.takenDates.push(date)
      });

        this.takenDates.push(moment(booking.startAt).format('Y-MM-DD'));
        this.takenDates.push(moment(booking.endAt).format('Y-MM-DD'));
      });
    }

    return this.takenDates;
  }

  render() {
    return (
      <DateRangePicker onApply={this.handleApply} isInvalidDate={this.checkInvalidDates} opens="left" containerStyles={{display: 'block'}}>
        <input ref={this.dateInput} id="dates" type="text" className="form-control"></input>
      </DateRangePicker>
    )
  }q
}
