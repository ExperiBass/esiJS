let esiJS = require('./class')

async function myFunc() {
    let client = new esiJS({})
    let alliance = await client.alliance.alliances()
    console.log(alliance.headers)
}
myFunc().catch(e => console.error(e))