const request = require('./Utility/request')
const inputValidation = require('./Utility/inputValidation')

module.exports = {
    alliances () {
        request({ subUrl: 'alliances' })
    },
    corps (allianceId) {
        try {
            inputValidation({ input: allianceId, type: 'number', message: `The function 'alliances.corps' requires an alliance ID!` })
        } catch (error) {
            throw Error(error)
        }
        return request({ subUrl: `alliances/${allianceId}/corporations` })
    },
    icon (allianceId) {
        try {
            inputValidation({ input: allianceId, type: 'number', message: `The function 'alliances.icon' requires an alliance ID!` })
        } catch (error) {
            throw Error(error)
        }
        return request({ subUrl: `alliances/${allianceId}/icons` })
    },
    info (allianceId) {
        try {
            inputValidation({ input: allianceId, type: 'number', message: `The function 'alliances.info' requires an alliance ID!` })
        } catch (error) {
            throw Error(error)
        }
        return request({ subUrl: `alliances/${allianceId}` })
    }
}
