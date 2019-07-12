module.exports = bloodlines

const axios = require('axios')
const { link, dataSource } = require('../../../esi.json')

async function bloodlines() {
let returningData;

    await axios.get(`${link}universe/bloodlines/?datasource=${dataSource}`)
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