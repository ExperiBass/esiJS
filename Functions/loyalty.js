const request = require('./esiJS-Utils/request')
const inputValidation = require('./esiJS-Utils/inputValidation')

module.exports = {
    /**
     * Return a list of offers from a specific corporation’s loyalty store.
     * @async
     * @param {number} corporationId 
     * @returns {object}
     */
    offers (corporationId) {
        inputValidation({ input: corporationId, type: 'number', message: `The function 'loyalty.offers' requires a corporation Id!` })

        return request({ subUrl: `loyalty/stores/${corporationId}/offers` })
    }
}
