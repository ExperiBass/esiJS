const { request } = require('./util/util.js')

module.exports = {
    /**
     * EVE Server status.
     * @returns {object}
     */
    status() {
        return request({
            subUrl: `status`
        })
    }
}