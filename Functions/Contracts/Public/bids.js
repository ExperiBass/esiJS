module.exports = bids

const axios = require('axios')
const { link, dataSource } = require('../../../esi.json')

/**
 * Get the bids on a auction contract.
 * @exports bids
 * @async
 * @param contractID {number} The auction contract to get the bids of.
 * @param pageNum {number} The page of bids to get. Defaults to `1`.
 * @returns The bids on the auction.
 */

async function bids(contractID, pageNum = 1) {
    let returningData;

    if (!contractID || typeof contractID !== 'number') {
        console.error(`The function 'bids' requires its first argument to be a number and a contract ID!`)
        throw Error('bids needs contract ID as first arg')
    }
    if (typeof pageNum !== 'number') {
        console.error(`The function 'bids' requires its second argument to be a number!`)
        throw Error('bids needs number as second arg')
    }
    
    await axios.get(`${link}contracts/public/bids/${contractID}/?datasource=${dataSource}&page=${pageNum}`)
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