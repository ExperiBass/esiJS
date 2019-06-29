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
            if (response.statusText != 'OK') {
                console.error(response.error)
                return true
            }
            returningData = Promise.resolve(response.data)
        })
    return returningData;
}