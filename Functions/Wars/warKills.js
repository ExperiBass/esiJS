module.exports = warKills

const axios = require('axios')
const { link, dataSource } = require('../../esi.json')

async function warKills(warID) {
    let returningData;
    if (!warID || typeof warID !== 'number') {
        console.error(`The function 'warKills' needs a war ID!`)
        throw Error('warKills needs a war ID')
    }

    await axios.get(`${link}wars/${warID}/killmails/?datasource=${dataSource}`)
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