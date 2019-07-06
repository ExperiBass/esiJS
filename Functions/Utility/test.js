let addArrays = require('./addArrays')

let allKills = [ ]
let war = require('../Wars/wars')
let warKills = require('../Wars/warKills')

async function myFunc() {

    let wars = await war()
    
    let arrayToBeAdded = []

    for (let i = 0; i < 30; i++) {
        let kills = await warKills(wars[i])
        console.log(kills)
        arrayToBeAdded = addArrays(arrayToBeAdded, kills)
        console.log(kills.length) 
        console.log(i, arrayToBeAdded.length)

    }  
    allKills = addArrays(allKills, arrayToBeAdded)
    console.log('\n\n\nallKills:\n',allKills)
}

console.log(myFunc())
