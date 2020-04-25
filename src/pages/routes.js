import React from 'react';
import {
  Route,
	Redirect,
} from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';

import AuthPage from './AuthPage';
import WelcomeApple from './WelcomeApple';

export const ROUTES = {
	WELCOME: '/welcome',
	AUTH: '/auth',
};

const ProtectedRoute = ({ component: Component, session, ...rest }) => (
	<Route
	{...rest}
	render={
		(props) => (
			session.userLoggedIn ? <Component {...props} session={session}/> : <Redirect to={ROUTES.AUTH}/>
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
			<ProtectedRoute
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

