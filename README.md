# esiJS

esiJS is a updated library for EVE Online, that's updated and simple to use!
It is still under development, 5 out of 20 categories are done!
Since i haven't bought anything from CCP, i can't use the authenication (afaik).


# USAGE:

```js
let esiJS = require('esijs')
// for no-arg commands (usually are single word names, like `Alliances`)
async function a() {
    let allianceList = await esiJS.alliance.alliances() // returns a list of all active alliances
}

// for single arg commands (usually have two word names, like `allianceIcon`)
async function b() {
    let allianceIcon = await esiJS.alliance.allianceIcon(allianceID)
    let itemID = await esiJS.search.search('string', 'inventory_item', true)
    // the search function takes 3 params: the string to search on, a category to search in 
    // ('agent', 'alliance', 'character', 'constellation', 'corporation', 'faction', 
    // 'inventory_type', 'region', 'solar_system', 'station'),
    // and whether to have a strict search (boolean, defaults to false).
}

// for multi-arg commands (example: `dynamicItemInfo`)
async function c() {
    let dynItemInfo = await esiJS.dogma.dynItemInfo(itemID, typeID)
}
```
# Example:

```js
let esiJS = require('esijs')

async function a() {
    let array = [2115371267, 2115371268]

    console.log(`CHAR TESTING:`)
    let char = await esiJS.search.search('Gingka Akiyama', 'character', true)
    let pubInfo = await esiJS.character.publicInfo(char.character[0])
    let portrait = await esiJS.character.portrait(char.character[0])
    let corpHist = await esiJS.character.corpHistory(char.character[0])
    let aff = await esiJS.character.affiliation(array)
    console.log('pubInfo:\n', pubInfo, '\nportrait:\n', portrait, '\ncorpHist:\n', corpHist, '\naff\n',aff)

    console.log(`\n\n\nALLIANCE TESTING:`)
    let alliances = await esiJS.alliance.alliances()
    let alliance = await esiJS.alliance.info(alliances[0])
    let corps = await esiJS.alliance.corps(alliances[0])
    let icon = await esiJS.alliance.icon(alliances[0])
    console.log('alliance:\n', alliance, '\nCorps array length:\n', corps.length, '\nicon:\n',icon)

    console.log(`\n\n\nCONTRACTS:`)
    let contract = await esiJS.contracts.public.contracts(10000036)
    let bids = await esiJS.contracts.public.bids(contract[0].contract_id)
    let items = await esiJS.contracts.public.items(contract[0].contract_id)
    console.log('contract:\n',contract, '\nbids:\n', bids, '\nitems\n', items)

    console.log(`\n\n\nCORPORATION:`)
    let FBI = 98604629
    let info = await esiJS.corporation.info(FBI)
    let allianceHist = await esiJS.corporation.allianceHistory(FBI)
    let corpIcon = await esiJS.corporation.icons(FBI)
    let npcCorps = await esiJS.corporation.npcCorps()
    console.log(info, allianceHist, corpIcon, npcCorps.length)
    
    console.log(`\n\n\nDOGMA:`)
    let attrs = await esiJS.dogma.attrs()
    let attrInfo = await esiJS.dogma.attrInfo(attrs[0])
    let dynItemInfo = await esiJS.dogma.dynItemInfo(0, 34)
    let effects = await esiJS.dogma.effects()
    let effectInfo = await esiJS.dogma.effectInfo(effects[0])
    console.log('attrInfo:\n', attrInfo, '\ndynItemInfo:\n', dynItemInfo, '\neffectInfo:\n', effectInfo)
}
console.log(a())
```