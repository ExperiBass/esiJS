module.exports = bids

let axios = require('axios')
let { link } = require('../../esi.json')

async function bids(contractID, pageNum = 1) {
    let returningData;

    if (!contractID || typeof contractID !== 'number') {
        console.error(`The function 'bids' requires its first argument to be a number!`)
        return 'function bids needs number as first arg'
    }
    if (typeof pageNum !== 'number') {
        console.error(`The function 'bids' requires its second argument to be a number!`)
        return 'function bids needs number as second arg'
    }
    
    await axios.get(`${link}contracts/public/bids/${contractID}/?datasource=tranquility&page=${pageNum}`)
        .then(response => {
            if (response.statusText != 'OK') {
                console.error(response.error)
                return true
            }
            returningData = Promise.resolve(response.data)
        })
        .catch(function(e) {
            console.error(e.response.data.error)
            return e.response.data.error
        })
    return returningData
}