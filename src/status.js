const request = require('./util/request')

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