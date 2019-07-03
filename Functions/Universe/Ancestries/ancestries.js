module.exports = ancestries

const axios = require('axios')
const { link, dataSource } = require('../../../esi.json')

async function ancestries() {
let returningData;

    await axios.get(`${link}universe/ancestries/?datasource=${dataSource}`)
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