// An implementation of the vim.wikia.com API against a cors-enabled proxy server

// TODO: replace the localhost default with an external proxy server (I need to make one)
export const fetchWikiaArticles = (domain = "http://localhost:9090/vim.wikia.com") => {

	let url = new URL(domain + "/api/v1/Articles/List")
	const params = {
		category: "VimTip",
		limit: 10000,
	}
	Object.keys(params).forEach(
		key => url.searchParams.append(key, params[key])
	)

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

// Add the basepath to the urls of the articles
export const fetchTips = (domain) => fetchWikiaArticles(domain)
	.then(json => json.items.map(tip =>
		Object.assign({},tip,{url: json.basepath + tip.url})
	))
