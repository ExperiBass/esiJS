module.exports = publicInfo

const axios = require('axios')
const { link, dataSource } = require('../../esi.json')

async function publicInfo(charID) {
    let returningData;
    if (!charID || typeof charID !== 'number') {
        console.error(`The function 'publicInfo' needs a character ID!`)
        return Error('publicInfo needs char ID')
    }

    await axios.get(`${link}characters/${charID}/?datasource=${dataSource}`)
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