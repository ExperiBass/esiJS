module.exports = corps
/**
 * Get the corporations in a alliance.
 * @exports corps
 * @async
 * @param id {number} The alliance ID to get the corporations from.
 * @returns The corporations in the alliance.
 */
const axios = require('axios')
const { link, dataSource } = require('../../esi.json')

async function corps(ID) {
    let returningData;

    if (!ID || typeof ID !== 'number') {
        console.error(`The function 'corps' requires a alliance ID!`)
        throw Error('corps requires a alliance ID')
    }

    await axios.get(`${link}alliances/${ID}/corporations/?datasource=${dataSource}`)
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