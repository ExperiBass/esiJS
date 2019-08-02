module.exports = allianceHistory

const axios = require('axios')
const { link, dataSource } = require('../../esi.json')

/**
 * Get the alliance history of a corporation.
 * @exports allianceHistory
 * @async
 * @param corpID {number} The corporation to get the alliance history of.
 * @returns A array of alliance IDs (empty array if none).
 */

async function allianceHistory(corpID) {
    let returningData;
    if (!corpID || typeof corpID !== 'number') {
        console.error(`The function 'allianceHistory' needs a corp ID!`)
        throw Error('allianceHistory needs a corporation ID')
    }

    await axios.get(`${link}corporations/${corpID}/alliancehistory/?datasource=${dataSource}`)
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
