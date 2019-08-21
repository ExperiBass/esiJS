const request = require('./Utility/request')

module.exports = {
    prices () {
        return request({ subUrl: `insurance/prices` })
    }
}
