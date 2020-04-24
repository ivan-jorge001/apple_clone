import BaseService from './BaseService';
/**
 * What I call a service:
 * For me it is like a its own separete module that is in charge of calling the API
 * example in an app where I have users and employees, for me there two would be
 * two different services that are in charge of retrieving information about a customer
 * or employee
 */

class AuthService extends BaseService {
	get url() {
		return process.env.API_URL || '';
	}

	login(username, password) {
		let url =`${this.url}/login`
		console.log(username, password)
		return this.request(url, {
			mocked: true,
			method: 'POST',
			body: JSON.stringify({ username, password}),
			headers: {
				'Content-Type': 'application/json'
			},
		})
	}

	signup(data) {
		let url =`${this.url}/signup`
		console.log(data)
		return this.request(url, {
			mocked: true,
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json'
			},
		})
	}


	logout() {
		return this.request(`${this.url}/logout`, {
			mocked: true,
		})
	}
}

const authService = new AuthService();
export default authService;