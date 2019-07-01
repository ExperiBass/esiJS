module.exports = npcCorps

const axios = require('axios')
const { link } = require('../../esi.json')

async function npcCorps() {
    let returningData;

    await axios.get(`${link}corporations/npccorps/?datasource=tranquility`)
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
