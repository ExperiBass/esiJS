module.exports = attrs

let axios = require('axios')
let { link } = require('../../esi.json')

async function attrs() {
    let returningData;

    await axios.get(`${link}dogma/attributes/?datasource=tranquility`)
        .then(response => {
            returningData = Promise.resolve(response.data)
        })
        .catch(function(e) {
            console.error(e.response.data.error)
            return e.response.data.error
        })
        
    return returningData;
}
