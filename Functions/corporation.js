const request = require('./Utility/request')
const inputValidation = require('./Utility/inputValidation')

module.exports = {
    allianceHistory (corporationId) {
        inputValidation({ input: corporationId, type: 'number', message: `The function 'corporation.allianceHistory' requires a corporation ID!` })

        return request({ subUrl: `corporations/${corporationId}/alliancehistory` })
    },
    icon (corporationId) {
        inputValidation({ input: corporationId, type: 'number', message: `The function 'corporation.icon' requires a corporation ID!` })

        return request({ subUrl: `corporations/${corporationId}/icons` })
    },
    info (corporationId) {
        inputValidation({ input: corporationId, type: 'number', message: `The function 'corporation.info' requires a corporation ID!` })
        
        return request({ subUrl: `corporations/${corporationId}` })
    },
    npcCorps () {
        return request({ subUrl: `corporations/npccorps` })
    }
}
