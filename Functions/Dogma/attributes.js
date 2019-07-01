module.exports = attrs

const axios = require('axios')
const { link } = require('../../esi.json')

async function attrs() {
    let returningData;

    await axios.get(`${link}dogma/attributes/?datasource=tranquility`)
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
