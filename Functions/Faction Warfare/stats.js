module.exports = stats

const axios = require('axios')
const { link } = require('../../esi.json')

async function stats() {
let returningData;

    await axios.get(`${link}fw/stats/?datasource=tranquility`)
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