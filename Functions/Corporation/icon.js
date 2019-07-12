module.exports = icons

const axios = require('axios')
const { link, dataSource } = require('../../esi.json')

async function icons(corpID) {
    let returningData;
    if (!corpID) {
        console.error(`The function 'icons' needs a corp ID!`)
        throw Error('icons needs a corporation ID')
    }

    await axios.get(`${link}corporations/${corpID}/icons/?datasource=${dataSource}`)
        .then(response => {
            returningData = Promise.resolve(response.data)
        })
        .catch(function(e) {
            let error = e.response.data.error
            console.error(`From ESI:`,error)
            throw Error(error)
        })
    return returningData;
}
