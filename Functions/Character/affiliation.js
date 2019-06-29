module.exports = affiliation

let axios = require('axios')
let { link } = require('../../esi.json')

async function affiliation(charID) {
    let data;
    if (typeof charID !== 'object') {
        console.error(`The function 'affiliation' requires a array!`)
        return
    }

    try {
        response = await axios.post(`${link}characters/affiliation/?datasource=tranquility`, charID)
        if (response.statusText !== 'OK') {
            console.error(response)
            return
        }
    } catch(e) {
        console.error(e.response.data.error)
        return false
    }
}
