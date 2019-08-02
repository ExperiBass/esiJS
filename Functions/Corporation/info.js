module.exports = info

const axios = require('axios')
const { link, dataSource } = require('../../esi.json')

/**
 * Get info on a corporation.
 * @exports info
 * @async
 * @param corpID {number} The corporation ID to get info from.
 * @returns Info on the corporation.
 */

async function info(corpID) {
    let returningData;
    if (!corpID) {
        console.error(`The function 'info' needs a corp ID!`)
        throw Error('info needs a corporation ID')
    }

    await axios.get(`${link}corporations/${corpID}/?datasource=${dataSource}`)
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