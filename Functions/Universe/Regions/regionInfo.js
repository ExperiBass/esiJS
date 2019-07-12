module.exports = regionInfo

const axios = require('axios')
const { link, dataSource } = require('../../../esi.json')

async function regionInfo(regionID) {
    let returningData;
    if (!regionID || typeof regionID !== 'number') {
        console.error(`The function 'regionInfo' needs a region ID!`)
        throw Error('regionInfo needs a region ID')
    }

    await axios.get(`${link}universe/regions/${regionID}/?datasource=${dataSource}`)
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