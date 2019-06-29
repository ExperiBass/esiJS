module.exports = alliances

let axios = require('axios')
let { link } = require('../../esi.json')

async function alliances() {
let returningData;

    await axios.get(`${link}alliances/?datasource=tranquility`)
        .then(response => {
            returningData = Promise.resolve(response.data)
        })
        .catch(function(e) {
            console.error(e.response.data.error)
            return e.response.data.error
        })

        return returningData;
}