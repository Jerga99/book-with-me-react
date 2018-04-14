import React from 'react';
import { RentalCard } from './RentalCard';
import { connect } from 'react-redux';
import * as actions from 'actions';

class RentalList extends React.Component {

  componentWillMount() {
    const { isFetching } = this.props.rentals;
    const city = this.props.match.params.city || "";

    if ( !isFetching ) {
      this.props.dispatch(actions.fetchRentals(city));
    }
  }

  renderRentals() {
    const rentals = this.props.rentals.items;

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
    const { isSearch, searchCity, items } = this.props.rentals;

    return (
      <section id="rentalListing">
        { !isSearch && items.length > 0 && <h1 className="page-title">Your Home All Around the World</h1>}
        { isSearch && items.length > 0 && <h1 className="page-title">Your Home in city of {searchCity}</h1>}
        { isSearch && items.length === 0 && <h1 className="page-title">There are no rentals for city {searchCity}</h1>}
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
