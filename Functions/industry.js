const request = require('./esiJS-Utils/request')

module.exports = {
    /**
     * Return a list of industry facilities.
     * @async
     * @returns {object}
     */
    facilities () {
        return request({ subUrl: `industry/facilities` })
    },
    /**
     * Return cost indices for solar systems.
     * @async
     * @returns {object}
     */
    systems () {
        return request({ subUrl: `industry/systems` })
    }
}