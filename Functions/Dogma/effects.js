module.exports = effects

let axios = require('axios')
let { link } = require('../../esi.json')

async function effects() {
    let returningData;

    await axios.get(`${link}dogma/effects/?datasource=tranquility`)
        .then(response => {
            if (response.statusText != 'OK') {
                console.error(response.error)
                return true
            }
            returningData = Promise.resolve(response.data)
        })
    return returningData;
}