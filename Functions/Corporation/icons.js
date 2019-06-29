module.exports = icons

let axios = require('axios')
let { link } = require('../../esi.json')

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
            console.error(e.response.data.error)
            return e.response.data.error
        })
    return returningData;
}
