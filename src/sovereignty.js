const { request } = require('./util/util.js')

module.exports = {
    /**
     * Shows sovereignty data for campaigns.

     * @returns {Promise<object>}
     */
    campaigns() {
        return request({ subUrl: `sovereignty/campaigns` })
    },
    /**
     * Shows sovereignty information for solar systems.

     * @returns {Promise<object>}
     */
    map() {
        return request({ subUrl: `sovereignty/map` })
    },
    /**
     * Shows sovereignty data for structures.

     * @returns {Promise<object>}
     */
    structures() {
        return request({ subUrl: `sovereignty/structures` })
    },
}
