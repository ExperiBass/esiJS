module.exports = dynamicItemInfo

const axios = require('axios')
const { link, dataSource } = require('../../esi.json')

/**
 * Returns info about a dynamic item resulting from mutation with a mutaplasmid..
 * @exports dynamicItemInfo
 * @async
 * @returns {object} Info on the mutation.
 */

async function dynamicItemInfo(itemID, typeID) {
    let returningData;
    if (!itemID) {
        console.error(`The function 'dynamicItemInfo' needs a item ID as its first argument!`)
        throw Error('dynamicItemInfo needs item ID')
    }
    if (!typeID) {
        console.error(`The function 'dynamicItemInfo' needs a type ID as its first argument!`)
        throw Error('dynamicItemInfo needs type ID')
    }

    await axios.get(`${link}dogma/dynamic/items/${typeID}/${itemID}/?datasource=${dataSource}`)
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