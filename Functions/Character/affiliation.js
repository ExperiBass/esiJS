module.exports = affiliation

const axios = require('axios')
const { link, dataSource } = require('../../esi.json')

/**
 * Bulk lookup of character IDs to corporation, alliance and faction.
 * @exports affiliation
 * @async
 * @param charID {array} A array of player IDs.
 * @returns {object} Affiliation of characters.
 */
async function affiliation(charID) {

    if (!charID || typeof charID !== 'object') {
        console.error(`The function 'affiliation' requires a array!`)
        throw Error('affiliation requires array')
    }

        response = await axios.post(`${link}characters/affiliation/?datasource=${dataSource}`, charID)
        .catch(function(e) {
            let error = e.response.data.error
            console.error(`From ESI:`,error)
            throw Error(error)
        })
    return response.data
}