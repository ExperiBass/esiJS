module.exports = groupInfo

const axios = require('axios')
const { link , dataSource} = require('../../../esi.json')

async function groupInfo(groupID) {
let returningData;

    if (!groupID || typeof groupID !== 'number') {
        console.error(`groupInfo requires a valid market group ID!`)
        throw Error(`groupInfo requres valid market group ID`)
    }

    await axios.get(`${link}markets/groups/${groupID}?datasource=${dataSource}`)
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