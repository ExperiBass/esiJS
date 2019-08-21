const request = require('./Utility/request')
const inputValidation = require('./Utility/inputValidation')

module.exports = {
    /**
     * Get a list of all the alliances a corporation has been a member of
     * @exports allianceHistory
     * @async
     * @param corpID {number} The corporation to get the alliance history of.
     * @returns {array} A array of alliance IDs.
     */
    allianceHistory (corporationId) {
        inputValidation({ input: corporationId, type: 'number', message: `The function 'corporation.allianceHistory' requires a corporation ID!` })

        return request({ subUrl: `corporations/${corporationId}/alliancehistory` })
    },
    /**
     * Get the icon urls for a corporation.
     * @exports icon
     * @async
     * @param corpID {number} The corporation ID to get the icon of. 
     * @returns {object} Links to the different sizes of the corporation icon.
     */
    icon (corporationId) {
        inputValidation({ input: corporationId, type: 'number', message: `The function 'corporation.icon' requires a corporation ID!` })

        return request({ subUrl: `corporations/${corporationId}/icons` })
    },
    /**
     * Get public information about a corporation.
     * @exports info
     * @async
     * @param corpID {number} The corporation ID to get info from.
     * @returns {object} Public info on the corporation.
     */
    info (corporationId) {
        inputValidation({ input: corporationId, type: 'number', message: `The function 'corporation.info' requires a corporation ID!` })
        
        return request({ subUrl: `corporations/${corporationId}` })
    },
    /**
     * Get a list of npc corporations.
     * @exports npcCorps
     * @async
     * @returns {array} A array of all NPC corporations.
     */
    npcCorps () {
        return request({ subUrl: `corporations/npccorps` })
    }
}