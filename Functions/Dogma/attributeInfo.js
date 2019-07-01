module.exports = attrInfo

const axios = require('axios')
const { link } = require('../../esi.json')

async function attrInfo(attr) {
    let returningData;
    if (!attr) {
        console.error(`The function 'attrInfo' needs a attribute as its first argument!`)
        return 'attrInfo needs attribute'
    }

    await axios.get(`${link}dogma/attributes/${attr}/?datasource=tranquility`)
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