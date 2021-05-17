let esiJS = require('./class')

async function myFunc() {
    let client = new esiJS({})
    const status = await client.status.status()
    console.log(status.data)
}
myFunc().catch(e => console.error(e))