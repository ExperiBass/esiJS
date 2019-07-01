module.exports = affiliation

const axios = require('axios')
const { link } = require('../../esi.json')

async function affiliation(charID) {
    let data;
    if (typeof charID !== 'object') {
        console.error(`The function 'affiliation' requires a array!`)
        return Error('affiliation requires array')
    }

    try {
        response = await axios.post(`${link}characters/affiliation/?datasource=tranquility`, charID)
    } catch(e) {
        let error = e.response.data.error
        console.error(`From ESI:`,error)
        return Error(error)
    }
    return response.data
}

async function a() {
    let aff = affiliation([1383,2])
    console.log(aff)
}
console.log(a())