/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamForm extends React.Component {

  onFormSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  }

  renderError = ({ error, touched }) => {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">2
            {error}
          </div>
        </div>
      );
    }

    return null;
  }

  renderInput = ({ input, label, meta }) => {

    const className = `field ${meta.error && meta.touched ? 'error' : ''}`

    return (
      <div className={className}>
        <label htmlFor="input">{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onFormSubmit)} className="ui form error">
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field name="description" component={this.renderInput} label="Enter Description" />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {};

  if (!formValues.title) {
    errors.title = 'You must enter a title';
  }

  if (!formValues.description) {
    errors.description = 'You must enter a description';
  }

  return errors;
};

export default reduxForm({
  form: 'streamForm',
  validate,
})(StreamForm);

