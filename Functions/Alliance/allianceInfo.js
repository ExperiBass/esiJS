module.exports = info

let axios = require('axios')
let { link } = require('../../esi.json')

async function info(ID) {
    let returningData;

    if (!ID) {
        console.error(`the function 'info' requires a alliance ID!`)
        return 'info requires alliance ID'
    }

    await axios.get(`${link}alliances/${ID}/?datasource=tranquility`)
        .then(response => {
            returningData = Promise.resolve(response.data)
        })
        .catch(function(e) {
            console.error(e.response.data.error)
            return e.response.data.error
        })
    return returningData
}