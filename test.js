let esiJS = require('./class')
const {cache} = require('./src/util/util')

async function myFunc() {
    let client = new esiJS({})
    let alliance = await client.alliance.alliances()
    //console.log(alliance)
    let history = await client.alliance.corps(alliance.data[0])

    console.log(history.data)
}
myFunc().catch(e => console.error(e))