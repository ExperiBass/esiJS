const request = require('./Utility/request')
const inputValidation = require('./Utility/inputValidation')

module.exports = {
    groups: {
        groupInfo (groupID) {
            inputValidation({ input: groupID, type: 'number', message: `The function 'market.groups.groupInfo' requires a group Id!` })

            return request({ subUrl: `markets/groups/${groupID}` })
        },
        groups () {
            return request({ subUrl: `markets/groups` })
        },
    },
    history (regionID, typeID) {
        inputValidation({ input: regionID, type: 'number', message: `The function 'market.history' requires a region Id!` })
        inputValidation({ input: typeID, type: 'number', message: `The function 'market.history' requires a type Id!` })

        return request({ subUrl: `markets/${regionID}/history`, query: { type_id: typeID } })
    },
    orders (regionID, pageNumber = 1, bOs = all, typeID) {
        bOsOptions = ['all', 'sell', 'buy']
        inputValidation({ input: regionID, type: 'number', message: `The function 'market.orders' requires a region Id!` })
        inputValidation({ input: pageNumber, type: 'number', message: `The input pageNumber for 'market.orders' needs to be a number` })
        inputValidation({ input: bOs, type: 'object', options: bOsOptions , message: `The function 'market.orders' bOs input must be 'all', 'sell', or 'buy'!` })
        inputValidation({ input: typeID, type: 'number', optional: true, message: `The function 'market.orders' requires a region Id!`})

        return request({
            subUrl: `markets/${regionID}/orders`,
            query: {
                order_type: bOs,
                page: pageNumber,
                type_id: typeID
            }
        })
    },
    prices () {
        return request({ subUrl: `markets/prices` })
    },
    types (regionID, pageNumber = 1) {
        inputValidation({ input: regionID, type: 'number', message: `The function 'market.types' requires a region Id!` })
        inputValidation({ input: pageNumber, type: 'number', message: `The input pageNumber for 'market.types' needs to be a number` })
        
        return request({ subUrl: `markets/${regionID}/types` })
    }
}
