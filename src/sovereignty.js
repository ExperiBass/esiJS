const request = require('./util/request')

module.exports = {
    /**
     * Shows sovereignty data for campaigns.

     * @returns {object}
     */
    campaigns() {
        return request({ subUrl: `sovereignty/campaigns` })
    },
    /**
     * Shows sovereignty information for solar systems.

     * @returns {object}
     */
    map() {
        return request({ subUrl: `sovereignty/map` })
    },
    /**
     * Shows sovereignty data for structures.

     * @returns {object}
     */
    structures() {
        return request({ subUrl: `sovereignty/structures` })
    }
}
