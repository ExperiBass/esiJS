module.exports = beltInfo

const axios = require('axios')
const { link, dataSource } = require('../../../esi.json')

async function beltInfo(beltID) {
    let returningData;
    if (!beltID || typeof beltID !== 'number') {
        console.error(`The function 'beltInfo' needs a belt ID!`)
        throw Error('beltInfo needs a belt ID')
    }

    await axios.get(`${link}universe/asteroid_belts/${beltID}/?datasource=${dataSource}`)
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