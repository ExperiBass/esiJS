module.exports = alliances
/**
 * Get active alliances.
 * @exports alliances
 * @async
 * @returns A array of all active alliances.
 */
const axios = require('axios')
const { link, dataSource } = require('../../esi.json')

async function alliances() {
let returningData;

    await axios.get(`${link}alliances/?datasource=${dataSource}`)
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