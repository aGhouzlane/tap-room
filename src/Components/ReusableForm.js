import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <h3>Add a Keg</h3>
      <form onSubmit={props.formSubmissionHandler}>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <br/>
        <label>
          Brand:
          <input type="text" name="brand" />
        </label>
        <br/>
        <label>
          Price:
          <input type="text" name="price" />
        </label>
        <br/>
        <label>
          Alcohole Content:
          <input type="text" name="alcoholeContent" />
        </label>
        <br/>
        <input type="submit" value="Submit" />
        <div style={{marginTop: '20px'}}></div>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func
};

export default ReusableForm;