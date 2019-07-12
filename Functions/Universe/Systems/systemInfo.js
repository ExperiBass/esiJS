module.exports = systemInfo

const axios = require('axios')
const { link, dataSource } = require('../../../esi.json')

async function systemInfo(systemID) {
    let returningData;
    if (!systemID || typeof systemID !== 'number') {
        console.error(`The function 'systemInfo' needs a system ID!`)
        throw Error('systemInfo needs a system ID')
    }

    await axios.get(`${link}universe/systems/${systemID}/?datasource=${dataSource}`)
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