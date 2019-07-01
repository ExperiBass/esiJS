module.exports = allianceHistory

const axios = require('axios')
const { link } = require('../../esi.json')

async function allianceHistory(corpID) {
    let returningData;
    if (!corpID) {
        console.error(`The function 'allianceHistory' needs a corp ID!`)
        return 'allianceHistory needs a corporation ID'
    }

    await axios.get(`${link}corporations/${corpID}/alliancehistory/?datasource=tranquility`)
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
