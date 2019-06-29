module.exports = allianceHistory

let axios = require('axios')
let { link } = require('../../esi.json')

async function allianceHistory(corpID) {
    let returningData;
    if (!corpID) {
        console.error(`The function 'allianceHistory' needs a character ID!`)
        return 'allianceHistory needs a corporation ID'
    }

    await axios.get(`${link}/corporations/${corpID}/alliancehistory/?datasource=tranquility`)
        .then(response => {
            if (response.statusText != 'OK') {
                console.error(response.error)
                return true
            }
            returningData = Promise.resolve(response.data)
        })
        .catch(function(e) {
            console.error(e.response.data.error)
            return e.response.data.error
        })
    return returningData;
}
