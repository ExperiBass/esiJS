module.exports = groups

const axios = require('axios')
const { link, dataSource } = require('../../esi.json')

async function groups() {
let returningData;

    await axios.get(`${link}opportunities/groups/?datasource=${dataSource}`)
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