import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router'
import get from 'lodash/get';
import appleLogo from '../../assets/images/apple_white.svg';
import './NavHeaderLinks.css';
import Link from '../Link';
import { ROUTES } from '../../pages/routes';

function NavHeader(props) {
	const [selectedTab, setSelectedTab] = useState(get(props, 'links[0].id', 0))

	const onLinkClicked = (id, cb) => {
		setSelectedTab(id);
		cb();
	}
	const links = () => props.links.map(({ title, id, onClick, style }, index) => (
			<Link
				key={`${title}_${index}`}
				title={title}
				style={{
					color: selectedTab === id ? '#000' : '#707070',
					fontWeight: selectedTab === id ? 'bold' : 'normal',
					...style,
				}}
				onClick={() => onLinkClicked(id, onClick)}
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
