let esiJS = require('./class')
const cache = require('./Functions/util/cache')

async function myFunc() {
    let client = new esiJS({})
    let status = await client.search.search('trit', 'inventory_type', false)
    status = status.data.inventory_type
    for (item in status) {
        const itemName = await client.universe.bulk.idsToNames([status[item]])
        status[item] = itemName.data[0].name
    }
    // yes i know this is ugly lemmie test my cache >:c
    let status2 = await client.search.search('trit', 'inventory_type', false)
    status2 = status2.data.inventory_type
    for (item in status2) {
        const itemName = await client.universe.bulk.idsToNames([status2[item]])
        status2[item] = itemName.data[0].name
    }
    console.log(status2)
    console.log(cache.cache)
}
myFunc().catch(e => console.error(e))