let esiJS = require('./class')

async function myFunc() {
    let client = new esiJS({
        logging: false
    })
    let path = await client.search.search('The PathOwOgen', 'character', true)
    path = path.data.character[0]
    console.log(path)
    let data = await client.character.medals(path)
}
myFunc().catch(e => console.error(e))