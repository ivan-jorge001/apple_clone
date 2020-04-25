import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router'
import Link from '../Link';
import { ROUTES } from '../../pages/routes';
import appleLogo from '../../assets/images/apple_white.svg';
import './NavHeaderLinks.css';

function NavHeader(props) {
	const links = () => props.links.map(({ title, id, onClick, style }, index) => (
		<Link
			key={`${title}_${index}`}
			title={title}
			style={{
				color: props.selectedTab === id ? '#000' : '#707070',
				fontWeight: props.selectedTab === id ? 'bold' : 'normal',
				...style,
			}}
			onClick={() => onClick(id)}
			{...props}
		/>
	));

	const goToWelcomePage = () => props.history.push(ROUTES.WELCOME)

	return (
		<div className="navheaderlink_container">
			<img
				className="navheaderlink_logo"
				src={appleLogo}
				onClick={goToWelcomePage}
				alt="apple logo"
			/>
			<div className="navheaderlink_links_container">
				<div className="navheaderlink_links">
					{links()}
				</div>
			</div>
		</div>
	);
}

NavHeader.propTypes = {
	match: PropTypes.object.isRequired,
	location: PropTypes.object.isRequired,
	history: PropTypes.object.isRequired,
	animate: PropTypes.bool,
}

export default withRouter(NavHeader)
