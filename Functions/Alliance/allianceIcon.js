module.exports = icon

const axios = require('axios')
const { link, dataSource } = require('../../esi.json')

async function icon(ID) {
    let returningData;

    if (!ID || typeof ID !== 'number') {
        console.error(`the function 'icon' requires a alliance ID!`)
        return Error('icon requires alliance ID')
    }

    await axios.get(`${link}alliances/${ID}/icons/?datasource=tranquility`)
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