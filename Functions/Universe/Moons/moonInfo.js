module.exports = moonInfo

const axios = require('axios')
const { link, dataSource } = require('../../../esi.json')

async function moonInfo(moonID) {
    let returningData;
    if (!moonID || typeof moonID !== 'number') {
        console.error(`The function 'moonInfo' needs a moon ID!`)
        return Error('moonInfo needs a moon ID')
    }

    await axios.get(`${link}universe/moons/${moonID}/?datasource=${dataSource}`)
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