const request = require('./Utility/request')
const inputValidation = require('./Utility/inputValidation')

module.exports = {
    offers (corporationId) {
        try {
            inputValidation({ input: corporationId, type: 'number', message: `The function 'loyalty.offers' requires a corporation Id!` })
        } catch (error) {
            throw Error(error)
        }

        return request({ subUrl: `loyalty/stores/${corporationId}/offers` })
    }
}
