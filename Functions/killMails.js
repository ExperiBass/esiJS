const request = require('./Utility/request')
const inputValidation = require('./Utility/inputValidation')

module.exports = {
    killMailInfo (killID, killHash) {
        try {
            inputValidation({ input: killID, type: 'number', message: `The function 'killMail.killMailInfo' requires a kill Id!` })
            inputValidation({ input: killHash, type: 'string', message: `The function 'killMail.killMailInfo' requires a kill hash!` })
        } catch (error) {
            throw Error(error)
        }

        return request({ subUrl: `killmails/${killID}/${killHash}` })
    }
}
