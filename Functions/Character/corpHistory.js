module.exports = corpHistory

let axios = require('axios')
let { link } = require('../../esi.json')

async function corpHistory(charID) {
    let returningData;
    if (!charID) {
        console.error(`The function 'corpHistory' needs a character ID!`)
        return Error('corpHistory needs a char ID')
    }

    await axios.get(`${link}characters/${charID}/corporationhistory/?datasource=tranquility`)
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

async function a() {
    let aff = corpHistory()
    console.log(aff)
}
console.log(a())