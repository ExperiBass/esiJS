const { request, inputValidation } = require('./util/util.js')

module.exports = {
    /**
     * Return a list of offers from a specific corporation’s loyalty store.
     * @param {number} corporationID
     * @returns {Promise<object>}
     */
    offers(corporationID) {
        inputValidation({
            input: corporationID,
            type: 'number',
            message: `The function 'loyalty.offers' requires a corporation ID!`,
        })

        return request({
            subUrl: `loyalty/stores/${corporationID}/offers`,
        })
    },
}
