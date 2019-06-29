module.exports = corpHistory

let axios = require('axios')
let { link } = require('../../esi.json')

async function corpHistory(charID) {
    let returningData;
    if (!charID) {
        console.error(`The function 'corpHistory' needs a character ID!`)
        return 'corpHistory needs a char ID'
    }

    await axios.get(`${link}characters/${charID}/corporationhistory/?datasource=tranquility`)
        .then(response => {
            returningData = Promise.resolve(response.data)
        })
        .catch(function(e) {
            console.error(e.response.data.error)
            return e.response.data.error
        })
        
    return returningData;
}
