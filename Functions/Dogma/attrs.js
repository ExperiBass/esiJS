module.exports = attrs

const axios = require('axios')
const { link, dataSource } = require('../../esi.json')

/**
 * Get a list of dogma attribute ids.
 * @exports attrs
 * @async
 * @returns {array} A array of all attributes.
 */

async function attrs() {
    let returningData;

    await axios.get(`${link}dogma/attributes/?datasource=${dataSource}`)
        .then(response => {
            returningData = Promise.resolve(response.data)
        })
        .catch(function(e) {
            let error = e.response.data.error
            console.error(`From ESI:`,error)
            throw Error(error)
        })
        
    return returningData;
}
