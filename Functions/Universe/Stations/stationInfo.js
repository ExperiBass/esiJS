module.exports = stationInfo

const axios = require('axios')
const { link, dataSource } = require('../../../esi.json')

async function stationInfo(stationID) {
    let returningData;
    if (!stationID || typeof stationID !== 'number') {
        console.error(`The function 'stationInfo' needs a station ID!`)
        return Error('stationInfo needs a station ID')
    }

    await axios.get(`${link}universe/stations/${stationID}/?datasource=${dataSource}`)
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