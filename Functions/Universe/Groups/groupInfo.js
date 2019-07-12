module.exports = groupInfo

const axios = require('axios')
const { link, dataSource } = require('../../../esi.json')

async function groupInfo(groupID) {
    let returningData;
    if (!groupID || typeof groupID !== 'number') {
        console.error(`The function 'groupInfo' needs a group ID!`)
        throw Error('groupInfo needs a group ID')
    }

    await axios.get(`${link}universe/groups/${groupID}/?datasource=${dataSource}`)
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