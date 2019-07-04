let addArrays = require('./addArrays')

let allKills = [ ]
let war = require('../Wars/wars')

async function myFunc() {

    let wars = await war()
    let warKills = require('../Wars/warKills')

    for (let i = 0; i < wars.length; i++) {
        let kills = await warKills(wars[i])
        allKills = addArrays(allKills, kills)
        console.log(kills.length)
        console.log(i, allKills.length)

    }   
    console.log(allKills)
}

console.log(myFunc())
