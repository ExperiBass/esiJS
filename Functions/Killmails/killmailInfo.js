module.exports = getKillmail

const axios = require('axios')
const { link, dataSource } = require('../../esi.json')

async function getKillmail(killID, killHash) {
    let returningData;
    if (!killID || typeof killID !== 'number') {
        console.error(`The function 'getKillmail' needs a killmail ID and a killmail hash!`)
        throw Error('getKillmail needs a killmail ID and hash')
    }
    if (!killHash || typeof killHash !== 'string') {
        console.error(`The function 'getKillmail' needs a killmail ID and a killmail hash!`)
        throw Error('getKillmail needs a killmail ID and hash')
    }
    await axios.get(`${link}killmails/${killID}/${killHash}/?datasource=${dataSource}`)
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
