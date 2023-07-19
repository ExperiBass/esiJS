const { request, inputValidation } = require('./util/util.js')

module.exports = {
    /**
     * Get the systems between the origin and the destination.
     * @param {number} origin
     * @param {number} destination
     * @param {string} flag
     * @param {[number]} avoid
     * @returns {[number]}
     */
    planRoute(origin, destination, flag = 'secure', avoid = []) {
        const flagOptions = ['shortest', 'secure', 'insecure']
        inputValidation({
            input: origin,
            type: 'number',
            message: `The function 'routes.planRoute' requires a origin!`
        })
        inputValidation({
            input: destination,
            type: 'number',
            message: `The function 'routes.planRoute' requires a destination!`
        })
        inputValidation({
            input: flag,
            type: 'string',
            options: flagOptions,
            message: `The input flag for 'routes.planRoute' must be 'shortest', 'secure' or 'insecure'!`
        })

        return request({
            subUrl: `route/${origin}/${destination}`,
            query: {
                avoid,
                flag
            }
        })
    }
}