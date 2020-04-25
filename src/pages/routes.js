import React from 'react';
import {
  Switch,
  Route,
	Redirect,
} from 'react-router-dom';
import { AnimatedSwitch, AnimatedRoute } from 'react-router-transition';

import AuthPage from './AuthPage';
import WelcomeApple from './WelcomeApple';

export const ROUTES = {
	// HOME: '/',
	WELCOME: '/welcome',
	AUTH: '/auth',
};

const ProtectedRoute = ({ component: Component, session, ...rest }) => (
	<Route
	{...rest}
	render={
		(props) => (
			session.userLoggedIn ? <Component {...props}/> : <Redirect to={ROUTES.AUTH}/>
		)}
	>

	</Route>
);

export function HomeRoutes(props) {
// change back to use protected routes
	return (
		<AnimatedSwitch
			atEnter={{ opacity: 0 }}
			atLeave={{ opacity: 0 }}
			atActive={{ opacity: 1 }}
		>
			<Route
				path={ROUTES.WELCOME}
				component={WelcomeApple}
				{...props}
			/>

			<Route
				path={ROUTES.AUTH}
				render={(locationProps) => {
					return <AuthPage {...props} {...locationProps}/>
				}}
			/>
			<Route path="*" render={() => <Redirect to={ROUTES.AUTH}/>}/>
		</AnimatedSwitch>
	);
}

