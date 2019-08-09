module.exports = icon

/**
 * Get the icon urls for a alliance.
 * @exports icon
 * @async
 * @param ID {number} The alliance ID to get the icon of.
 * @returns {object} Links to the different sizes of the alliance icon.
 */

const axios = require('axios')
const { link, dataSource } = require('../../esi.json')

async function icon(ID) {
    let returningData;

    if (!ID || typeof ID !== 'number') {
        console.error(`The function 'icon' requires a alliance ID!`)
        throw Error('icon requires alliance ID')
    }

    await axios.get(`${link}alliances/${ID}/icons/?datasource=${dataSource}`)
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