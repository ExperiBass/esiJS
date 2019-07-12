module.exports = systemKills

const axios = require('axios')
const { link, dataSource } = require('../../../esi.json')

async function systemKills() {
let returningData;

    await axios.get(`${link}universe/systems/system_kills/?datasource=${dataSource}`)
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