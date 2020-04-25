// This is a wrapper for all my serivces it helps with error
// logging and saving and appending session without doing it
// in every single service
export default class BaseService {
	async request(url, options) {
		if (options.mocked) {
			return Promise.resolve(options.mockdata || {})
		}

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