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
     * Get character assets.
     * @requires esi-assets.read_assets.v1
     * @param {number} characterID
     * @async
     * @authenicated
     * @returns {JSON} A list of the characters assets.
     */
    assets(characterID) {
        inputValidation({input: characterID, type: 'number', message: `The function 'character.assets' requires a character ID!`})

        return request({subUrl: `characters/${characterID}/assets`}, true)
    },
    /**
     * Get character asset locations.
     * @param {number} characterID 
     * @param {[number]} itemIDs 
     * @requires esi-assets.read_assets.v1
     * @async
     * @authenicated
     * @returns {JSON} Locations for a set of item ids, which you can get from character assets endpoint. Coordinates for items in hangars or stations are set to (0,0,0)
     */
    assetLocations(characterID, itemIDs = []) {
        inputValidation({input: characterID, type: 'number', message: `The function 'character.assetLocations' requires a character ID!`})
        inputValidation({input: itemIDs, type: 'object', message: `The function 'character.assetLocations' requires a array of item IDs!`})

        return request({
            subUrl: `characters/${characterID}/assets/locations`,
            post: true,
            body: {
                item_ids: itemIDs
            }
        }, true)
    },
    /**
     * Get character asset names.
     * @param {number} characterID 
     * @param {[number]} itemIDs
     * @requires esi-assets.read_assets.v1 
     * @async
     * @authenicated
     * @returns {JSON} Names for a set of item ids, which you can get from character assets endpoint. Typically used for items that can customize names, like containers or ships.
     */
    assetNames(characterID, itemIDs) {
        inputValidation({input: characterID, type: 'number', message: `The function 'character.assetNames' requires a character ID!`})
        inputValidation({input: itemIDs, type: 'object', message: `The function 'character.assetNames' requires a array of item IDs!`})

        return request({
            subUrl: `characters/${characterID}/assets/names`,
            post: true,
            query: {
                item_ids: itemIDs
            }
        }, true)
    },
    /**
     * Gets agents research.
     * @requires esi-characters.read_agents_research.v1
     * @param {number} characterID
     * @async
     * @authenicated
     * @returns {JSON} A list of agents research information for a character. The formula for finding the current research points with an agent is: currentPoints = remainderPoints + pointsPerDay * days(currentTime - researchStartDate)
     */
    agentsResearch(characterID) {
        inputValidation({input: characterID, type: 'number', message: `The function 'character.agentsResearch' requires a character ID!`})

        return request({subUrl: `character/${characterID}/agents_research`}, true)
    },
    /**
     * Get blueprints.
     * @param {number} characterID 
     * @requires esi-characters.read_blueprints.v1
     * @async
     * @authenicated
     * @returns {JSON} A list of blueprints the character owns.
     */
    blueprints(characterID) {
        inputValidation({input: characterID, type: 'number', message: `The function 'character.agentsResearch' requires a character ID!`})
        
        return request({subUrl: `characters/${characterID}/blueprints`}, true)
    },
    /**
     * Calculate a CSPA (CONCORD Spam Prevention Act) cost.
     * @param {number} characterID 
     * @param {[numbers]} characters The target characters to calculate the charge for.
     * @requires esi-characters.read_contacts.v1
     * @async
     * @authencated
     * @returns {JSON} A CSPA charge cost.
     */
    cspa(characterID, characters = []) {
        inputValidation({input: characterID, type: 'number', message: `The function 'character.cspa' requires a character ID!`})
        inputValidation({input: characters, type: 'object', message: `The function 'character.cspa' requires a array of character IDs!`})

        return request({
            subUrl: `character/${characterID}/cspa`,
            post: true,
            body: {
                characters
            }
        }, true)
    },
    /**
     * Get jump fatigue.
     * @param {number} characterID 
     * @requires esi-characters.read_fatigue.v1
     * @async
     * @authenicated
     * @returns {JSON} A character’s jump activation and fatigue information.
     */
    fatigue(characterID) {
        inputValidation({input: characterID, type: 'number', message: `The function 'character.fatigue' requires a character ID!`})

        return request({subUrl: `character/${characterID}/fatigue`})
    },
    /**
     * Get medals.
     * @param {number} characterID 
     * @requires esi-characters.read_medals.v1
     * @async
     * @authenicated
     * @returns {JSON} A list of medals the character has.
     */
    medals(characterID) {
        inputValidation({input: characterID, type: 'number', message: `The function 'character.medals' requires a character ID!`})

        return request({subUrl: `character/${characterID}/medals`})
    },
    /**
     * Get character notifications.
     * @param {number} characterID The character to get the notifications of.
     * @requires esi-characters.read_notifications.v1
     * @async
     * @authenicated
     * @returns {JSON} Character notifications.
     */
    notifications (characterId) {
        inputValidation({ input: characterId, type: 'number', message: `The function 'character.corpHistory' needs a character ID!` })

        return request({ subUrl: `characters/${characterId}/notifications`}, true)
    },
    /**
     * Get new contact notifications.
     * @param {number} characterID
     * @requires esi-characters.read_notifications.v1
     * @async
     * @authenicated
     * @returns {JSON} Notifications about having been added to someone’s contact list.
     */
    notificationContacts(characterID) {
        inputValidation({input: characterID, type: 'number', message: `The function 'character.notificationContacts' requires a character ID!`})

        return request({subUrl: `character/${characterID}/notification/contacts`})
    },
    /**
     * Get character corporation roles.
     * @param {number} characterID 
     * @requires esi-characters.read_corporation_roles.v1
     * @async
     * @authenicated
     * @returns {JSON} A character’s corporation roles.
     */
    roles(characterID) {
        inputValidation({input: characterID, type: 'number', message: `The function 'character.roles' requires a character ID!`})

        return request({subUrl: `character/${characterID}/roles`})
    },
    /**
     * Get standings.
     * @param {number} characterID 
     * @requires esi-characters.read_standings.v1
     * @async
     * @authenicated
     * @returns {JSON} Character standings from agents, NPC corporations, and factions.
     */
    standings(characterID) {
        inputValidation({input: characterID, type: 'number', message: `The function 'character.standings' requires a character ID!`})

        return request({subUrl: `character/${characterID}/standings`})
    },
    /**
     * Yearly aggregate stats.
     * @param {number} characterID 
     * @requires esi-characterstats.read.v1
     * @async
     * @authenicated
     * @returns {JSON} Aggregate yearly stats for a character.
     */
    stats(characterID) {
        inputValidation({input: characterID, type: 'number', message: `The function 'character.stats' requires a character ID!`})

        return request({subUrl: `character/${characterID}/stats`})
    },
    /**
     * Get character corporation titles.
     * @param {number} characterID
     * @requires esi-characters.read_titles.v1
     * @async
     * @authenicated
     * @returns {JSON} A character’s titles.
     */
    titles(characterID) {
        inputValidation({input: characterID, type: 'number', message: `The function 'character.titles' requires a character ID!`})

        return request({subUrl: `character/${characterID}/titles`})
    }
}