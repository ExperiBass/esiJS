module.exports = attrInfo

let axios = require('axios')
let { link } = require('../../esi.json')

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
            console.error(e.response.data.error)
            return e.response.data.error
        })
        
    return returningData;
}