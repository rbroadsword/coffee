import React from "react"; 
import PropTypes from "prop-types"; 

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='name'
          placeholder='Name' />
        <input
          type='text'
          name='quantity'
          placeholder='Quantity' />
        <textarea
          name='description'
          placeholder='Description' />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  ); 
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func, 
  buttonText: PropTypes.string
}; 

export default ReusableForm; 