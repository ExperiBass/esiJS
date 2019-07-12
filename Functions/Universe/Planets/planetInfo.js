module.exports = planetInfo

const axios = require('axios')
const { link, dataSource } = require('../../../esi.json')

async function planetInfo(planetID) {
    let returningData;
    if (!planetID || typeof planetID !== 'number') {
        console.error(`The function 'planetInfo' needs a planet ID!`)
        throw Error('planetInfo needs a planet ID')
    }

    await axios.get(`${link}universe/planets/${planetID}/?datasource=${dataSource}`)
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