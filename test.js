let esiJS = require('./class')

async function myFunc() {
    let client = new esiJS({})
    let status = await client.search.search('trit', 'inventory_type', false)
    status = status.data.inventory_type
    for (item in status) {
        const itemName = await client.universe.bulk.idsToNames([status[item]])
        status[item] = itemName.data[0].name
    }
    console.log(status)
}
myFunc().catch(e => console.error(e))