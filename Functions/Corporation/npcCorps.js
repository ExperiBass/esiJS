module.exports = npcCorps

const axios = require('axios')
const { link, dataSource } = require('../../esi.json')

/**
 * Get a list of npc corporations.
 * @exports npcCorps
 * @async
 * @returns {array} A array of all NPC corporations.
 */

async function npcCorps() {
    let returningData;

    await axios.get(`${link}corporations/npccorps/?datasource=${dataSource}`)
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
