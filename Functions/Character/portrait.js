module.exports = portrait

const axios = require('axios')
const { link, dataSource } = require('../../esi.json')

/**
 * Get the portrait of a character.
 * @exports portrait
 * @async
 * @param charID {number} The character to get the portrait of.
 * @returns The character portrait.
 */

async function portrait(charID) {
    let returningData;
    if (!charID || typeof charID !== 'number') {
        console.error(`The function 'portrait' needs a character ID!`)
        throw Error('portrait needs a char ID')
    }

    await axios.get(`${link}characters/${charID}/portrait/?datasource=${dataSource}`)
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
