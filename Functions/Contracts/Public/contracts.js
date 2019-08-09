module.exports = contracts

const axios = require('axios')
const { link, dataSource } = require('../../../esi.json')

/**
 * Returns a paginated list of all public contracts in the given region.
 * @exports contracts
 * @async
 * @param regionID {number} The region to get the contracts from.
 * @param pageNum {number} The page of contracts to get. Defaults to `1`.
 * @returns {object} A paginated list of all public contracts in the given region
.
 */

async function contracts(regionID, pageNum = 1) {
    let returningData;

    if (!regionID || typeof regionID !== 'number') {
        console.error(`The function 'contracts' requires its first argument to be a number and a valid contract ID!`)
        throw Error('contracts needs contract ID as first arg')
    }
    if (typeof pageNum !== 'number') {
        console.error(`The function 'contracts' requires its second argument to be a number!`)
        throw Error('contracts needs number as second arg')
    }
    
    await axios.get(`${link}contracts/public/${regionID}/?datasource=${dataSource}&page=${pageNum}`)
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