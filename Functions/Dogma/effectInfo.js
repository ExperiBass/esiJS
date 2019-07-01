module.exports = effectInfo

const axios = require('axios')
const { link } = require('../../esi.json')

async function effectInfo(dogma) {
    let returningData;
    if (!dogma) {
        console.error(`The function 'effectInfo' needs a dogma effect as its first argument!`)
        return 'effectInfo needs dogma effect'
    }

    await axios.get(`${link}dogma/effects/${dogma}/?datasource=tranquility`)
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