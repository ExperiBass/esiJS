module.exports = items

let axios = require('axios')
let { link } = require('../../../esi.json')

async function items(contractID, pageNum = 1) {
    let returningData;

    if (!contractID || typeof contractID !== 'number') {
        console.error(`The function 'items' requires its first argument to be a number and a valid contract ID!`)
        return 'items needs contract ID as first arg'
    }
    if (typeof pageNum !== 'number') {
        console.error(`The function 'items' requires its second argument to be a number!`)
        return 'items needs number as second arg'
    }
    
    await axios.get(`${link}contracts/public/items/${contractID}/?datasource=tranquility&page=${pageNum}`)
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