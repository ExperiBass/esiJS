const request = require('./Utility/request')

module.exports = {
    campaigns () {
        return request({ subUrl: `sovereignty/campaigns` })
    },
    map () {
        return request({ subUrl: `sovereignty/map` })
    },
    structures () {
        return request({ subUrl: `sovereignty/structures` })
    }
}
