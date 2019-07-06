module.exports = schematic

const axios = require('axios')
const { link, dataSource } = require('../../esi.json')

async function schematic(ID) {
    let returningData;

    if (!ID || typeof ID !== 'number') {
        console.error(`the function 'schematic' requires a schematic ID!`)
        return Error('schematic requires schematic ID')
    }

    await axios.get(`${link}universe/schematics/${ID}?datasource=${dataSource}`)
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