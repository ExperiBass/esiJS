module.exports = portrait

let axios = require('axios')
let { link } = require('../../esi.json')

async function portrait(charID) {
    let returningData;
    if (!charID) {
        console.error(`The function 'portrait' needs a character ID!`)
    }

    await axios.get(`${link}characters/${charID}/portrait/?datasource=tranquility`)
        .then(response => {
            if (response.statusText != 'OK') {
                console.error(response.error)
                return true
            }
            returningData = Promise.resolve(response.data)
        })
    return returningData;
}
