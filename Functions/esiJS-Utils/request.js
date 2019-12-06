const axios = require('axios')
const { link, dataSource } = require('../../esi.json')

/**
 *  subUrl -> remaining url part specific to the function call
 * 
 *  post -> state if the request is of type post, will make a get request otherwise
 * 
 *  body -> data to pass to the request body for requests of type post
 * 
 *  query -> aditional query parameters
 */
function makeRequest ({ subUrl, post = false, body, query}) {
    let request
    let fullURL = `${link}${subUrl}/?datasource=${dataSource}`
    
    // If query params are defined, add them to the end of the full url
    if (query) {
        // Cicle each query entry and add to the full url in the form '&key=value'
        // Because all request already have '?datasource' no need to manage the ? on the first query param
        Object.keys(query).forEach(queryKey => {
            // query params undefined or empty, or array of length 0
            if (query[queryKey] === undefined || query[queryKey] === '') {
                return
            }
            if (query[queryKey].length && query[queryKey].length === 0) {
                return
            }
            fullURL += `&${queryKey}=${query[queryKey]}`
        })
    }

    // If post, make it a post request, make it a get otherwise
    if (post) {
        request = axios.post(fullURL, body) 
    } else {
        request = axios.get(fullURL) 
    }

    // Return the promise request, pre set the 'then' and 'catch' clauses
    return request
        .then(response => {
            let data = {
                header: response.header,
                data: response.data
            }
            return data
        }).catch((error) => {
            const esiError = error.response.data.error
            console.error(`Call to '${subUrl}' failed with ESI error:`, esiError)
            throw Error(esiError)
        })
}

module.exports = makeRequest