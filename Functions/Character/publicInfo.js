module.exports = publicInfo

let axios = require('axios')
let { link } = require('../../esi.json')

async function publicInfo(charID) {
    let returningData;
    if (!charID) {
        console.error(`The function 'publicInfo' needs a character ID!`)
        return 'publicInfo needs char ID'
    }

    await axios.get(`${link}characters/${charID}/?datasource=tranquility`)
        .then(response => {
            returningData = Promise.resolve(response.data)
        })
        .catch(function(e) {
            console.error(e.response.data.error)
            return e.response.data.error
        })
    return returningData;
}