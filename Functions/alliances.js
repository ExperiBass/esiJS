const request = require('./esiJS-Utils/request')
const inputValidation = require('./esiJS-Utils/inputValidation')

module.exports = {
    /**
     * List all active player alliances.
     * @exports alliances
     * @async
     * @returns {[number]} A array of all active player alliances.
     */
    alliances () {      
        request({ subUrl: 'alliances' })
    },
    /**
     * Get all current member corporations of an alliance.
     * @exports corps
     * @async
     * @param ID {number} The alliance ID to get the corporations from.
     * @returns {[number]} The corporations in the alliance.
     */
    corps (allianceId) {
        inputValidation({ input: allianceId, type: 'number', message: `The function 'alliances.corps' requires an alliance ID!` })

        return request({ subUrl: `alliances/${allianceId}/corporations` })
    },
    /**
     * Get the icon urls for a alliance.
     * @exports icon
     * @async
     * @param ID {number} The alliance ID to get the icon of.
     * @returns {object} Links to the different sizes of the alliance icon.
     */
    icon (allianceId) {
        inputValidation({ input: allianceId, type: 'number', message: `The function 'alliances.icon' requires an alliance ID!` })

        return request({ subUrl: `alliances/${allianceId}/icons` })
    },
    /**
     * Get public information about an alliance.
     * @exports info
     * @async
     * @param ID {number} The alliance ID to get info from.
     * @returns {object} Public info on the alliance.
     */
    info (allianceId) {
        inputValidation({ input: allianceId, type: 'number', message: `The function 'alliances.info' requires an alliance ID!` })
        
        return request({ subUrl: `alliances/${allianceId}` })
    }
}