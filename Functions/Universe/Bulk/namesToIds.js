module.exports = namesToIds

const axios = require('axios')
const { link, dataSource } = require('../../../esi.json')

async function namesToIds(IDs) {
    let data;
    if (typeof IDs !== 'object') {
        console.error(`The function 'namesToIds' requires a array!`)
        return Error('namesToIds requires array')
    }

        response = await axios.post(`${link}universe/ids/?datasource=${dataSource}`, IDs)
        .catch(function(e) {
            let error = e.response.data.error
            console.error(`From ESI:`,error)
            return Error(error)
        })
    return response.data
}