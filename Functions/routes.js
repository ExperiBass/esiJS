const request = require('./Utility/request')
const inputValidation = require('./Utility/inputValidation')

module.exports = {
    planRoute (origin, destination, flag = 'secure', avoid  = []) {
        const flagOptions = ['shortest', 'secure', 'insecure']
        inputValidation({ input: origin, type: 'number', message: `The function 'routes.planRoute' requires a origin!` })
        inputValidation({ input: destination, type: 'number', message: `The function 'routes.planRoute' requires a destination!` })
        inputValidation({ input: destination, type: 'object', options: flagOptions, message: `The input flag for 'routes.planRoute' must be 'shortest', 'secure' or 'insecure'!` })

        return request({
            subUrl: `route/${origin}/${destination}`,
            query: { avoid, flag }
        })
    }
}
