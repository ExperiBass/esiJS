const request = require('./Utility/request')
const inputValidation = require('./Utility/inputValidation')

module.exports = {
    schematicInfo (schemaId) {
        inputValidation({ input: regionID, type: 'number', message: `The function 'planetaryInteraction.schematicInfo' requires a schema Id!` })
        inputValidation({ input: typeID, type: 'number', message: `The function 'market.history' requires a type Id!` })

        return request({ subUrl: `universe/schematics/${schemaId}` })
    }
}
