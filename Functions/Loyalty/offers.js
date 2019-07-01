module.exports = offers

const axios = require('axios')
const { link } = require('../../esi.json')

async function offers(corpID) {
let returningData;

    if (!corpID || typeof corpID !== 'number') {
        console.error('offers requires a valid corporation ID!')
        return Error('offers requires valid corporation ID')
    }

    await axios.get(`${link}loyalty/stores/${corpID}/offers/?datasource=tranquility`)
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