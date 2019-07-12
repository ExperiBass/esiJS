module.exports = graphicInfo

const axios = require('axios')
const { link, dataSource } = require('../../../esi.json')

async function graphicInfo(graphicID) {
    let returningData;
    if (!graphicID || typeof graphicID !== 'number') {
        console.error(`The function 'graphicInfo' needs a graphic ID!`)
        throw Error('graphicInfo needs a graphic ID')
    }

    await axios.get(`${link}universe/graphics/${graphicID}/?datasource=${dataSource}`)
        .then(response => {
            returningData = Promise.resolve(response.data)
        })
        .catch(function(e) {
            let error = e.response.data.error
            console.error(`From ESI:`,error)
            throw Error(error)
        })
        
    return returningData;
}