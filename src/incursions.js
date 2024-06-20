const { request } = require('./util/util.js')

module.exports = {
    /**
     * Return a list of current incursions.
     * @returns {Promise<object>}
     */
    incursions() {
        return request({
            subUrl: `incursions`,
        })
    },
}
