module.exports = corpHistory

let axios = require('axios')
let { link } = require('../../esi.json')

async function corpHistory(charID) {
    let returningData;
    if (!charID) {
        console.error(`The function 'corpHistory' needs a character ID!`)
    }

    await axios.get(`${link}characters/${charID}/corporationhistory/?datasource=tranquility`)
        .then(response => {
            if (response.statusText != 'OK') {
                console.error(response.error)
                return true
            }
            returningData = Promise.resolve(response.data)
        })
    return returningData;
}
