module.exports = affiliation

const axios = require('axios')
const { link, dataSource } = require('../../esi.json')

async function affiliation(charID) {

    if (!charID || typeof charID !== 'object') {
        console.error(`The function 'affiliation' requires a array!`)
        throw Error('affiliation requires array')
    }

        response = await axios.post(`${link}characters/affiliation/?datasource=${dataSource}`, charID)
        .catch(function(e) {
            let error = e.response.data.error
            console.error(`From ESI:`,error)
            throw Error(error)
        })
    return response.data
}