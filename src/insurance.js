const { request } = require('./util/util.js')

module.exports = {
    /**
     * Return available insurance levels for all ship types.
     * @returns {Promise<object>}
     */
    prices() {
        return request({
            subUrl: `insurance/prices`,
        })
    },
}
