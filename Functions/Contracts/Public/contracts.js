module.exports = contracts

let axios = require('axios')
let { link } = require('../../../esi.json')

async function contracts(regionID, pageNum = 1) {
    let returningData;

    if (!regionID || typeof regionID !== 'number') {
        console.error(`The function 'contracts' requires its first argument to be a number and a valid contract ID!`)
        return 'contracts needs contract ID as first arg'
    }
    if (typeof pageNum !== 'number') {
        console.error(`The function 'contracts' requires its second argument to be a number!`)
        return 'contracts needs number as second arg'
    }
    
    await axios.get(`${link}contracts/public/${regionID}/?datasource=tranquility&page=${pageNum}`)
        .then(response => {
            returningData = Promise.resolve(response.data)
        })
        .catch(function(e) {
            console.error(e.response.data.error)
            return e.response.data.error
        })
    return returningData
}