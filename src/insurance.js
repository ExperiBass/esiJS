const request = require('./util/request')

module.exports = {
    /**
     * Return available insurance levels for all ship types.
     * @returns {object}
     */
    prices() {
        return request({
            subUrl: `insurance/prices`
        })
    }
}