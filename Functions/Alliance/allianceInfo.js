module.exports = allianceInfo

let axios = require('axios')
let { link } = require('../../esi.json')

async function allianceInfo(ID) {
    let returningData;

    if (!ID) {
        console.error(`the function 'allianceInfo' requires a alliance ID!`)
        return
    }

    await axios.get(`${link}alliances/${ID}/?datasource=tranquility`)
        .then(response => {
            if (response.statusText != 'OK') {
                console.error(response.error)
                return true
            }
            returningData = Promise.resolve(response.data)
        })
        .catch(function (error) {
            // handle error
            console.log(error);
          })
}