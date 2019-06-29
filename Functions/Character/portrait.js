module.exports = portrait

let axios = require('axios')
let { link } = require('../../esi.json')

async function portrait(charID) {
    let returningData;
    if (!charID) {
        console.error(`The function 'portrait' needs a character ID!`)
        return 'portrait needs a char ID'
    }

    await axios.get(`${link}characters/${charID}/portrait/?datasource=tranquility`)
        .then(response => {
            returningData = Promise.resolve(response.data)
        })
        .catch(function(e) {
            console.error(e.response.data.error)
            return e.response.data.error
        })
    return returningData;
}
