import React from 'react';
import './Link.css';

export default function Link(props) {
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
