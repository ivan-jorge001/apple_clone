import React from 'react';
import {
  Switch,
  Route,
	Redirect,
} from 'react-router-dom';
import AuthPage from './AuthPage';
import NewProducts from './NewProducts';
import WelcomeApple from './WelcomeApple';

const ROUTES = {
	HOME: '/',
	WELCOME: '/welcome',
	AUTH: '/auth',
};

const ProtectedRoute = ({ component: Component, isUserLoggedIn, ...rest }) => (
	<Route
	{...rest}
	render={
		(props) => (
			isUserLoggedIn ? <Component {...props}/> : <Redirect to={ROUTES.AUTH}/>
		)}
	>

	</Route>
);

export const HomeRoutes = ({ user }) => {
	return (
		<Switch>
			<ProtectedRoute path={ROUTES.HOME} component={NewProducts} isUserLoggedIn={false}/>
			<ProtectedRoute path={ROUTES.WELCOME} component={WelcomeApple} isUserLoggedIn={false}/>
			<Route path={ROUTES.AUTH} component={AuthPage}/>
		</Switch>
	);
}
