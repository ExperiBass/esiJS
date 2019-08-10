const request = require('./Utility/request')

module.exports = {
    incursions () {
        return request({ subUrl: `incursions` })
    }
}
