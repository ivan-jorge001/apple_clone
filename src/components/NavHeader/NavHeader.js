import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router'
import classnames from 'classnames';
import appleLogo from '../../assets/images/apple_white.svg';
import './NavHeader.css';

function NavHeader({ animate }) {

	const headerClassName = classnames('navheader_container',
		{
			slide_down: animate,
		}
	);

	return (
		<div className={headerClassName}>
			<img className="navheader_logo" src={appleLogo} alt="apple logo"/>
		</div>
	);
}

NavHeader.propTypes = {
	match: PropTypes.object.isRequired,
	location: PropTypes.object.isRequired,
	history: PropTypes.object.isRequired,
	animate: PropTypes.bool,
};

export default withRouter(NavHeader);
