module.exports = info

let axios = require('axios')
let { link } = require('../../esi.json')

async function info(corpID) {
    let returningData;
    if (!corpID) {
        console.error(`The function 'info' needs a corp ID!`)
        return 'info needs a corporation ID'
    }

    await axios.get(`${link}corporations/${corpID}/?datasource=tranquility`)
        .then(response => {
            returningData = Promise.resolve(response.data)
        })
        .catch(function(e) {
            console.error(e.response.data.error)
            return e.response.data.error
        })
    return returningData;
}