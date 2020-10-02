let esiJS = require('./class')

async function myFunc() {
    let client = new esiJS({logging: false})
    //let UCSN = await client.search.search('United Caldari Navy', 'corporation', true)
    let menace = await client.search.search('The PathOwOgen', 'character', true)
    //let gamma = await client.search.search('GammaToxin', 'character', true)
    //UCSN = UCSN.data.corporation[0]
    menace = menace.data.character[0]
   // gamma = gamma.data.character[0]

    //let UCSNLogo = await client.corporation.icons(UCSN)
    let menacePic = await client.character.portrait(menace)
   // let gammaPic = await client.character.portrait(gamma)
    console.log(menacePic.data)
}
myFunc()