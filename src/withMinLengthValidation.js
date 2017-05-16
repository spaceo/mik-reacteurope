import React from 'react';

const withMinLengthValidation = (Component, min) => {
  return (props) => {
    return (
      <div>
        <Component {...props} />
        {props.value.toString().length < min && <span>Minimum {min} required.</span>}
      </div>
    )
  }
}

export default withMinLengthValidation
