module.exports = groups

const axios = require('axios')
const { link, dataSource } = require('../../../esi.json')

async function groups() {
let returningData;

    await axios.get(`${link}universe/groups/?datasource=${dataSource}`)
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