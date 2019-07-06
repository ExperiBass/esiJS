module.exports = types

const axios = require('axios')
const { link, dataSource } = require('../../../esi.json')

async function types() {
let returningData;

    await axios.get(`${link}universe/types/?datasource=${dataSource}`)
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