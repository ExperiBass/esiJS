module.exports = history

const axios = require('axios')
const { link, dataSource } = require('../../../esi.json')

async function history(regID, typeID) {
let returningData;

    if (!regID || typeof regID !== 'number') {
        console.error('history requires a valid region ID!')
        return Error('history requires valid region ID')
    }
    if (!typeID || typeof typeID !== 'number') {
        console.error('history requires a valid type ID!')
        return Error('history requires valid type ID')
    }

    await axios.get(`${link}markets/${regID}/history/?datasource=${dataSource}&type_id=${typeID}`)
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

async function a() {
    let data = await history(10000036, 34)
    console.log(data)
}
console.log(a())