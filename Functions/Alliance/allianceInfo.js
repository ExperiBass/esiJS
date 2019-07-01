module.exports = info

const axios = require('axios')
const { link } = require('../../esi.json')

async function info(ID) {
    let returningData;

    if (!ID || typeof ID !== 'number') {
        console.error(`the function 'info' requires a alliance ID!`)
        return Error('info requires alliance ID')
    }

    await axios.get(`${link}alliances/${ID}/?datasource=tranquility`)
        .then(response => {
            returningData = Promise.resolve(response.data)
        })
        .catch(function(e) {
            let error = e.response.data.error
            console.error(`From ESI:`,error)
            return Error(error)
        })
    return returningData
}