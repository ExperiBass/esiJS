module.exports = corpHistory

const axios = require('axios')
const { link, dataSource } = require('../../esi.json')

async function corpHistory(charID) {
    let returningData;
    if (!charID || typeof charID !== 'number') {
        console.error(`The function 'corpHistory' needs a character ID!`)
        return Error('corpHistory needs a char ID')
    }

    await axios.get(`${link}characters/${charID}/corporationhistory/?datasource=${dataSource}`)
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