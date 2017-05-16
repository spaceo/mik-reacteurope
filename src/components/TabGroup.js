import React, { Children, cloneElement } from 'react';

class TabGroup extends React.Component {
	constructor(props) {
	 super(props);
	 this.onClick = this.onClick.bind(this);
	 this.state = {radioId: null};
 }

	// TODO: Add management of selected tab
	onClick(i) {
		this.setState({radioId: i});
	}

	render() {
		const tabs = Children.map(this.props.children, (tab, i) => cloneElement(tab, {
				onClick: () => this.onClick(i),
				selected: this.state.radioId === i,
      })
    );
		return (
			<div>{tabs}</div>
		)
	}
}

export default TabGroup;
