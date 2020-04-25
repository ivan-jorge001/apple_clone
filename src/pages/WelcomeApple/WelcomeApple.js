import React, { useState } from 'react';
import { AnimatedRoute } from 'react-router-transition';
import Iphone from '../Iphone';
import NavHeaderLinks from '../../components/NavHeaderLinks/NavHeaderLinks';
import authService from '../../services/AuthService';
import IWatch from '../IWatch';
import appleGrey from '../../assets/images/apple_grey.svg'
import computerFrame from '../../assets/images/computer_frame.svg'
import iphoneFrame from '../../assets/images/iphone_frame.svg'
import iWatchFrame from '../../assets/images/iwatch_frame.svg'
import './WelcomeApple.css'

export default function WelcomeApple(props) {
	const logout = () => {
		authService.logout()
		.then(() => {
			// this should be an action updating redux store
			props.session.setUserLoggedOut();
		})
		.catch((e) => {
			// should be a custom logger
			console.log(e)
		});

	}

	const linksData = [
		{
			id: 0,
			title: 'iPhone',
			path: '/welcome/iphone',
			onClick: (id) => onLinkClicked(id, '/welcome/iphone'),
		},
		{
			id: 1,
			title: 'MacBook Pro',
			path: '/welcome/iphone1',
			onClick: (id) => onLinkClicked(id, '/welcome/iphone1'),
		},
		{
			id: 2,
			title: 'Watch',
			path: '/welcome/watch',
			onClick: (id) => onLinkClicked(id, '/welcome/watch'),
		},
		{
			id: 3,
			title: 'Notify me',
			onClick: (id) => onLinkClicked(id, '/notifyme'),
			style: {
				background: '#5AC8FA 0% 0% no-repeat padding-box',
				borderRadius: 23,
				opacity: 1,
				padding: '3px 25px',
				color: 'white',
			}
		},
		{
			id: 4,
			title: 'logout',
			onClick: logout,
			style: {
				background: '#707070 0% 0% no-repeat padding-box',
				borderRadius: 23,
				opacity: 1,
				padding: '3px 25px',
				color: 'white',
			}
		},
	];

	const tab = linksData.find((link) => props.location.pathname === link.path) || {}
	const [selectedTab, setSelectedTab] = useState(tab.id || 0);

	const onLinkClicked = (id, path) => {
		setSelectedTab(id);
		props.history.push(path)
	}

	const welcomeToAppleBody = () => (
		<div className="welcome_body">
			<div className="welcome_intro_text">
				Welcome to Apple
			</div>
			<img className="welcome_intro_logo" src={appleGrey} alt="apple logo"/>
			<a className="welcome_intro_link" href="/welcome">See our Products</a>
			<div className="welcome_intro_product_link">
				<img className="welcome_intro_product_link_img" src={computerFrame} alt="go to macbook"/>
				<img className="welcome_intro_product_link_img" src={iphoneFrame} alt="go to iphone"/>
				<img className="welcome_intro_product_link_img" src={iWatchFrame} alt="go to iwatch"/>
			</div>
		</div>
	)

	const renderHeader = (body) => {
		return () => (
			<div className="welcome_container">
				<NavHeaderLinks links={linksData} selectedTab={selectedTab}/>
				{body}
			</div>
		)
	}

	return (
		<div>
			<AnimatedRoute
				exact
				path="/welcome"
				component={renderHeader(welcomeToAppleBody())}
				atEnter={{ opacity: 0 }}
				// atLeave={{ opacity: 0 }}
				atActive={{ opacity: 1 }}
			/>
			<AnimatedRoute
				path="/welcome/iphone"
				component={renderHeader(<Iphone/>)}
				atEnter={{ offset: 100 }}
				// atLeave={{ offset: -100 }}
				atActive={{ offset: 0 }}
				mapStyles={(styles) => ({
					transform: `translateY(${styles.offset}%)`,
				})}
			/>
			<AnimatedRoute
				path="/welcome/iphone1"
				component={renderHeader(<Iphone/>)}
				atEnter={{ offset: 100 }}
				// atLeave={{ offset: -100 }}
				atActive={{ offset: 0 }}
				mapStyles={(styles) => ({
					transform: `translateX(${styles.offset}%)`,
				})}
			/>
			<AnimatedRoute
				path="/welcome/watch"
				component={renderHeader(<IWatch/>)}
				atEnter={{ opacity: 0 }}
				// atLeave={{ opacity: 0 }}
				atActive={{ opacity: 1 }}
			/>
		</div>
	)
}
