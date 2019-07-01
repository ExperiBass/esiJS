module.exports = dynamicItemInfo

const axios = require('axios')
const { link } = require('../../esi.json')

async function dynamicItemInfo(itemID, typeID) {
    let returningData;
    if (!itemID) {
        console.error(`The function 'dynamicItemInfo' needs a item ID as its first argument!`)
        return 'dynamicItemInfo needs item ID'
    }
    if (!typeID) {
        console.error(`The function 'dynamicItemInfo' needs a type ID as its first argument!`)
        return 'dynamicItemInfo needs type ID'
    }

    await axios.get(`${link}dogma/dynamic/items/${typeID}/${itemID}/?datasource=tranquility`)
        .then(response => {
            returningData = Promise.resolve(response.data)
        })
        .catch(function(e) {
            let error = e.response.data.error
            console.error(`From ESI:`,error)
            return Error(error)
        })
    return returningData;
}