module.exports = typeInfo

const axios = require('axios')
const { link, dataSource } = require('../../../esi.json')

async function typeInfo(typeID) {
    let returningData;
    if (!typeID || typeof typeID !== 'number') {
        console.error(`The function 'typeInfo' needs a type ID!`)
        return Error('typeInfo needs a type ID')
    }

    await axios.get(`${link}universe/types/${typeID}/?datasource=${dataSource}`)
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