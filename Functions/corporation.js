const request = require('./Utility/request')
const inputValidation = require('./Utility/inputValidation')

module.exports = {
    allianceHistory (corporationId) {
        try {
            inputValidation({ input: corporationId, type: 'number', message: `The function 'corporation.allianceHistory' requires a corporation ID!` })
        } catch (error) {
            throw Error(error)
        }
        return request({ subUrl: `corporations/${corporationId}/alliancehistory` })
    },
    icon (corporationId) {
        try {
            inputValidation({ input: corporationId, type: 'number', message: `The function 'corporation.icon' requires a corporation ID!` })
        } catch (error) {
            throw Error(error)
        }
        return request({ subUrl: `corporations/${corporationId}/icons` })
    },
    info (corporationId) {
        try {
            inputValidation({ input: corporationId, type: 'number', message: `The function 'corporation.info' requires a corporation ID!` })
        } catch (error) {
            throw Error(error)
        }
        return request({ subUrl: `corporations/${corporationId}` })
    },
    npcCorps () {
        return request({ subUrl: `corporations/npccorps` })
    }
}
