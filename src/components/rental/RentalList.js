import React from 'react';
import { RentalCard } from './RentalCard';
import { connect } from 'react-redux'

class RentalList extends React.Component {

  renderRentals() {
    const rentals = this.props.rentals;

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

function mapStateToProps(state) {
  return {
    rentals: state.rentals
  }
}

export default connect(mapStateToProps)(RentalList);
