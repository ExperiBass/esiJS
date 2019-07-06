module.exports = planRoute

const axios = require('axios')
const { link, dataSource } = require('../../esi.json')

async function planRoute(orgin, desto, flag = 'secure', avoid  = []) {
    let returningData;
    let query;

    if (!orgin || typeof orgin !== 'number') {
        console.error(`the function 'planRoute' requires a orgin system ID!`)
        return Error('planRoute requires orgin system ID')
    }
    if (!desto || typeof desto !== 'number') {
        console.error(`the function 'planRoute' requires a destination system ID!`)
        return Error('planRoute requires destination system ID')
    }
    if (!'shortest secure insecure'.split(' ').includes(flag)) {
        console.error(`the third argument for the function 'planRoute' has to be either 'secure', 'shortest', or 'insecure'!`)
        return Error(`third arg must be 'secure', 'shortest', or 'insecure' (defaults to 'safest')`)
    }
    if (avoid && typeof avoid === 'object') {
        query = `${link}route/${orgin}/${desto}/?avoid=${avoid}&datasource=${dataSource}&flag=${flag}`
    } else {
        query = `${link}route/${orgin}/${desto}/?datasource=${dataSource}&flag=${flag}`
    }
    if (typeof avoid !== 'object') {
        console.error(`the fourth argument must be a array!`)
        return Error(`fourth arg must be array`)
    }

    await axios.get(query)
        .then(response => {
            returningData = Promise.resolve(response.data)
        })
        .catch(function(e) {
            let error = e.response.data.error
            console.error(`From ESI:`,error)
            return Error(error)
        })

    return returningData;
}