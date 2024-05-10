const { request, inputValidation } = require('./util/util.js')

module.exports = {
    /**
     * Get a list of all the aliances a corporation has been a member of.
     * @param corporationID {number} The corporation to get the corporation history of.
     * @returns {Promise<number[]>} A array of corporation IDs.
     */
    corporationHistory(corporationID) {
        inputValidation({
            input: corporationID,
            type: 'number',
            message: `The function 'corporation.corporationHistory' requires a corporation ID!`
        })

        return request({
            subUrl: `corporations/${corporationID}/alliancehistory`
        })
    },
    /**
     * Get the icon urls for a corporation.
     * @param corporationID {number} The corporation ID to get the icon of.
     * @returns {Promise<object>} Links to the different sizes of the corporation icon.
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
     * @param corporationID {number} The corporation ID to get info from.
     * @returns {Promise<object>} Public info on the corporation.
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
     * Get a list of NPC corporations.
     * @returns {Promise<number[]>} A array of all NPC corporations.
     */
    npcCorps() {
        return request({
            subUrl: `corporations/npccorps`
        })
    },
    /**
     * Get corporation blueprints.
     * @param {number} corporationID
     * @param {number} page Which page of results to return. Defaults to 1
     * @requires esi-corporations.read_blueprints.v1
     * @requires one of the following EVE corporation role(s): Director
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
            query: {
                page: page
            },
            needsAuth: true
        })
    },
    /**
     * Get all corporation ALSC logs.
     * @param {number} corporationID
     * @param {number} page Which page of results to return. Defaults to 1
     * @requires esi-corporations.read_container_logs.v1
     * @requires one of the following EVE corporation role(s): Director
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
            query: {
                page: page
            },
            needsAuth: true
        })
    },
    /**
     * Get corporation divisions.
     * @param {number} corporationID
     * @requires esi-corporations.read_divisions.v1
     * @requires one of the following EVE corporation role(s): Director
     * @returns corporation hangar and wallet division names, only show if a division is not using the default name
     */
    divisions(corporationID) {
        inputValidation({
            input: corporationID,
            type: 'number',
            message: `The function 'corporation.divisions' requires a corporation ID!`
        })

        return request({
            subUrl: `corporations/${corporationID}/divisions`,
            needsAuth: true
        })
    },
    /**
     * Get corporation facilities.
     * @param {number} corporationID
     * @requires esi-corporations.read_facilities.v1
     * @requires one of the following EVE corporation role(s): Factory_Manager
     * @returns a corporation’s facilities.
     */
    facilities(corporationID) {
        inputValidation({
            input: corporationID,
            type: 'number',
            message: `The function 'corporation.facilities' requires a corporation ID!`
        })

        return request({
            subUrl: `corporations/${corporationID}/facilities`,
            needsAuth: true
        })
    },
    /**
     *
     */
    medals: {
        /**
         * Get corporation medals.
         * @param {number} corporationID
         * @requires esi-corporations.read_medals.v1
         * @returns a corporation’s medals.
         */
        medals(corporationID) {
            inputValidation({
                input: corporationID,
                type: 'number',
                message: `The function 'corporation.medals.medals' requires a corporation ID!`
            })

            return request({
                subUrl: `corporations/${corporationID}/medals`,
                needsAuth: true
            })
        },
        /**
         * Get corporation issued medals.
         * @param {number} corporationID
         * @requires esi-corporations.read_medals.v1
         * @returns medals issued by a corporation.
         */
        issued(corporationID) {
            inputValidation({
                input: corporationID,
                type: 'number',
                message: `The function 'corporation.medals.issued' requires a corporation ID!`
            })

            return request({
                subUrl: `corporations/${corporationID}/medals/issued`,
                needsAuth: true
            })
        },
    },
    /**
     *
     */
    members: {
        /**
         * Get corporation members.
         * @param {number} corporationID
         * @requires esi-corporations.read_corporation_membership.v1
         * @returns the current member list of a corporation, the token’s character need to be a member of the corporation.
         */
        members(corporationID) {
            inputValidation({
                input: corporationID,
                type: 'number',
                message: `The function 'corporation.members.members' requires a corporation ID!`
            })

            return request({
                subUrl: `corporations/${corporationID}/members`,
                needsAuth: true
            })
        },
        /**
         * Get corporation member limit.
         * @param {number} corporationID
         * @requires esi-corporations.track_members.v1
         * @requires one of the following EVE corporation role(s): Director
         * @returns a corporation’s member limit, not including CEO himself
         */
        limit(corporationID) {
            inputValidation({
                input: corporationID,
                type: 'number',
                message: `The function 'corporation.members.limit' requires a corporation ID!`
            })

            return request({
                subUrl: `corporations/${corporationID}/members/limit`,
                needsAuth: true
            })
        },
        /**
         * Get corporation's members' titles.
         * @param {number} corporationID
         * @requires esi-corporations.read_titles.v1
         * @requires one of the following EVE corporation role(s): Director
         * @returns a corporation’s members’ titles.
         */
        titles(corporationID) {
            inputValidation({
                input: corporationID,
                type: 'number',
                message: `The function 'corporation.members.titles' requires a corporation ID!`
            })

            return request({
                subUrl: `corporations/${corporationID}/members/titles`,
                needsAuth: true
            })
        },
        /**
         * Track corporation members.
         * @param {number} corporationID
         * @requires esi-corporations.track_members.v1
         * @requires one of the following EVE corporation role(s): Director
         * @returns additional information about a corporation’s members which helps tracking their activities
         */
        tracking(corporationID) {
            inputValidation({
                input: corporationID,
                type: 'number',
                message: `The function 'corporation.members.tracking' requires a corporation ID!`
            })

            return request({
                subUrl: `corporations/${corporationID}/membertracking`,
                needsAuth: true
            })
        },
    },
    /**
     *
     */
    roles: {
        /**
         * Get corporation member roles.
         * @param {number} corporationID
         * @requires esi-corporations.read_corporation_membership.v1
         * @returns the roles of all members if the character has the personnel manager role or any grantable role.
         */
        roles(corporationID) {
            inputValidation({
                input: corporationID,
                type: 'number',
                message: `The function 'corporation.roles.roles' requires a corporation ID!`
            })

            return request({
                subUrl: `corporations/${corporationID}/roles`,
                needsAuth: true
            })
        },
        /**
         * Get corporation member roles history.
         * @param {number} corporationID
         * @requires esi-corporations.read_corporation_membership.v1
         * @returns how roles have changed for a coporation’s members, up to a month
         */
        history(corporationID) {
            inputValidation({
                input: corporationID,
                type: 'number',
                message: `The function 'corporation.roles.history' requires a corporation ID!`
            })

            return request({
                subUrl: `corporations/${corporationID}/roles/history`,
                needsAuth: true
            })
        },
    },
    /**
     * Get corporation shareholders.
     * @param {number} corporationID
     * @requires esi-wallet.read_corporation_wallets.v1
     * @requires one of the following EVE corporation role(s): Director
     * @returns the current shareholders of a corporation.
     */
    shareholders(corporationID) {
        inputValidation({
            input: corporationID,
            type: 'number',
            message: `The function 'corporation.shareholders' requires a corporation ID!`
        })

        return request({
            subUrl: `corporations/${corporationID}/shareholders`,
            needsAuth: true
        })
    },
    /**
     * Get corporation standings.
     * @param {number} corporationID
     * @requires esi-corporations.read_standings.v1
     * @returns corporation standings from agents, NPC corporations, and factions.
     */
    standings(corporationID) {
        inputValidation({
            input: corporationID,
            type: 'number',
            message: `The function 'corporation.standings' requires a corporation ID!`
        })

        return request({
            subUrl: `corporations/${corporationID}/standings`,
            needsAuth: true
        })
    },
    /**
     *
     */
    starbases: {
        /**
         * Get corporation starbases (POSes).
         * @param {number} corporationID
         * @requires esi-corporations.read_starbases.v1
         * @requires one of the following EVE corporation role(s): Director
         * @returns list of corporation starbases (POSes).
         */
        starbases(corporationID, page = 1) {
            inputValidation({
                input: corporationID,
                type: 'number',
                message: `The function 'corporation.starbases.starbases' requires a corporation ID!`
            })
            inputValidation({
                input: page,
                type: 'number',
                message: `The function 'corporation.starbases.starbases' requires a page number!`,
                optional: true
            })

            return request({
                subUrl: `corporations/${corporationID}/starbases`,
                query: {
                    page: page
                },
                needsAuth: true
            })
        },
        /**
         * Get starbase (POS) detail.
         * @param {number} corporationID
         * @param {number} starbaseID
         * @param {number} systemID The solar system this starbase (POS) is located in.
         * @requires esi-corporations.read_starbases.v1
         * @requires one of the following EVE corporation role(s): Director
         */
        info(corporationID, starbaseID, systemID) {
            inputValidation({
                input: corporationID,
                type: 'number',
                message: `The function 'corporation.starbases.info' requires a corporation ID!`
            })
            inputValidation({
                input: starbaseID,
                type: 'number',
                message: `The function 'corporation.starbases.info' requires a starbase ID!`
            })
            inputValidation({
                input: systemID,
                type: 'number',
                message: `The function 'corporation.starbases.info' requires a system ID!`
            })

            return request({
                subUrl: `corporations/${corporationID}/starbases/${starbaseID}`,
                query: {
                    system_id: systemID
                },
                needsAuth: trueq
            })
        },
    },
    /**
     * Get corporation titles.
     * @param {number} corporationID
     * @requires esi-corporations.read_titles.v1
     * @requires one of the following EVE corporation role(s): Director
     * @returns a corporation’s titles.
     */
    titles(corporationID) {
        inputValidation({
            input: corporationID,
            type: 'number',
            message: `The function 'corporation.titles' requires a corporation ID!`
        })

        return request({
            subUrl: `corporations/${corporationID}/titles`,
            needsAuth: true
        })
    },
    /**
     * Get corporation structures.
     * @param {number} corporationID
     * @param {number} page
     * @requires esi-corporations.read_structures.v1
     * @requires one of the following EVE corporation role(s): Station_Manager
     * @returns a list of corporation structures. This route’s version includes the changes to structures detailed in this blog: https://www.eveonline.com/article/upwell-2.0-structures-changes-coming-on-february-13th
     */
    structures(corporationID, page = 1) {
        inputValidation({
            input: corporationID,
            type: 'number',
            message: `The function 'corporation.structures' requires a corporation ID!`
        })
        inputValidation({
            input: page,
            type: 'number',
            message: `The function 'corporation.structures' requires a page number!`,
            optional: true
        })

        return request({
            subUrl: `corporations/${corporationID}/structures`,
            needsAuth: true
        })
    },
    /**
     *
     */
    assets: {
        /**
         * Get corporation assets.
         * @param {number} corporationID
         * @requires esi-assets.read_corporation_assets.v1
         * @returns {Promise<object>} A list of the corporations assets.
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
         * @param {number[]} itemIDs
         * @requires esi-assets.read_corporation_assets.v1
         * @returns {Promise<object>} Locations for a set of item ids, which you can get from corporation assets endpoint. Coordinates for items in hangars or stations are set to (0,0,0)
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
         * @param {number[]} itemIDs
         * @requires esi-assets.read_corporation_assets.v1
         * @returns {Promise<object>} Names for a set of item ids, which you can get from corporation assets endpoint. Typically used for items that can customize names, like containers or ships.
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
    /**
     *
     */
    bookmarks: {
        /**
         * List corporation bookmarks
         * @param {number} corporationID
         * @requires esi-bookmarks.read_corporation_bookmarks.v1
         * @returns {Promise<object>} A list of your corporation’s personal bookmarks.
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


        * @returns {Promise<object>} A list of your corporation’s personal bookmark folders.
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
    /**
     *
     */
    contacts: {
        /**
         * Get corporation contacts.
         * @param {number} corporationID
         * @requires esi-corporations.read_contacts.v1
         * @returns {Promise<object>}
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
    /**
     *
     */
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
    /**
     *
     */
    industry: {
        /**
         * Moon extraction timers
         * @param {number} corporationID
         * @param {number} page The page of results to return.
         * @requires esi-industry.read_corporation_mining.v1
         * @requires one of the following EVE corporation role(s): Station_Manager
         * @returns Extraction timers for all moon chunks being extracted by refineries belonging to a corporation.
         */
        extractions(corporationID, page = 1) {
            inputValidation({
                input: corporationID,
                type: 'number',
                message: `The function 'corporation.industry.extractions' requires a corporation ID!`
            })
            inputValidation({
                input: page,
                type: 'number',
                message: `The function 'corporation.industry.extractions' requires a page number!`,
                optional: true
            })

            return request({
                subUrl: `corporations/${corporationID}/mining/extractions`,
                query: {
                    page: page
                },
                needsAuth: true
            })
        },
        /**
         * Corporation mining observers.
         * @param {number} corporationID
         * @param {number} page The page of results to return.
         * @requires esi-industry.read_corporation_mining.v1
         * @requires one of the following EVE corporation role(s): Accountant
         * @returns Paginated list of all entities capable of observing and recording mining for a corporation
         */
        observers(corporationID, page = 1) {
            inputValidation({
                input: corporationID,
                type: 'number',
                message: `The function 'corporation.industry.observers' requires a corporation ID!`
            })
            inputValidation({
                input: page,
                type: 'number',
                message: `The function 'corporation.industry.observers' requires a page number!`,
                optional: true
            })

            return request({
                subUrl: `corporations/${corporationID}/mining/observers`,
                query: {
                    page: page
                },
                needsAuth: true
            })
        },
        /**
         * Observed corporation mining
         * @param {number} corporationID
         * @param {number} observerID
         * @param {number} page The page of results to return.
         * @requires esi-industry.read_corporation_mining.v1
         * @requires one of the following EVE corporation role(s): Accountant
         * @returns Paginated record of all mining seen by an observer.
         */
        observerInfo(corporationID, observerID, page = 1) {
            inputValidation({
                input: corporationID,
                type: 'number',
                message: `The function 'corporation.industry.observerInfo' requires a corporation ID!`
            })
            inputValidation({
                input: observerID,
                type: 'number',
                message: `The function 'corporation.industry.observerInfo' requires a observer ID!`
            })
            inputValidation({
                input: page,
                type: 'number',
                message: `The function 'corporation.industry.observerInfo' requires a page number!`,
                optional: true
            })

            return request({
                subUrl: `corporations/${corporationID}/mining/observers/${observerID}`,
                query: {
                    page: page
                },
                needsAuth: true
            })
        },
        /**
         * List corporation industry jobs
         * @param {number} corporationID
         * @param {number} page The page of results to return.
         * @requires esi-industry.read_corporation_jobs.v1
         * @requires one of the following EVE corporation role(s): Factory_Manager
         * @returns industry jobs run by a corporation
         */
        jobs(corporationID, page = 1) {
            inputValidation({
                input: corporationID,
                type: 'number',
                message: `The function 'corporation.industry.jobs' requires a corporation ID!`
            })
            inputValidation({
                input: page,
                type: 'number',
                message: `The function 'corporation.industry.jobs' requires a page number!`,
                optional: true
            })

            return request({
                subUrl: `corporations/${corporationID}/industry/jobs`,
                query: {
                    page: page
                },
                needsAuth: true
            })
        }
    },
    /**
     *
     */
    killmails: {
        /**
         * Get a corporation's recent kills and losses.
         * @param {number} corporationID
         * @param {number} page The page of results to return.
         * @requires esi-killmails.read_corporation_killmails.v1
         * @requires one of the following EVE corporation role(s): Director
         * @returns a list of a corporation’s kills and losses going back 90 days.
         */
        recent(corporationID, page = 1) {
            inputValidation({
                input: corporationID,
                type: 'number',
                message: `The function 'corporation.killmails.recent' requires a corporation ID!`
            })
            inputValidation({
                input: page,
                type: 'number',
                message: `The function 'corporation.killmails.recent' requires a page number!`,
                optional: true
            })

            return request({
                subUrl: `corporations/${corporationID}/killmails/recent`,
                query: {
                    page: page
                },
                needsAuth: true
            })
        }
    },
    /**
     *
     */
    market: {
        /**
         * List open orders from a corporation.
         * @param {number} corporationID
         * @requires esi-markets.read_corporation_orders.v1
         */
        orders(corporationID) {
            inputValidation({
                input: corporationID,
                type: 'number',
                message: `The function 'corporation.market.orders' needs a corporation ID!`
            })

            return request({
                subUrl: `corporation/${corporationID}/orders`,
                requestType: 'GET',
                needsAuth: true
            })
        },
        /**
         * List historical orders by a corporation.
         * @param {number} corporationID
         * @requires esi-markets.read_corporation_orders.v1
         */
        orderHistory(corporationID) {
            inputValidation({
                input: corporationID,
                type: 'number',
                message: `The function 'corporation.market.orderHistory' needs a corporation ID!`
            })

            return request({
                subUrl: `corporation/${corporationID}/orders/history`,
                requestType: 'GET',
                needsAuth: true
            })
        },
    },
    /**
     *
     */
    pi: {
        /**
         * List corporation customs offices.
         * @param {number} corporationID
         * @requires esi-planets.read_customs_offices.v1
         * @requires one of the following EVE corporation role(s): Director
         * @returns customs offices owned by a corporation.
         */
        customsOffices(corporationID) {
            inputValidation({
                input: corporationID,
                type: 'number',
                message: `The function 'corporation.pi.customsOffices' needs a corporation ID!`
            })

            return request({
                subUrl: `corporation/${corporationID}/customs_offices`,
                needsAuth: true
            })
        }
    },
    /**
     *
     */
    wallets: {
        /**
         * Get a corporation's wallet balance.
         * @param {number} corporationID
         * @requires esi-wallet.read_corporation_wallets.v1
         * @requires one of the following EVE corporation role(s): Accountant, Junior_Accountant
         * @returns a corporation’s wallets balance.
         */
        balance(corporationID) {
            inputValidation({
                input: corporationID,
                type: 'number',
                message: `The function 'corporation.wallets.balance' needs a corporation ID!`
            })

            return request({
                subUrl: `corporations/${corporationID}/wallets`,
                needsAuth: true
            })
        },
        /**
         * Get corporation wallet journal.
         * @param {number} corporationID
         * @requires esi-wallet.read_corporation_wallets.v1
         * @param {number} divisionID The division to get data from.
         * @requires one of the following EVE corporation role(s): Accountant, Junior_Accountant
         * @returns the given corporation’s wallet journal going 30 days back.
         */
        journal(corporationID, divisionID) {
            inputValidation({
                input: corporationID,
                type: 'number',
                message: `The function 'corporation.wallets.journal' needs a corporation ID!`
            })
            inputValidation({
                input: divisionID,
                type: 'number',
                message: `The function 'corporation.wallets.journal' needs a division ID!`
            })

            return request({
                subUrl: `corporations/${corporationID}/wallets/${divisionID}/journal`,
                needsAuth: true
            })
        },
        /**
         * Get wallet transactions.
         * @param {number} corporationID
         * @param {number} divisionID The division to get data from.
         * @requires esi-wallet.read_corporation_wallets.v1
         * @requires one of the following EVE corporation role(s): Accountant, Junior_Accountant
         * @returns wallet transactions of a corporation.
         */
        transactions(corporationID, divisionID) {
            inputValidation({
                input: corporationID,
                type: 'number',
                message: `The function 'corporation.wallets.transactions' needs a corporation ID!`
            })
            inputValidation({
                input: divisionID,
                type: 'number',
                message: `The function 'corporation.wallets.journal' needs a division ID!`
            })

            return request({
                subUrl: `corporations/${corporationID}/wallets/${divisionID}/transactions`,
                needsAuth: true
            })
        }
    }
}