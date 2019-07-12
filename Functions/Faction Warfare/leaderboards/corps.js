module.exports = corporations

const axios = require('axios')
const { link, dataSource } = require('../../../esi.json')

async function corporations() {
let returningData;

    await axios.get(`${link}fw/leaderboards/corporations/?datasource=${dataSource}`)
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