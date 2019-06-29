module.exports = npcCorps

let axios = require('axios')
let { link } = require('../../esi.json')

async function npcCorps() {
    let returningData;

    await axios.get(`${link}corporations/npccorps/?datasource=tranquility`)
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
