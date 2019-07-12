module.exports = orders

const axios = require('axios')
const { link, dataSource } = require('../../esi.json')

async function orders(regID, pageNum = 1, bOs = all, typeID) {
let returningData;
let query;
let bSA = 'buy sell all'

    if (!regID || typeof regID !== 'number') {
        console.error('orders requires a valid region ID!')
        throw Error('orders requires valid region ID')
    }
    if (!bSA.split(' ').includes(bOs)) {
        console.error(`orders requires the third argument to be 'buy', 'sell', or 'all'!`)
        throw Error(`orders requires third arg to be 'buy', 'sell', or 'all'`)
    }
    if (!pageNum || typeof pageNum !== 'number') {
        console.error('orders requires a integer as its second argument!')
        throw Error('orders requires int as second arg')
    }
    if (!typeID) {
        query = `${link}markets/${regID}/orders/?datasource=${dataSource}&order_type=${bOs}&page=${pageNum}`
    } else {
        query = `${link}markets/${regID}/orders/?datasource=${dataSource}&order_type=${bOs}&page=${pageNum}&type_id=${typeID}`
    }
    if (typeID && typeof typeID !== 'number') {
        console.error('orders requires a integer as its fourth argument!')
        throw Error('orders requires int as fourth arg')
    }

    await axios.get(query)
        .then(response => {
            returningData = Promise.resolve(response.data)
        })
        .catch(function(e) {
            let error = e.response.data.error
            console.error(`From ESI:`,error)
            throw Error(error)
        })

        return returningData;
}