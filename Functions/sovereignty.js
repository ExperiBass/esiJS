const request = require('./esiJS-Utils/request')

module.exports = {
    /**
     * Shows sovereignty data for campaigns.
     * @async
     * @returns {object}
     */
    campaigns () {
        return request({ subUrl: `sovereignty/campaigns` })
    },
    /**
     * Shows sovereignty information for solar systems.
     * @async
     * @returns {object}
     */
    map () {
        return request({ subUrl: `sovereignty/map` })
    },
    /**
     * Shows sovereignty data for structures.
     * @async
     * @returns {object}
     */
    structures () {
        return request({ subUrl: `sovereignty/structures` })
    }
}
