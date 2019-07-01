module.exports = portrait

const axios = require('axios')
const { link } = require('../../esi.json')

async function portrait(charID) {
    let returningData;
    if (!charID || typeof charID !== 'number') {
        console.error(`The function 'portrait' needs a character ID!`)
        return Error('portrait needs a char ID')
    }

    await axios.get(`${link}characters/${charID}/portrait/?datasource=tranquility`)
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
