import React from 'react';

const withDefaultCountPropNine = (Component) => {
  return (props) => {
    return <Component count={9} {...props} />
  }
}

export default withDefaultCountPropNine
