/**
*
* SearchForm
*
*/

import React from 'react';
import { Field, reduxForm } from 'redux-form/immutable';
import StyledForm from './StyledForm';
import StyledInput from './StyledInput';
import StyledButton from './StyledButton';

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <div>
      <StyledInput {...input} type={type} placeholder={label} required />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);

const SearchForm = (props) => {
  const { handleSubmit, submitting } = props;
  return (
    <StyledForm onSubmit={handleSubmit}>
      <Field name="location" type="text" component={renderField} label="location" />
      <div>
        <StyledButton type="submit" disabled={submitting}>Submit</StyledButton>
      </div>
    </StyledForm>
  );
};

SearchForm.propTypes = {
  handleSubmit: React.PropTypes.func,
  submitting: React.PropTypes.bool,
};

renderField.propTypes = {
  input: React.PropTypes.object,
  label: React.PropTypes.string,
  type: React.PropTypes.string,
  meta: React.PropTypes.object,
};

export default reduxForm({
  form: 'searchForm',
})(SearchForm);
