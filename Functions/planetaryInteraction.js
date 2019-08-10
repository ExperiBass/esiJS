const request = require('./Utility/request')
const inputValidation = require('./Utility/inputValidation')

module.exports = {
    schematicInfo (schemaId) {
        try {
            inputValidation({ input: regionID, type: 'number', message: `The function 'planetaryInteraction.schematicInfo' requires a schema Id!` })
            inputValidation({ input: typeID, type: 'number', message: `The function 'market.history' requires a type Id!` })
        } catch (error) {
            throw Error(error)
        }

        return request({ subUrl: `universe/schematics/${schemaId}` })
    }
}
