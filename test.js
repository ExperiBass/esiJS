let esiJS = require('./class')

async function myFunc() {
    let client = new esiJS({
        logging: false
    })
}
myFunc().catch(e => console.error(e))