import React from 'react';
import {
  Switch,
  Route,
	Redirect,
} from 'react-router-dom';
import AuthPage from './AuthPage';
import NewProducts from './NewProducts';
import WelcomeApple from './WelcomeApple';

export const ROUTES = {
	HOME: '/',
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
		<Switch>
			<Route path={ROUTES.WELCOME} component={WelcomeApple} {...props}/>
			<Route exact path={ROUTES.HOME} component={NewProducts} {...props}/>
			<Route
				path={ROUTES.AUTH}
				render={(locationProps) => {
					return <AuthPage {...props} {...locationProps}/>
				}}
			/>
		</Switch>
	);
}
