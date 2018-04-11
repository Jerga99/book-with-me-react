import React from 'react';
import { RentalCard } from './RentalCard';
import { Axios } from '../../services/axios';

export class RentalList extends React.Component {

  constructor(props) {
    super(props);

    this.axiosService = Axios.getInstance();
    this.state = {
      rentals: []
    }
  }

  componentWillMount() {
    this.axiosService.get('/rentals').then((res) => {
      this.setState({
        rentals: res.data
      })
    })
  }

  renderRentals() {
    const rentals = this.state.rentals;

    if (rentals.length > 0) {
      return rentals.map((rental, index) => {
        return (
          <RentalCard rental={rental}
                      key={rental._id}
                      colClass="col-md-3 col-xs-6">
          </RentalCard>
        );
    });
    } else {
      return '';
    }

  }

  render() {
    return (
      <section id="rentalListing">
        <h1 className="page-title">Your Home All Around the World</h1>
        <div className="row">
          {this.renderRentals()}
        </div>
      </section>
      )
  }
}
