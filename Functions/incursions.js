const request = require('./esiJS-Utils/request')

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