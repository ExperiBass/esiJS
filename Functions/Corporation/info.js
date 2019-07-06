module.exports = info

const axios = require('axios')
const { link, dataSource } = require('../../esi.json')

async function info(corpID) {
    let returningData;
    if (!corpID) {
        console.error(`The function 'info' needs a corp ID!`)
        return 'info needs a corporation ID'
    }

    await axios.get(`${link}corporations/${corpID}/?datasource=${dataSource}`)
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