module.exports = types

const axios = require('axios')
const { link, dataSource } = require('../../esi.json')

async function types(regID) {
let returningData;

    if (!regID || typeof regID !== 'number') {
        console.error('types requires a valid region ID!')
        return Error('types requires valid region ID')
    }

    await axios.get(`${link}markets/${regID}/types/?datasource=${dataSource}&type_id=${typeID}`)
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