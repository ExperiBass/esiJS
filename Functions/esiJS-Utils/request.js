const axios = require('axios')
const { getSettings } = require('../utility')
const throwError = require('./throwError')

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
    const { link, dataSource, authToken, language } = getSettings()
    const test = /\/(?=\/)(?<!https:\/)/g
    let headers = {
        'accept': 'application/json',
        'Accept-Language': `${language}`,
        'Content-Type': 'application/json',
        'user-agent': 'esijs'
    }
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
    // Add in the language
    if (language !== '') {
        fullURL += `&language=${language.split('/').join('-')}`
    }
    if (authToken !== '') {
        headers['authorization'] = `Bearer: ${authToken}`
        fullURL += `&token=${authToken}`
        // Include both the headers and the query just in case one or the other fails
    }

    // Check the URL for extra forward slashes
    fullURL = fullURL.replace(test, '')

    // If post, make it a post request, make it a get otherwise
    if (post) {
        request = axios.post(fullURL, body, {
            headers
        })
    } else {
        request = axios.get(fullURL, {
            headers
        })
    }

    

    // Return the promise request, pre set the 'then' and 'catch' clauses
    return request
        .then(response => {
           let data = {    
                headers: response.headers,
                data: response.data
            }

            return data
        }).catch(error => {
            const esiError = error.response.data.error
            const url = fullURL.split('&token')[0]
            throw throwError(esiError, `ESI_ERROR`, url)
        })
}

module.exports = makeRequest