module.exports = icons

const axios = require('axios')
const { link } = require('../../esi.json')

async function icons(corpID) {
    let returningData;
    if (!corpID) {
        console.error(`The function 'icons' needs a corp ID!`)
        return 'icons needs a corporation ID'
    }

    await axios.get(`${link}corporations/${corpID}/icons/?datasource=tranquility`)
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
