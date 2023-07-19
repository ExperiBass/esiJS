const { request, inputValidation } = require('./util/util.js')

module.exports = {
    /**
     * Return a list of industry facilities.
     * @returns {object}
     */
    facilities() {
        return request({
            subUrl: `industry/facilities`
        })
    },
    /**
     * Return cost indices for solar systems.
     * @returns {object}
     */
    systems() {
        return request({
            subUrl: `industry/systems`
        })
    }
}