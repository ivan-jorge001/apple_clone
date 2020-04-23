import BaseService from './BaseService';
/**
 * What I call a service:
 * For me it is like a its own separete module that is in charge of calling the API
 * example in an app where I have users and employees, for me there two would be
 * two different services that are in charge of retrieving information about a customer
 * or employee
 */

export default class AuthService extends BaseService {
	static get url() {
		return process.env.API_URL || '';
	}

	static login(username, password) {
		let url =`${this.url}/login`
		return this.request(url, {
			method: 'POST',
			body: JSON.stringify({ username, password}),
			headers: {
				'Content-Type': 'application/json'
				// 'Content-Type': 'application/x-www-form-urlencoded',
			},
		})
	}

	static logout() {
		return this.request(`${this.url}/logout`)
	}
}