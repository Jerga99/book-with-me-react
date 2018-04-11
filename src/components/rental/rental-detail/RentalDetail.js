import React from 'react';
import { Axios } from '../../../services/axios';
import { RentalDetailInfo } from './RentalDetailInfo';

export class RentalDetail extends React.Component {

  constructor(props) {
    super(props);

    this.axiosService = Axios.getInstance();
    this.state = {
      rental: undefined
    }
  }

  componentWillMount() {
    this.axiosService.get(`/rentals/${this.props.match.params.id}`).then((res) => {
      this.setState({
        rental: res.data
      })
    })
  }

  render() {
    const rental = this.state.rental;

    if (this.state.rental) {
      return (
        <section id="rentalDetails">
          <div className="upper-section">
            <div className="row">
              <div className="col-md-6">
                <img src={rental.image} alt=""></img>
              </div>
              <div className="col-md-6">
                <img src={rental.image} alt=""></img>
              </div>
            </div>
          </div>

          <div className="details-section">
            <div className="row">
              <div className="col-md-8">
                <RentalDetailInfo rental={rental}></RentalDetailInfo>
              </div>
              <div className="col-md-4"> BOOKING</div>
            </div>
          </div>
        </section>
      )
    } else {
      return <div> Loading... </div>
    }
  }
}
