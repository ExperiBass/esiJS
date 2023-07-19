const { request } = require('./util/util.js')

module.exports = {
    /**
     * Return a list of current incursions.
     * @returns {object}
     */
    incursions() {
        return request({
            subUrl: `incursions`
        })
    }
}