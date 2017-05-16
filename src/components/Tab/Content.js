import React from 'react';

export default ({ selected, children }) => {
  return selected ? <div>{children}</div> : null
}
