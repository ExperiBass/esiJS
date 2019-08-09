module.exports = corpHistory

const axios = require('axios')
const { link, dataSource } = require('../../esi.json')

/**
 * GGet a list of all the corporations a character has been a member of.
 * @exports corpHistory
 * @async
 * @param charID {number} The character to get the history of.
 * @returns {object} The character's history.
 */

async function corpHistory(charID) {
    let returningData;
    if (!charID || typeof charID !== 'number') {
        console.error(`The function 'corpHistory' needs a character ID!`)
        throw Error('corpHistory needs a char ID')
    }

    await axios.get(`${link}characters/${charID}/corporationhistory/?datasource=${dataSource}`)
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