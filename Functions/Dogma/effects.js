module.exports = effects

let axios = require('axios')
let { link } = require('../../esi.json')

async function effects() {
    let returningData;

    await axios.get(`${link}dogma/effects/?datasource=tranquility`)
        .then(response => {
            returningData = Promise.resolve(response.data)
        })
        .catch(function(e) {
            console.error(e.response.data.error)
            return e.response.data.error
        })

    return returningData;
}