// implementation of the vim.wikia.com API against a cors-enabled proxy server

export const fetchTips = (domain = "http://localhost:9090/vim.wikia.com") => {

	let url = new URL(domain + "/api/v1/Articles/List")

	let headers = new Headers()
	headers.append("Accept","application/json")
	headers.append("X-Requested-With", "cors-proxy-server")

	const context = {
		method: 'GET',
		headers: headers,
		mode: 'cors',
		cache: 'default'
	}

	return fetch(url,context)
		.then(response => {
			if (response.ok) {
				return response.json()
			} else {
				throw new Error("API response was not OK")
			}
		})
}
