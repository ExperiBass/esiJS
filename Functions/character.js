const request = require('./esiJS-Utils/request')
const inputValidation = require('./esiJS-Utils/inputValidation')

module.exports = {
    /**
     * Get public information about an alliance.
     * @exports info
     * @async
     * @param ID {number} The alliance ID to get info from.
     * @returns {JSON} Public info on the alliance.
     */
    affiliation (idArray) {
        inputValidation({ input: idArray, type: 'object', message: `The function 'character.affiliation' requires an array of ids!` })

        return request({ subUrl: 'characters/affiliation', post: true, body: idArray })
    },
    /**
     * GGet a list of all the corporations a character has been a member of.
     * @exports corpHistory
     * @async
     * @param charID {number} The character to get the history of.
     * @returns {JSON} The character's history.
     */
    corpHistory (characterId) {
        inputValidation({ input: characterId, type: 'number', message: `The function 'character.corpHistory' needs a character ID!` })

        return request({ subUrl: `characters/${characterId}/corporationhistory` })
    },
    /**
     * Get portrait urls for a character.
     * @exports portrait
     * @async
     * @param charID {number} The character to get the portrait of.
     * @returns {JSON} Links to the different sizes of the character's portrait.
     */
    portrait (characterId) {
        inputValidation({ input: characterId, type: 'number', message: `The function 'character.portrait' needs a character ID!` })

        return request({ subUrl: `characters/${characterId}/portrait` })
    },
    /**
     * Get public information about a character.
     * @exports info
     * @async
     * @param charID {number} The character to get the public info of.
     * @returns {JSON} Public info on a character.
     */
    info (characterId) {
        inputValidation({ input: characterId, type: 'number', message: `The function 'character.corpHistory' needs a character ID!` })

        return request({ subUrl: `characters/${characterId}` })
    },
    /**
     * Gets the notifications of a character.
     * @async
     * @authenicated
     * @param {number} characterID The character to get the notifications of.
     * @returns {JSON} Character notifications.
     */
    notifications (characterId) {
        inputValidation({ input: characterId, type: 'number', message: `The function 'character.corpHistory' needs a character ID!` })

        return request({ subUrl: `characters/${characterId}/notifications`})
    }
}