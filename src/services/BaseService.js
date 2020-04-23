export default class BaseService {
	async request(url, options) {
		return fetch(url, options)
		.then(async (res) => {
			return await res.json();
		})
		.catch((err) => {
			// General error logging for all services
			console.log(`url: ${url}`)
			console.log(`options: ${options}`)
			console.log(`error: ${err}`)
			throw err;
		})
	}
}