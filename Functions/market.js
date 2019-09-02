const request = require('./esiJS-Utils/request')
const inputValidation = require('./esiJS-Utils/inputValidation')

module.exports = {
    groups: {
        /**
         * Get information on an item group.
         * @async
         * @param {number} groupID 
         * @returns {object}
         */
        groupInfo (groupID) {
            inputValidation({ input: groupID, type: 'number', message: `The function 'market.groups.groupInfo' requires a group Id!` })

            return request({ subUrl: `markets/groups/${groupID}` })
        },
        /**
         * Get a list of item groups.
         * @async
         * @returns {[number]}
         */
        groups () {
            return request({ subUrl: `markets/groups` })
        },
    },
    /**
     * Return a list of historical market statistics for the specified type in a region.
     * @async
     * @param {number} regionID 
     * @param {number} typeID 
     * @returns {object}
     */
    history (regionID, typeID) {
        inputValidation({ input: regionID, type: 'number', message: `The function 'market.history' requires a region Id!` })
        inputValidation({ input: typeID, type: 'number', message: `The function 'market.history' requires a type Id!` })

        return request({ subUrl: `markets/${regionID}/history`, query: { type_id: typeID } })
    },
    /**
     * Return a list of orders in a region.
     * @async
     * @param {number} regionID
     * @param {number} typeID 
     * @param {string} bOs 
     * @param {number} pageNumber
     */
    orders (regionID, typeID, bOs = all, pageNumber = 1) {
        bOsOptions = ['all', 'sell', 'buy']
        inputValidation({ input: regionID, type: 'number', message: `The function 'market.orders' requires a region Id!` })
        inputValidation({ input: pageNumber, type: 'number', message: `The input pageNumber for 'market.orders' needs to be a number` })
        inputValidation({ input: bOs, type: 'object', options: bOsOptions , message: `The function 'market.orders' bOs input must be 'all', 'sell', or 'buy'!` })
        inputValidation({ input: typeID, type: 'number', optional: true, message: `The function 'market.orders' requires a type Id!`})

        return request({
            subUrl: `markets/${regionID}/orders`,
            query: {
                order_type: bOs,
                page: pageNumber,
                type_id: typeID
            }
        })
    },
    /**
     * Return a list of prices.
     * @async
     * @returns {object}
     */
    prices () {
        return request({ subUrl: `markets/prices` })
    },
    /**
     * Return a list of type IDs that have active orders in the region, for efficient market indexing.
     * @async
     * @param {number} regionID 
     * @param {number} pageNumber 
     * @returns {object}
     */
    types (regionID, pageNumber = 1) {
        inputValidation({ input: regionID, type: 'number', message: `The function 'market.types' requires a region Id!` })
        inputValidation({ input: pageNumber, type: 'number', message: `The input pageNumber for 'market.types' needs to be a number` })
        
        return request({ subUrl: `markets/${regionID}/types` })
    }
}
