const request = require('./esiJS-Utils/request')
const inputValidation = require('./esiJS-Utils/inputValidation')

module.exports = {
    /**
     * Get information on a planetary factory schematic.
     * @async
     * @param {number} schematicID
     * @returns {object}
     */
    schematicInfo (schematicID) {
        inputValidation({ input: schematicID, type: 'number', message: `The function 'planetaryInteraction.schematicInfo' requires a schematic ID!` })

        return request({ subUrl: `universe/schematics/${schematicID}` })
    }
}
