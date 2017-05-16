import React from 'react';

export default Component => ({loading, ...props}) => {
  return loading ? <div>I am loading</div> : <Component {...props} />
}
