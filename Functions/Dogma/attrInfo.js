module.exports = attrInfo

const axios = require('axios')
const { link, dataSource } = require('../../esi.json')

/**
 * Get the icon of a corporation.
 * @exports attrInfo
 * @async
 * @param attr {number} The attribute ID to get the info on. 
 * @returns Info on the attribute.
 */

async function attrInfo(attr) {
    let returningData;
    if (!attr) {
        console.error(`The function 'attrInfo' needs a attribute as its first argument!`)
        throw Error('attrInfo needs attribute')
    }

    await axios.get(`${link}dogma/attributes/${attr}/?datasource=${dataSource}`)
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