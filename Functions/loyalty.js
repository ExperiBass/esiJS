const request = require('./Utility/request')
const inputValidation = require('./Utility/inputValidation')

module.exports = {
    offers (corporationId) {
        inputValidation({ input: corporationId, type: 'number', message: `The function 'loyalty.offers' requires a corporation Id!` })

        return request({ subUrl: `loyalty/stores/${corporationId}/offers` })
    }
}
