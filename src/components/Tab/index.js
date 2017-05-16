import React, { Children, cloneElement } from 'react';

const Tab = ({ children, onClick, selected }) => {

	// TODO: Render title and content of the tab here
  const tabChildren = React.Children.map(children, (child) => cloneElement(child, {
      selected: selected,
    })
  )

  return (<div onClick={onClick}>{tabChildren}</div>);
}

export default Tab;
