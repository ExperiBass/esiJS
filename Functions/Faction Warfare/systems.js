module.exports = systems

const axios = require('axios')
const { link, dataSource } = require('../../esi.json')

async function systems() {
let returningData;

    await axios.get(`${link}fw/systems/?datasource=${dataSource}`)
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