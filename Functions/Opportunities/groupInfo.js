module.exports = groupInfo

const axios = require('axios')
const { link, dataSource } = require('../../esi.json')

async function groupInfo(ID) {
    let returningData;

    if (!ID || typeof ID !== 'number') {
        console.error(`the function 'groupInfo' requires a opportunity group ID!`)
        throw Error('groupInfo requires opportunity group ID')
    }

    await axios.get(`${link}opportunity/groups/${ID}?datasource=${dataSource}`)
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