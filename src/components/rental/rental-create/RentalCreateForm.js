import { Field, reduxForm } from 'redux-form'
import React from 'react';
import { BwmInput } from 'components/shared/form/BwmInput';
import { BwmSelect } from 'components/shared/form/BwmSelect';
import { BwmResError } from 'components/shared/form/BwmError';
import { BwmFileUpload } from 'components/shared/form/BwmFileUpload';

class RentalCreateForm extends React.Component {

  submit(values) {
    debugger;
  }

  render() {
    const { handleSubmit, pristine, submitting, submitCb, valid, errors, options } = this.props;

    return (
      <form onSubmit={handleSubmit(this.submit)}>
        <Field
          name="title"
          component={BwmInput}
          type="text"
          label="Title"
          className="form-control"
          />
        <Field
          className="form-control"
          name="city"
          component={BwmInput}
          type="text"
          label="City"
        />
        <Field
          className="form-control"
          name="street"
          component={BwmInput}
          type="text"
          label="Street"
          />
        <Field
          className="form-control"
          name="category"
          options={options}
          component={BwmSelect}
          label="Category"
          />

          <Field
          className="form-control"
          name="image"
          component={BwmFileUpload}
          label="Image"
          />

          <Field
          className="form-control"
          name="bedrooms"
          component={BwmInput}
          type="number"
          label="Bedrooms"
          />

          <Field
          className="form-control"
          name="dailyRate"
          component={BwmInput}
          type="number"
          symbol="$"
          label="Daily Rate"
          />

        <button className="btn btn-bwm" type="submit" disabled={!valid || pristine || submitting}>
            Register
        </button>

      </form>
    )
  }
}

export default reduxForm({
  form: 'rentalForm'
})(RentalCreateForm)
