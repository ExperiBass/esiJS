module.exports = idsToNames

const axios = require('axios')
const { link, dataSource } = require('../../../esi.json')

async function idsToNames(IDs) {
    let data;
    if (typeof IDs !== 'object') {
        console.error(`The function 'idsToNames' requires a array!`)
        return Error('idsToNames requires array')
    }

        response = await axios.post(`${link}universe/names/?datasource=${dataSource}`, IDs)
        .catch(function(e) {
            let error = e.response.data.error
            console.error(`From ESI:`,error)
            return Error(error)
        })
    return response.data
}