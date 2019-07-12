module.exports = starInfo

const axios = require('axios')
const { link, dataSource } = require('../../../esi.json')

async function starInfo(starID) {
    let returningData;
    if (!starID || typeof starID !== 'number') {
        console.error(`The function 'starInfo' needs a star ID!`)
        throw Error('starInfo needs a star ID')
    }

    await axios.get(`${link}universe/stars/${starID}/?datasource=${dataSource}`)
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