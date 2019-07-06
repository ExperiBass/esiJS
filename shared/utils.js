const axios = require('axios')
const { base, neoLink, neoDataSource } = require('../esi.json')

function doGet(category, details) {
	return axios.get(`${base}/${neoLink}/${category}${details}?datasource=${neoDataSource}`)
	.then(response => response.data)
	.catch(function(e) {
		const error = e.response.data.error
		console.error(`From ESI: `,error)
		throw Error(error)
	})
}

module.exports = {
	doGet
}