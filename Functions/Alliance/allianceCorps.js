module.exports = corps

let axios = require('axios')
let { link } = require('../../esi.json')
async function corps(ID) {
    let returningData;

    if (!ID) {
        console.error(`the function 'corps' requires a alliance ID!`)
        return 'corps requires a alliance ID'
    }

    await axios.get(`${link}alliances/${ID}/corporations/?datasource=tranquility`)
        .then(response => {
            returningData = Promise.resolve(response.data)
        })
        .catch(function(e) {
            console.error(e.response.data.error)
            return e.response.data.error
        })

    return returningData;
}