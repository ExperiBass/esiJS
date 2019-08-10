const request = require('./Utility/request')
const inputValidation = require('./Utility/inputValidation')

module.exports = {
    alliances () {
        request({ subUrl: 'alliances' })
    },
    corps (allianceId) {
        inputValidation({ input: allianceId, type: 'number', message: `The function 'alliances.corps' requires an alliance ID!` })

        return request({ subUrl: `alliances/${allianceId}/corporations` })
    },
    icon (allianceId) {
        inputValidation({ input: allianceId, type: 'number', message: `The function 'alliances.icon' requires an alliance ID!` })

        return request({ subUrl: `alliances/${allianceId}/icons` })
    },
    info (allianceId) {
        inputValidation({ input: allianceId, type: 'number', message: `The function 'alliances.info' requires an alliance ID!` })
        
        return request({ subUrl: `alliances/${allianceId}` })
    }
}
