module.exports = icons

const axios = require('axios')
const { link, dataSource } = require('../../esi.json')

/**
 * Get the icon urls for a corporation.
 * @exports icon
 * @async
 * @param corpID {number} The corporation ID to get the icon of. 
 * @returns {object} Links to the different sizes of the corporation icon.
 */

async function icons(corpID) {
    let returningData;
    if (!corpID) {
        console.error(`The function 'icons' needs a corp ID!`)
        throw Error('icons needs a corporation ID')
    }

    await axios.get(`${link}corporations/${corpID}/icons/?datasource=${dataSource}`)
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
