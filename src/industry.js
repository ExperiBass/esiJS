const { request, inputValidation } = require('./util/util.js')

module.exports = {
    /**
     * Return a list of industry facilities.
     * @returns {Promise<object>}
     */
    facilities() {
        return request({
            subUrl: `industry/facilities`
        })
    },
    /**
     * Return cost indices for solar systems.
     * @returns {Promise<object>}
     */
    systems() {
        return request({
            subUrl: `industry/systems`
        })
    }
}