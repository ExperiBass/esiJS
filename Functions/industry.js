const request = require('./Utility/request')

module.exports = {
    facilities () {
        return request({ subUrl: `industry/facilities` })
    },
    systems () {
        return request({ subUrl: `industry/systems` })
    }
}
