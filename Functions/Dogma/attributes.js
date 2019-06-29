module.exports = attrs

let axios = require('axios')
let { link } = require('../../esi.json')

async function attrs() {
    let returningData;

    await axios.get(`${link}dogma/attributes/?datasource=tranquility`)
        .then(response => {
            if (response.statusText != 'OK') {
                console.error(response.error)
                return true
            }
            returningData = Promise.resolve(response.data)
        })
    return returningData;
}
