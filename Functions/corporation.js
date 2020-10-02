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
    corporationHistory(corporationID) {
        inputValidation({
            input: corporationID,
            type: 'number',
            message: `The function 'corporation.corporationHistory' requires a corporation ID!`
        })

        return request({
            subUrl: `corporations/${corporationID}/corporationhistory`
        })
    },
    /**
     * Get the icon urls for a corporation.
     * @exports icon
     * @async
     * @param corpID {number} The corporation ID to get the icon of.
     * @returns {object} Links to the different sizes of the corporation icon.
     */
    icons(corporationID) {
        inputValidation({
            input: corporationID,
            type: 'number',
            message: `The function 'corporation.icon' requires a corporation ID!`
        })

        return request({
            subUrl: `corporations/${corporationID}/icons`
        })
    },
    /**
     * Get public information about a corporation.
     * @exports info
     * @async
     * @param corpID {number} The corporation ID to get info from.
     * @returns {object} Public info on the corporation.
     */
    info(corporationID) {
        inputValidation({
            input: corporationID,
            type: 'number',
            message: `The function 'corporation.info' requires a corporation ID!`
        })

        return request({
            subUrl: `corporations/${corporationID}`
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
    /**
     * Get corporation blueprints
     * @requires esi-corporations.read_blueprints.v1
     * @requires one of the following EVE corporation role(s): Director
     * @param {number} corporationID
     * @param {number} page Which page of results to return. Defaults to 1
     * @returns a list of blueprints the corporation owns.
     */
    blueprints(corporationID, page = 1) {
        inputValidation({
            input: corporationID,
            type: 'number',
            message: `The function 'corporation.blueprints' requires a corporation ID!`
        })
        inputValidation({
            input: page,
            type: 'number',
            message: `The function 'corporation.blueprints' requires a page number, not a ${typeof page}!`
        })

        return request({
            subUrl: `corporations/${corporationID}/blueprints`,
            needsAuth: true
        })
    },
    /**
     * Get all corporation ALSC logs
     * @requires esi-corporations.read_container_logs.v1
     * @requires one of the following EVE corporation role(s): Director
     * @param {number} corporationID
     * @param {number} page Which page of results to return. Defaults to 1
     * @returns logs recorded in the past seven days from all audit log secure containers (ALSC) owned by a given corporation.
     */
    secureContainerLogs(corporationID, page = 1) {
        inputValidation({
            input: corporationID,
            type: 'number',
            message: `The function 'corporation.secureContainerLogs' requires a corporation ID!`
        })
        inputValidation({
            input: page,
            type: 'number',
            message: `The function 'corporation.secureContainerLogs' requires a page number, not a ${typeof page}!`
        })

        return request({
            subUrl: `corporations/${corporationID}/containers/logs`,
            needsAuth: true
        })
    },
    divisions(corporationID) {

    },
    facilities(corporationID) {

    },
    medals: {
        medals(corporationID) {

        },
        issued(corporationID) {

        },
    },
    members: {
        members(corporationID) {

        },
        limit(corporationID) {

        },
        tracking(corporationID) {

        },
    },
    roles: {
        roles(corporationID) {

        },
        history(corporationID) {

        },
    },
    shareholders(corporationID) {

    },
    standings(corporationID) {

    },
    starbases: {
        starbases(corporationID) {

        },
        info(corporationID, starbaseID) {

        },
    },
    titles(corporationID) {

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
                message: `The function 'corporation.assets.assets' requires a corporation ID!`
            })

            return request({
                subUrl: `corporations/${corporationID}/assets`,
                needsAuth: true
            })
        },
        /**
         * Get corporation asset locations.
         * @param {number} corporationID
         * @param {[number]} itemIDs
         * @requires esi-assets.read_corporation_assets.v1
         * @async

        * @returns {JSON} Locations for a set of item ids, which you can get from corporation assets endpoint. Coordinates for items in hangars or stations are set to (0,0,0)
        */
        locations(corporationID, itemIDs = []) {
            inputValidation({
                input: corporationID,
                type: 'number',
                message: `The function 'corporation.assets.locations' requires a corporation ID!`
            })
            inputValidation({
                input: itemIDs,
                type: 'object',
                message: `The function 'corporation.assets.locations' requires a array of item IDs!`
            })

            return request({
                subUrl: `corporations/${corporationID}/assets/locations`,
                requestType: 'post',
                body: {
                    item_ids: itemIDs
                },
                needsAuth: true
            })
        },
        /**
         * Get corporation asset names.
         * @param {number} corporationID
         * @param {[number]} itemIDs
         * @requires esi-assets.read_corporation_assets.v1
         * @async

        * @returns {JSON} Names for a set of item ids, which you can get from corporation assets endpoint. Typically used for items that can customize names, like containers or ships.
        */
        names(corporationID, itemIDs) {
            inputValidation({
                input: corporationID,
                type: 'number',
                message: `The function 'corporation.assets.names' requires a corporation ID!`
            })
            inputValidation({
                input: itemIDs,
                type: 'object',
                message: `The function 'corporation.assets.names' requires a array of item IDs!`
            })

            return request({
                subUrl: `corporations/${corporationID}/assets/names`,
                requestType: 'post',
                query: {
                    item_ids: itemIDs
                },
                needsAuth: true
            })
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
        folders(corporationID) {
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
         * Get corporation contact labels
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
    },
    contracts: {
        /**
         * Get corporation contracts.
         * @param {number} corporationID
         * @requires esi-contracts.read_corporation_contracts.v1
         * @returns contracts available to a corporation, only if the corporation is issuer, acceptor or assignee. Only returns contracts no older than 30 days, or if the status is "in_progress".
         */
        contracts(corporationID) {
            inputValidation({
                input: characterID,
                type: 'number',
                message: `The function 'corporation.contracts.contracts' requires a corporation ID!`
            })
            request({
                subUrl: `/corporations/${corporationID}/contracts/`,
                needsAuth: true
            })
        },
        /**
         * Get corporation contract bids.
         * @param {number} corporationID
         * @param {number} contractID
         * @requires esi-contracts.read_corporation_contracts.v1
         * @returns bids on a particular auction contract.
         */
        bids(corporationID, contractID) {
            inputValidation({
                input: corporationID,
                type: 'number',
                message: `The function 'corporation.contracts.bids' requires a corporation ID!`
            })
            inputValidation({
                input: contractID,
                type: 'number',
                message: `The function 'corporation.contracts.bids' requires a contract ID!`
            })
            request({
                subUrl: `/corporations/${corporationID}/contracts/${contractID}/bids`,
                needsAuth: true
            })
        },
        /**
         * Get corporation contract items.
         * @param {number} corporationID
         * @param {number} contractID
         * @requires esi-contracts.read_corporation_contracts.v1
         * @returns items of a particular contract.
         */
        items(corporationID, contractID) {
            inputValidation({
                input: corporationID,
                type: 'number',
                message: `The function 'corporation.contracts.items' requires a corporation ID!`
            })
            inputValidation({
                input: contractID,
                type: 'number',
                message: `The function 'corporation.contracts.items' requires a contract ID!`
            })
            request({
                subUrl: `/corporations/${corporationID}/contracts/${contractID}/items`,
                needsAuth: true
            })
        }
    },
}