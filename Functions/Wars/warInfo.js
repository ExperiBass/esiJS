module.exports = warInfo

const axios = require('axios')
const { link, dataSource } = require('../../esi.json')

async function warInfo(warID) {
    let returningData;
    if (!warID || typeof warID !== 'number') {
        console.error(`The function 'warInfo' needs a war ID!`)
        return Error('warInfo needs a war ID')
    }

    await axios.get(`${link}wars/${warID}/?datasource=${dataSource}`)
        .then(response => {
            returningData = Promise.resolve(response.data)
        })
        .catch(function(e) {
            let error = e.response.data.error
            console.error(`From ESI:`,error)
            return Error(error)
        })
        
    return returningData;
}