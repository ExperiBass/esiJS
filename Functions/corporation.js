const request = require('./esiJS-Utils/request')
const inputValidation = require('./esiJS-Utils/inputValidation')

module.exports = {
    /**
     * Get a list of all the corporations a corporation has been a member of
     * @exports corporationHistory
     * @async
     * @param corpID {number} The corporation to get the corporation history of.
     * @returns {[number]} A array of corporation IDs.
     */
    corporationHistory(corporationId) {
        inputValidation({
            input: corporationId,
            type: 'number',
            message: `The function 'corporation.corporationHistory' requires a corporation ID!`
        })

        return request({
            subUrl: `corporations/${corporationId}/corporationhistory`
        })
    },
    /**
     * Get the icon urls for a corporation.
     * @exports icon
     * @async
     * @param corpID {number} The corporation ID to get the icon of.
     * @returns {object} Links to the different sizes of the corporation icon.
     */
    icon(corporationId) {
        inputValidation({
            input: corporationId,
            type: 'number',
            message: `The function 'corporation.icon' requires a corporation ID!`
        })

        return request({
            subUrl: `corporations/${corporationId}/icons`
        })
    },
    /**
     * Get public information about a corporation.
     * @exports info
     * @async
     * @param corpID {number} The corporation ID to get info from.
     * @returns {object} Public info on the corporation.
     */
    info(corporationId) {
        inputValidation({
            input: corporationId,
            type: 'number',
            message: `The function 'corporation.info' requires a corporation ID!`
        })

        return request({
            subUrl: `corporations/${corporationId}`
        })
    },
    /**
     * Get a list of npc corporations.
     * @exports npcCorps
     * @async
     * @returns {[number]} A array of all NPC corporations.
     */
    npcCorps() {
        return request({
            subUrl: `corporations/npccorps`
        })
    },
    assets: {
        /**
         * Get corporation assets.
         * @requires esi-assets.read_corporation_assets.v1
         * @param {number} corporationID
         * @async

        * @returns {JSON} A list of the corporations assets.
        */
        assets(corporationID) {
            inputValidation({
                input: corporationID,
                type: 'number',
                message: `The function 'corporation.assets' requires a corporation ID!`
            })

            return request({
                subUrl: `corporations/${corporationID}/assets`
            }, true)
        },
        /**
         * Get corporation asset locations.
         * @param {number} corporationID
         * @param {[number]} itemIDs
         * @requires esi-assets.read_corporation_assets.v1
         * @async

        * @returns {JSON} Locations for a set of item ids, which you can get from corporation assets endpoint. Coordinates for items in hangars or stations are set to (0,0,0)
        */
        assetLocations(corporationID, itemIDs = []) {
            inputValidation({
                input: corporationID,
                type: 'number',
                message: `The function 'corporation.assetLocations' requires a corporation ID!`
            })
            inputValidation({
                input: itemIDs,
                type: 'object',
                message: `The function 'corporation.assetLocations' requires a array of item IDs!`
            })

            return request({
                subUrl: `corporations/${corporationID}/assets/locations`,
                requestType: 'post',
                body: {
                    item_ids: itemIDs
                }
            }, true)
        },
        /**
         * Get corporation asset names.
         * @param {number} corporationID
         * @param {[number]} itemIDs
         * @requires esi-assets.read_corporation_assets.v1
         * @async

        * @returns {JSON} Names for a set of item ids, which you can get from corporation assets endpoint. Typically used for items that can customize names, like containers or ships.
        */
        assetNames(corporationID, itemIDs) {
            inputValidation({
                input: corporationID,
                type: 'number',
                message: `The function 'corporation.assetNames' requires a corporation ID!`
            })
            inputValidation({
                input: itemIDs,
                type: 'object',
                message: `The function 'corporation.assetNames' requires a array of item IDs!`
            })

            return request({
                subUrl: `corporations/${corporationID}/assets/names`,
                requestType: 'post',
                query: {
                    item_ids: itemIDs
                }
            }, true)
        }
    },
    bookmarks: {
        /**
         * List corporation bookmarks
         * @param {number} corporationID
         * @requires esi-bookmarks.read_corporation_bookmarks.v1
         * @async

        * @returns {JSON} A list of your corporation’s personal bookmarks.
        */
        bookmarks(corporationID) {
            inputValidation({
                input: corporationID,
                type: 'number',
                message: `The function 'corporation.bookmarks' requires a corporation ID!`
            })

            return request({
                subUrl: `corporations/${corporationID}/bookmarks`
            }, true)
        },
        /**
         * List corporation bookmark folders
         * @param {number} corporationID
         * @requires esi-bookmarks.read_corporation_bookmarks.v1
         * @async

        * @returns {JSON} A list of your corporation’s personal bookmark folders.
        */
        bookmarkFolders(corporationID) {
            inputValidation({
                input: corporationID,
                type: 'number',
                message: `The function 'corporation.bookmarkFolders' requires a corporation ID!`
            })

            return request({
                subUrl: `corporations/${corporationID}/bookmarks/folders`
            }, true)

        }
    },
    contacts: {
        /**
         * Get corporation contacts.
         * @param {number} corporationID
         * @async
         * @requires esi-corporations.read_contacts.v1
         * @returns {JSON}
         */
        contacts(corporationID) {
            inputValidation({
                input: corporationID,
                type: 'number',
                message: `The function 'corporation.contacts.contacts' requires a corporation ID!`
            })

            request({
                subUrl: `corporations/${corporationID}/contacts`,
                needsAuth: true
            })
        },
        /**
         *
         * @param {number} corporationID
         * @async
         * @returns esi-corporations.read_contacts.v1
         */
        labels(corporationID) {
            inputValidation({
                input: corporationID,
                type: 'number',
                message: `The function 'corporation.contacts.labels' requires a corporation ID!`
            })

            request({
                subUrl: `corporations/${corporationID}/contacts/labels`,
                needsAuth: true
            })
        }
    }
}