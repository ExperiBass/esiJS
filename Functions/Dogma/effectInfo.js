module.exports = effectInfo

const axios = require('axios')
const { link, dataSource } = require('../../esi.json')

/**
 * Get information on a dogma effect.
 * @exports effectInfo
 * @async
 * @returns {object} Info on the effect.
 */

async function effectInfo(dogma) {
    let returningData;
    if (!dogma) {
        console.error(`The function 'effectInfo' needs a dogma effect as its first argument!`)
        throw Error('effectInfo needs dogma effect')
    }

    await axios.get(`${link}dogma/effects/${dogma}/?datasource=${dataSource}`)
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