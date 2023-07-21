const { request } = require('./util/util.js')

module.exports = {
    /**
     * EVE Server status.
     * @returns {Promise<object>}
     */
    status() {
        return request({
            subUrl: `status`
        })
    }
}