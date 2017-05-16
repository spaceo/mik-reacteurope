import React from 'react';

const withDefaultCountProp = (Component, count) => {
  return (props) => {
    return <Component count={count} {...props} />
  }
}

export default withDefaultCountProp
