let esiJS = require('./class')

async function myFunc() {
    let client = new esiJS({
        logging: false
    })
    let system = await client.search.search('intaki', 'solar_system', true)
    console.log(system.data)
    let systemData = await client.universe.systems.systemInfo(system.data.solar_system[0])
    console.log(systemData.data)
}
myFunc().catch(e => console.error(e))