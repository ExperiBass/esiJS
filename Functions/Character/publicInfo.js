module.exports = publicInfo

const axios = require('axios')
const { link, dataSource } = require('../../esi.json')

/**
 * Get the public info of a character.
 * @exports publicInfo
 * @async
 * @param charID {number} The character to get the public info of.
 * @returns public info on a character.
 */

async function publicInfo(charID) {
    let returningData;
    if (!charID || typeof charID !== 'number') {
        console.error(`The function 'publicInfo' needs a character ID!`)
        throw Error('publicInfo needs char ID')
    }

    await axios.get(`${link}characters/${charID}/?datasource=${dataSource}`)
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