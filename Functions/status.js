const request = require('./Utility/request')

module.exports = {
    status () {
        return request({ subUrl: `status` })
    }
}
