module.exports = facilities

const axios = require('axios')
const { link, dataSource } = require('../../esi.json')

async function facilities() {
let returningData;

    await axios.get(`${link}industry/facilities/?datasource=${dataSource}`)
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