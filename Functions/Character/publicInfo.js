module.exports = publicInfo

let axios = require('axios')
let { link } = require('../../esi.json')

async function publicInfo(charID) {
    let returningData;
    if (!charID) {
        console.error(`The function 'publicInfo' needs a character ID!`)
    }

    await axios.get(`${link}characters/${charID}/?datasource=tranquility`)
        .then(response => {
            if (response.statusText != 'OK') {
                console.error(response.error)
                return true
            }
            returningData = Promise.resolve(response.data)
        })
    return returningData;
}