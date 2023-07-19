const { request, inputValidation } = require('./util/util.js')

module.exports = {
    /**
     * Get information on a planetary factory schematic.
     * @param {number} schematicID
     * @returns {object}
     */
    schematicInfo(schematicID) {
        inputValidation({
            input: schematicID,
            type: 'number',
            message: `The function 'planetaryInteraction.schematicInfo' requires a schematic ID!`
        })

        return request({
            subUrl: `universe/schematics/${schematicID}`
        })
    }
}