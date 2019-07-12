module.exports = attrInfo

const axios = require('axios')
const { link, dataSource } = require('../../esi.json')

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