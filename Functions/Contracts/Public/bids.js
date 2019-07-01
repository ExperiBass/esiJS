module.exports = bids

const axios = require('axios')
const { link } = require('../../../esi.json')

async function bids(contractID, pageNum = 1) {
    let returningData;

    if (!contractID || typeof contractID !== 'number') {
        console.error(`The function 'bids' requires its first argument to be a number and a contract ID!`)
        return 'function bids needs contract ID as first arg'
    }
    if (typeof pageNum !== 'number') {
        console.error(`The function 'bids' requires its second argument to be a number!`)
        return 'function bids needs number as second arg'
    }
    
    await axios.get(`${link}contracts/public/bids/${contractID}/?datasource=tranquility&page=${pageNum}`)
        .then(response => {
            returningData = Promise.resolve(response.data)
        })
        .catch(function(e) {
            let error = e.response.data.error
            console.error(`From ESI:`,error)
            return Error(error)
        })
    return returningData
}