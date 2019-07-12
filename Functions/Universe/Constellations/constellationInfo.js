module.exports = constellationInfo

const axios = require('axios')
const { link, dataSource } = require('../../../esi.json')

async function constellationInfo(constellationID) {
    let returningData;
    if (!constellationID || typeof constellationID !== 'number') {
        console.error(`The function 'constellationInfo' needs a constellation ID!`)
        throw Error('constellationInfo needs a constellation ID')
    }

    await axios.get(`${link}universe/constellations/${constellationID}/?datasource=${dataSource}`)
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