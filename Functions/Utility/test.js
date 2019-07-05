let addArrays = require('./addArrays')

let allKills = [ ]
let war = require('../Wars/wars')

async function myFunc() {

    let wars = await war()
    let warKills = require('../Wars/warKills')
    let arrayToBeAdded = []

    for (let i = 0; i < wars.length; i++) {
        let kills = await warKills(wars[i])
        console.log(kills)
        arrayToBeAdded = addArrays(arrayToBeAdded, kills)
        console.log(kills.length) 
        console.log(i, arrayToBeAdded.length)

    }  
    allKills = addArrays(allKills, arrayToBeAdded)
    console.log(allKills)
}

console.log(myFunc())
