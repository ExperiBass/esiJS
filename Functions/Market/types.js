module.exports = types

const axios = require('axios')
const { link, dataSource } = require('../../esi.json')

async function types(regID, pageNum = 1) {
let returningData;

    if (!regID || typeof regID !== 'number') {
        console.error('types requires a valid region ID!')
        throw Error('types requires valid region ID')
    }
    if (typeof pageNum !== 'number') {
        console.error('types requires its second argument to be a number!')
        throw Error('types requires number as second arg')
    }

    await axios.get(`${link}markets/${regID}/types/?datasource=${dataSource}&page=${pageNum}`)
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