import React from 'react';
import PropTypes from 'prop-types'
import './Link.css';

function Link(props) {
	const {
		title,
		style,
		onClick,
	} = props;

	return (
		<div className="link_container" onClick={onClick}>
			<div style={style}>
				{title}
			</div>
		</div>
	)
}

Link.propTypes = {
	title: PropTypes.string,
	style: PropTypes.string,
	onClick: PropTypes.func,
}

export default Link;

