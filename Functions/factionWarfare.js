const request = require('./Utility/request')

module.exports = {
    lbs: {
        chars () {
            return request({ subUrl: `fw/leaderboards/characters` })
        },
        corps () {
            return request({ subUrl: `fw/leaderboards/corporations` })
        },
        leaderBoard () {
            return request({ subUrl: `fw/leaderboard` })
        }
    },
    stats () {
        return request({ subUrl: `fw/stats` })
    },
    systems () {
        return request({ subUrl: `fw/systems` })
    },
    wars () {
        return request({ subUrl: `fw/wars` })
    }
}
