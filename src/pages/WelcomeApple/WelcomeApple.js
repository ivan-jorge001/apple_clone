import React from 'react'
import NavHeaderLinks from '../../components/NavHeaderLinks/NavHeaderLinks';
import Iphone from '../Iphone';
import appleGrey from '../../assets/images/apple_grey.svg'
import computerFrame from '../../assets/images/computer_frame.svg'
import iphoneFrame from '../../assets/images/iphone_frame.svg'
import iWatchFrame from '../../assets/images/iwatch_frame.svg'
import './WelcomeApple.css'
import { AnimatedRoute } from 'react-router-transition';

export default function WelcomeApple(props) {
	console.log(props);
	const linksData = [
		{
			id: 0,
			title: 'iPhone',
			// put in a constant
			onClick: () => props.history.push('/welcome/iphone'),
		},
		{
			id: 1,
			title: 'MacBook Pro',
			onClick: () => props.history.push('/welcome/iphone1'),
		},
		{
			id: 2,
			title: 'Watch',
			onClick: () => props.history.push('/welcome/iphone2'),
		},
		{
			id: 3,
			title: 'Notify me',
			onClick: () => props.history.push('/notifyme'),
			style: {
				background: '#5AC8FA 0% 0% no-repeat padding-box',
				borderRadius: 23,
				opacity: 1,
				padding: '3px 25px',
				color: 'white',
			}
		},
	];

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
				<NavHeaderLinks links={linksData}/>
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
				path="/welcome/iphone2"
				component={renderHeader(<Iphone/>)}
				atEnter={{ opacity: 0 }}
				// atLeave={{ opacity: 0 }}
				atActive={{ opacity: 1 }}
			/>
		</div>
	)
}
