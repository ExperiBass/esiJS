module.exports = stargateInfo

const axios = require('axios')
const { link, dataSource } = require('../../../esi.json')

async function stargateInfo(stargateID) {
    let returningData;
    if (!stargateID || typeof stargateID !== 'number') {
        console.error(`The function 'stargateInfo' needs a stargate ID!`)
        throw Error('stargateInfo needs a stargate ID')
    }

    await axios.get(`${link}universe/stargates/${stargateID}/?datasource=${dataSource}`)
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