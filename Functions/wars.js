const request = require('./Utility/request')
const inputValidation = require('./Utility/inputValidation')

module.exports = {
    warInfo (warID) {
        try {
            inputValidation({ input: warID, type: 'number', message: `The function 'wars.warInfo' requires a war Id!` })
        } catch (error) {
            throw Error(error)
        }
         
        return request({ subUrl: `wars/${warID}` })
    },
    warKills (warID) {
        try {
            inputValidation({ input: warID, type: 'number', message: `The function 'wars.warkills' requires a war Id!` })
        } catch (error) {
            throw Error(error)
        }
         
        return request({ subUrl: `wars/${warID}/killmails` })
    },
    wars () {
        return request({ subUrl: `wars` })
    }
}
