module.exports = systemJumps

const axios = require('axios')
const { link, dataSource } = require('../../../esi.json')

async function systemJumps() {
let returningData;

    await axios.get(`${link}universe/systems/system_jumps/?datasource=${dataSource}`)
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