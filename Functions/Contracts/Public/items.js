module.exports = items

const axios = require('axios')
const { link, dataSource } = require('../../../esi.json')

async function items(contractID, pageNum = 1) {
    let returningData;

    if (!contractID || typeof contractID !== 'number') {
        console.error(`The function 'items' requires its first argument to be a number and a valid contract ID!`)
        throw Error('items needs contract ID as first arg')
    }
    if (typeof pageNum !== 'number') {
        console.error(`The function 'items' requires its second argument to be a number!`)
        throw Error('items needs number as second arg')
    }
    
    await axios.get(`${link}contracts/public/items/${contractID}/?datasource=${dataSource}&page=${pageNum}`)
        .then(response => {
            returningData = Promise.resolve(response.data)
        })
        .catch(function(e) {
            let error = e.response.data.error
            console.error(`From ESI:`,error)
            throw Error(error)
        })
    return returningData
}