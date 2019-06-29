module.exports = allianceIcon

let axios = require('axios')
let { link } = require('../../esi.json')
async function allianceIcon(ID) {
    let returningData;

    if (!ID) {
        console.error(`the function 'allianceIcon' requires a alliance ID!`)
        return
    }

    await axios.get(`${link}alliances/${ID}/icons/?datasource=tranquility`)
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

    return returningData;
}