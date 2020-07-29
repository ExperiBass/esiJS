let esiJS = require('./class')

async function myFunc() {
    let client = new esiJS()
    let d = await client.status.status()
    console.log(JSON.stringify(d.data, null, 2))
    let UCSN = await client.search.search('United Caldari Navy', 'corporation', true)
    console.log(UCSN.data)
    let corp = await client.alliance.corps()
}
myFunc()