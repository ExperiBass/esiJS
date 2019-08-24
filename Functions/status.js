const request = require('./esiJS-Utils/request')

module.exports = {
    /**
     * EVE Server status.
     * @async
     * @returns {object}
     */
    status () {
        return request({ subUrl: `status` })
    }
}
