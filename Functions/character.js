const request = require('./esiJS-Utils/request')
const inputValidation = require('./esiJS-Utils/inputValidation')

module.exports = {
    /**
     * Get public information about an alliance.
     * @exports info
     * @param characterID {number} The alliance ID to get info from.
     * @returns {JSON} Public info on the alliance.
     */
    affiliation(characterID) {
        inputValidation({
            input: characterID,
            type: 'object',
            message: `The function 'character.affiliation' requires a character id!`
        })

        return request({
            subUrl: 'characters/affiliation',
            requestType: 'post',
            body: idArray
        })
    },
    /**
     * Get a list of all the corporations a character has been a member of.
     * @exports corpHistory
     * @param characterID {number} The character to get the history of.
     * @returns {JSON} The character's history.
     */
    corpHistory(characterID) {
        inputValidation({
            input: characterID,
            type: 'number',
            message: `The function 'character.corpHistory' needs a character ID!`
        })

        return request({
            subUrl: `characters/${characterID}/corporationhistory`
        })
    },
    /**
     * Get portrait urls for a character.
     * @exports portrait
     * @param characterID {number} The character to get the portrait of.
     * @returns {JSON} Links to the different sizes of the character's portrait.
     */
    portrait(characterID) {
        inputValidation({
            input: characterID,
            type: 'number',
            message: `The function 'character.portrait' needs a character ID!`
        })

        return request({
            subUrl: `characters/${characterID}/portrait`
        })
    },
    /**
     * Get public information about a character.
     * @exports info
     * @param characterID {number} The character to get the public info of.
     * @returns {JSON} Public info on a character.
     */
    info(characterID) {
        inputValidation({
            input: characterID,
            type: 'number',
            message: `The function 'character.info' needs a character ID!`
        })

        return request({
            subUrl: `characters/${characterID}`
        })
    },
    /**
     * Gets agents research.
     * @requires esi-characters.read_agents_research.v1
     * @param {number} characterID
     * @returns {JSON} A list of agents research information for a character. The formula for finding the current research points with an agent is: currentPoints = remainderPoints + pointsPerDay * days(currentTime - researchStartDate)
     */
    agentsResearch(characterID) {
        inputValidation({
            input: characterID,
            type: 'number',
            message: `The function 'character.agentsResearch' requires a character ID!`
        })

        return request({
            subUrl: `characters/${characterID}/agents_research`,
            needsAuth: true
        })
    },
    /**
     * Get blueprints.
     * @param {number} characterID
     * @requires esi-characters.read_blueprints.v1
     * @returns {JSON} A list of blueprints the character owns.
     */
    blueprints(characterID) {
        inputValidation({
            input: characterID,
            type: 'number',
            message: `The function 'character.agentsResearch' requires a character ID!`
        })

        return request({
            subUrl: `characters/${characterID}/blueprints`,
            needsAuth: true
        })
    },
    /**
     * Calculate a CSPA (CONCORD Spam Prevention Act) cost.
     * @param {number} characterID
     * @param {[numbers]} characters The target characters to calculate the charge for.
     * @requires esi-characters.read_contacts.v1
     * @returns {JSON} A CSPA charge cost.
     */
    cspa(characterID, characters = []) {
        inputValidation({
            input: characterID,
            type: 'number',
            message: `The function 'character.cspa' requires a character ID!`
        })
        inputValidation({
            input: characters,
            type: 'object',
            message: `The function 'character.cspa' requires a array of character IDs!`
        })

        return request({
            subUrl: `characters/${characterID}/cspa`,
            requestType: 'post',
            body: {
                characters
            },
            needsAuth: true
        })
    },
    /**
     * Get jump fatigue.
     * @param {number} characterID
     * @requires esi-characters.read_fatigue.v1
     * @returns {JSON} A character’s jump activation and fatigue information.
     */
    fatigue(characterID) {
        inputValidation({
            input: characterID,
            type: 'number',
            message: `The function 'character.fatigue' requires a character ID!`
        })

        return request({
            subUrl: `characters/${characterID}/fatigue`,
            needsAuth: true
        })
    },
    /**
     * Get medals.
     * @param {number} characterID
     * @requires esi-characters.read_medals.v1
     * @returns {JSON} A list of medals the character has.
     */
    medals(characterID) {
        inputValidation({
            input: characterID,
            type: 'number',
            message: `The function 'character.medals' requires a character ID!`
        })

        return request({
            subUrl: `characters/${characterID}/medals`,
            needsAuth: true
        })
    },
    /**
     * Get character corporation roles.
     * @param {number} characterID
     * @requires esi-characters.read_corporation_roles.v1
     * @returns {JSON} A character’s corporation roles.
     */
    roles(characterID) {
        inputValidation({
            input: characterID,
            type: 'number',
            message: `The function 'character.roles' requires a character ID!`
        })

        return request({
            subUrl: `characters/${characterID}/roles`,
            needsAuth: true
        })
    },
    /**
     * Get standings.
     * @param {number} characterID
     * @requires esi-characters.read_standings.v1
     * @returns {JSON} Character standings from agents, NPC corporations, and factions.
     */
    standings(characterID) {
        inputValidation({
            input: characterID,
            type: 'number',
            message: `The function 'character.standings' requires a character ID!`
        })

        return request({
            subUrl: `characters/${characterID}/standings`,
            needsAuth: true
        })
    },
    /**
     * Yearly aggregate stats.
     * @param {number} characterID
     * @requires esi-characterstats.read.v1
     * @returns {JSON} Aggregate yearly stats for a character.
     */
    stats(characterID) {
        inputValidation({
            input: characterID,
            type: 'number',
            message: `The function 'character.stats' requires a character ID!`
        })

        return request({
            subUrl: `characters/${characterID}/stats`,
            needsAuth: true
        })
    },
    /**
     * Get character corporation titles.
     * @param {number} characterID
     * @requires esi-characters.read_titles.v1
     * @returns {JSON} A character’s titles.
     */
    titles(characterID) {
        inputValidation({
            input: characterID,
            type: 'number',
            message: `The function 'character.titles' requires a character ID!`
        })

        return request({
            subUrl: `characters/${characterID}/titles`,
            needsAuth: true
        })
    },
    assets: {
        /**
         * Get character assets.
         * @param {number} characterID
         * @requires esi-assets.read_assets.v1
         * @returns {JSON} A list of the characters assets.
         */
        assets(characterID) {
            inputValidation({
                input: characterID,
                type: 'number',
                message: `The function 'character.assets.assets' requires a character ID!`
            })

            return request({
                subUrl: `characters/${characterID}/assets`,
                needsAuth: true
            })
        },
        /**
         * Get character asset locations.
         * @param {number} characterID
         * @param {number[]} itemIDs
         * @requires esi-assets.read_assets.v1
         * @returns {JSON} Locations for a set of item ids, which you can get from character assets endpoint. Coordinates for items in hangars or stations are set to (0,0,0)
         */
        locations(characterID, itemIDs = []) {
            inputValidation({
                input: characterID,
                type: 'number',
                message: `The function 'character.assets.assetLocations' requires a character ID!`
            })
            inputValidation({
                input: itemIDs,
                type: 'object',
                message: `The function 'character.assets.assetLocations' requires a array of item IDs!`
            })

            return request({
                subUrl: `characters/${characterID}/assets/locations`,
                requestType: 'post',
                body: {
                    item_ids: itemIDs
                },
                needsAuth: true
            })
        },
        /**
         * Get character asset names.
         * @param {number} characterID
         * @param {number[]} itemIDs
         * @requires esi-assets.read_assets.v1
         * @returns {JSON} Names for a set of item ids, which you can get from character assets endpoint. Typically used for items that can customize names, like containers or ships.
         */
        names(characterID, itemIDs) {
            inputValidation({
                input: characterID,
                type: 'number',
                message: `The function 'character.assets.assetNames' requires a character ID!`
            })
            inputValidation({
                input: itemIDs,
                type: 'object',
                message: `The function 'character.assets.assetNames' requires a array of item IDs!`
            })

            return request({
                subUrl: `characters/${characterID}/assets/names`,
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
         * List bookmarks
         * @param {number} characterID
         * @requires esi-bookmarks.read_character_bookmarks.v1
         * @returns {JSON} A list of your character’s personal bookmarks.
         */
        bookmarks(characterID) {
            inputValidation({
                input: characterID,
                type: 'number',
                message: `The function 'character.bookmarks.bookmarks' requires a character ID!`
            })

            return request({
                subUrl: `characters/${characterID}/bookmarks`,
                needsAuth: true
            })
        },
        /**
         * List bookmark folders
         * @param {number} characterID
         * @requires esi-bookmarks.read_character_bookmarks.v1
         * @returns {JSON} A list of your character’s personal bookmark folders.
         */
        folders(characterID) {
            inputValidation({
                input: characterID,
                type: 'number',
                message: `The function 'character.bookmarks.bookmarkFolders' requires a character ID!`
            })

            return request({
                subUrl: `characters/${characterID}/bookmarks/folders`,
                needsAuth: true
            })

        }
    },
    calendar: {
        /**
         * List calendar event summaries.
         * @param {number} characterID
         * @param {number} fromEvent OPTIONAL - The event ID to start retrieving events from.
         * @requires esi-calendar.read_calendar_events.v1
         * @returns {JSON} Get 50 event summaries from the calendar. If no from_event ID is given, the resource will return the next 50 chronological event summaries from now. If a from_event ID is specified, it will return the next 50 chronological event summaries from after that event
         */
        calendar(characterID, fromEvent) {
            inputValidation({
                input: characterID,
                type: 'number',
                message: `The function 'character.calendar.calendar' requires a character ID!`
            })
            inputValidation({
                input: fromEvent,
                type: 'number',
                message: `The parameter 'fromEvent'  in the function 'character.calendar.calendar' must be a valid event ID!`,
                optional: true
            })

            return request({
                subUrl: `characters/${characterID}/calendar`,
                query: {
                    from_event: fromEvent
                },
                needsAuth: true
            })
        },
        /**
         * Get a event.
         * @param {number} characterID
         * @param {number} eventID
         * @requires esi-calendar.read_calendar_events.v1
         * @returns {JSON} Get all the information for a specific event
         */
        getEvent(characterID, eventID) {
            inputValidation({
                input: characterID,
                type: 'number',
                message: `The function 'character.calendar.getCalendarEvent' requires a character ID!`
            })
            inputValidation({
                input: eventID,
                type: 'number',
                message: `The function 'character.calendar.getCalendarEvent' requires a event ID!`
            })

            return request({
                subUrl: `characters/${characterID}/calendar/${eventID}`,
                needsAuth: true
            })
        },
        /**
         * Respond to a event.
         * @param {number} characterID
         * @param {number} eventID
         * @requires esi-calendar.respond_calendar_events.v1
         * @returns {string} Set your response status to a event.
         */
        respond(characterID, eventID) {
            inputValidation({
                input: characterID,
                type: 'number',
                message: `The function 'character.calendar.respondCalendarEvent' requires a character ID!`
            })
            inputValidation({
                input: eventID,
                type: 'number',
                message: `The function 'character.calendar.respondCalendarEvent' requires a event ID!`
            })

            return request({
                subUrl: `characters/${characterID}/calendar/${eventID}`,
                requestType: 'post',
                needsAuth: true
            })
        },
        /**
         * Get event attendees.
         * @param {number} characterID
         * @param {number} eventID
         * @requires esi-calendar.respond_calendar_events.v1
         * @returns {JSON} Get all invited attendees for a given event
         */
        getAttendees(characterID, eventID) {
            inputValidation({
                input: characterID,
                type: 'number',
                message: `The function 'character.calendar.getCalendarEventAttendees' requires a character ID!`
            })
            inputValidation({
                input: eventID,
                type: 'number',
                message: `The function 'character.calendar.getCalendarEventAttendees' requires a event ID!`
            })

            return request({
                subUrl: `characters/${characterID}/calendar/${eventID}/attendees`,
                needsAuth: true
            })
        }
    },
    clones: {
        /**
         * Get clones.
         * @param {number} characterID
         * @requires esi-clones.read_clones.v1
         * @returns {JSON} A list of the character’s clones.
         */
        clones(characterID) {
            inputValidation({
                input: characterID,
                type: 'number',
                message: `The function 'character.clones.clones' requires a character ID!`
            })

            return request({
                subUrl: `characters/${characterID}/clones`,
                needsAuth: true
            })
        },
        /**
         * Get active implants.
         * @param {number} characterID
         * @requires esi-clones.read_implants.v1
         * @returns {JSON} Implants on the active clone of a character.
         */
        implants(characterID) {
            inputValidation({
                input: characterID,
                type: 'number',
                message: `The function 'character.clones.implants' requires a character ID!`
            })

            return request({
                subUrl: `characters/${characterID}/implants`,
                needsAuth: true
            })
        }
    },
    contacts: {
        /**
         * Get contacts
         * @param {number} characterID
         * @requires esi-characters.read_contacts.v1
         * @returns {JSON}
         */
        contacts(characterID) {
            inputValidation({
                input: characterID,
                type: 'number',
                message: `The function 'character.contacts.contacts' requires a character ID!`
            })

            request({
                subUrl: `characters/${characterID}/contacts`,
                needsAuth: true
            })
        },
        /**
         * Bulk add contacts with same settings
         * @param {number} characterID
         * @param {number[]} contacts
         * @requires esi-characters.write_contacts.v1
         * @returns {JSON}
         */
        addContacts(characterID, contacts) {
            inputValidation({
                input: characterID,
                type: 'number',
                message: `The function 'character.contacts.addContacts' requires a character ID!`
            })
            inputValidation({
                input: contacts,
                type: 'object',
                message: `The function 'character.contacts.addContacts' requires a array of one or more contact IDs!`
            })

            request({
                subUrl: `characters/${characterID}/contacts`,
                needsAuth: true,
                requestType: 'post'
            })
        },
        /**
         * Bulk delete contacts
         * @param {number} characterID
         * @param {number[]} contacts
         * @requires esi-characters.write_contacts.v1
         * @returns {JSON}
         */
        deleteContacts(characterID, contacts) {
            inputValidation({
                input: characterID,
                type: 'number',
                message: `The function 'character.contacts.deleteContacts' requires a character ID!`
            })
            inputValidation({
                input: contacts,
                type: 'object',
                message: `The function 'character.contacts.deleteContacts' requires a array of one or more contact IDs!`
            })

            request({
                subUrl: `characters/${characterID}/contacts`,
                needsAuth: true,
                requestType: 'delete'
            })
        },
        /**
         * Bulk edit contacts with same settings
         * @param {number} characterID
         * @param {number[]} contacts
         * @requires esi-characters.write_contacts.v1
         * @returns {JSON}
         */
        editContacts(characterID, contacts) {
            inputValidation({
                input: characterID,
                type: 'number',
                message: `The function 'character.contacts.editContacts' requires a character ID!`
            })
            inputValidation({
                input: contacts,
                type: 'object',
                message: `The function 'character.contacts.editContacts' requires a array of one or more contact IDs!`
            })

            request({
                subUrl: `characters/${characterID}/contacts`,
                needsAuth: true,
                requestType: 'put'
            })
        }
    },
    contracts: {
        /**
         * Get contracts
         * @param {number} characterID
         * @requires esi-contracts.read_character_contracts.v1
         * @returns contracts available to a character, only if the character is issuer, acceptor or assignee. Only returns contracts no older than 30 days, or if the status is "in_progress".
         */
        contracts(characterID) {
            inputValidation({
                input: characterID,
                type: 'number',
                message: `The function 'character.contracts.contracts' requires a character ID!`
            })
            request({
                subUrl: `/characters/${characterID}/contracts/`,
                needsAuth: true
            })
        },
        /**
         * Get contract bids
         * @param {number} characterID
         * @param {number} contractID
         * @requires esi-contracts.read_character_contracts.v1
         * @returns bids on a particular auction contract.
         */
        bids(characterID, contractID) {
            inputValidation({
                input: characterID,
                type: 'number',
                message: `The function 'character.contracts.bids' requires a character ID!`
            })
            inputValidation({
                input: contractID,
                type: 'number',
                message: `The function 'character.contracts.bids' requires a contract ID!`
            })
            request({
                subUrl: `/characters/${characterID}/contracts/${contractID}/bids`,
                needsAuth: true
            })
        },
        /**
         * Get contract items
         * @param {number} characterID
         * @param {number} contractID
         * @requires esi-contracts.read_character_contracts.v1
         * @returns items of a particular contract.
         */
        items(characterID, contractID) {
            inputValidation({
                input: characterID,
                type: 'number',
                message: `The function 'character.contracts.items' requires a character ID!`
            })
            inputValidation({
                input: contractID,
                type: 'number',
                message: `The function 'character.contracts.items' requires a contract ID!`
            })
            request({
                subUrl: `/characters/${characterID}/contracts/${contractID}/items`,
                needsAuth: true
            })
        }
    },
    industry: {
        /**
         * List character industry jobs.
         * @param {number} characterID
         * @requires esi-industry.read_character_jobs.v1
         * @returns {JSON}
         */
        jobs(characterID) {
            inputValidation({
                input: characterID,
                type: 'number',
                message: `The function 'character.industry.jobs' requires a character ID!`
            })

            request({
                subUrl: `characters/${characterID}/industry/jobs`,
                needsAuth: true
            })
        },
        /**
         * Character mining ledger.
         * @param {number} characterID
         * @requires esi-industry.read_character_mining.v1
         * @returns Paginated record of all mining done by a character for the past 30 days
         */
        ledger(characterID, page = 1) {
            inputValidation({
                input: characterID,
                type: 'number',
                message: `The function 'character.industry.ledger' requires a character ID!`
            })
            inputValidation({
                input: page,
                type: 'number',
                message: `The function 'character.industry.ledger' requires a character ID!`
            })

            request({
                subUrl: `characters/${characterID}/mining`,
                needsAuth: true
            })
        }
    },
    notifications: {
        /**
         * Get character notifications.
         * @param {number} characterID The character to get the notifications of.
         * @requires esi-characters.read_notifications.v1
         * @returns {JSON} Character notifications.
         */
        notifications(characterID) {
            inputValidation({
                input: characterID,
                type: 'number',
                message: `The function 'character.corpHistory' needs a character ID!`
            })

            return request({
                subUrl: `characters/${characterID}/notifications`,
                needsAuth: true
            })
        },
        /**
         * Get new contact notifications.
         * @param {number} characterID
         * @requires esi-characters.read_notifications.v1
         * @returns {JSON} Notifications about having been added to someone’s contact list.
         */
        contacts(characterID) {
            inputValidation({
                input: characterID,
                type: 'number',
                message: `The function 'character.notificationContacts' requires a character ID!`
            })

            return request({
                subUrl: `characters/${characterID}/notification/contacts`,
                needsAuth: true
            })
        }
    },
    killmails: {
        /**
         * Get a character's recent kills and losses.
         * @param {number} characterID 
         * @param {number} page The page of results to return.
         * @requires esi-killmails.read_killmails.v1
         * @returns a list of a character’s kills and losses going back 90 days.
         */
        recent(characterID, page = 1) {
            inputValidation({
                input: characterID,
                type: 'number',
                message: `The function 'character.killmails.recent' requires a corporation ID!`
            })
            inputValidation({
                input: page,
                type: 'number',
                message: `The function 'character.killmails.recent' requires a page number!`,
                optional: true
            })

            return request({
                subUrl: `characters/${characterID}/killmails/recent`,
                query: {
                    page: page
                },
                needsAuth: true
            })
        }
    },
    mail: {
        /**
         * Return mail headers.
         * @param {number} characterID 
         * @param {Array} labels Get mails only with one or more of these labels.
         * @param {number} lastMailID Get mails after this mail.
         * @requires esi-mail.read_mail.v1
         * @returns  the 50 most recent mail headers belonging to the character that match the query criteria.
         * Queries can be filtered by label, and lastMailID can be used to paginate backwards.
         */
        getAll(characterID, labels = [], lastMailID) {
            inputValidation({
                input: characterID,
                type: 'number',
                message: `The function 'character.mail.getAll' needs a character ID!`
            })
            inputValidation({
                input: labels,
                type: 'object',
                message: `The parameter "labels" in the function 'character.mail.getAll' must be a array!`
            })
            inputValidation({
                input: lastMailID,
                type: 'number',
                message: `The parameter "lastMailID" in the function 'character.mail.getAll' must be a mail ID!`,
                optional: true
            })
            let query = {
                labels: labels
            }
            if (lastMailID) {
                query.last_mail_id = lastMailID
            }

            return request({
                subUrl: `characters/${characterID}/mail/`,
                query: query,
                needsAuth: true
            })
        },
        /**
         * Return a mail.
         * @param {number} characterID 
         * @param {number} mailID 
         * @requires esi-mail.read_mail.v1
         * @returns the contents of an EVE mail.
         */
        get(characterID, mailID) {
            inputValidation({
                input: characterID,
                type: 'number',
                message: `The function 'character.mail.get' needs a character ID!`
            })
            inputValidation({
                input: mailID,
                type: 'number',
                message: `The function 'character.mail.get' needs a mail ID!`,
                optional: true
            })

            return request({
                subUrl: `characters/${characterID}/mail/${mailID}`,
                needsAuth: true
            })
        },
        /**
         * Send a new mail.
         * @param {number} characterID 
         * @param {object} mail The mail to send. Mail structure is below.
         * @example  {
                    "approved_cost": 0,
                    "body": "This is a Mail!",
                    "recipients": [
                        {
                        "recipient_id": 0,
                        "recipient_type": "alliance"
                        }
                    ],
                    "subject": "Your hentai addiction"
                }
         */
        send(characterID, mail) {
            inputValidation({
                input: characterID,
                type: 'number',
                message: `The function 'character.mail.send' needs a character ID!`
            })
            inputValidation({
                input: mail,
                type: 'object',
                message: `The function 'character.mail.send' needs a mail!`
            })

            return request({
                subUrl: `characters/${characterID}/mail/`,
                requestType: 'POST',
                body: mail,
                needsAuth: true
            })
        },
        /**
         * Update metadata about a mail.
         * @param {number} characterID 
         * @param {number} mailID 
         * @param {object} contents Structure below.
         * @example {
                      "labels": [
                          0
                      ],
                      "read": true
                    }
         */
        update(characterID, mailID, contents) {
            inputValidation({
                input: characterID,
                type: 'number',
                message: `The function 'character.mail.delete' needs a character ID!`
            })
            inputValidation({
                input: mailID,
                type: 'number',
                message: `The function 'character.mail.delete' needs a mail ID!`,
            })
            inputValidation({
                input: contents,
                type: 'object',
                message: `The function 'character.mail.delete' needs the contents!`
            })

            return request({
                subUrl: `characters/${characterID}/mail/${mailID}`,
                requestType: 'PUT',
                body: contents,
                needsAuth: true
            })
        },
        /**
         * Delete a mail.
         * @param {number} characterID 
         * @param {number} mailID 
         * @requires esi-mail.organize_mail.v1
         */
        delete(characterID, mailID) {
            inputValidation({
                input: characterID,
                type: 'number',
                message: `The function 'character.mail.delete' needs a character ID!`
            })
            inputValidation({
                input: mailID,
                type: 'number',
                message: `The function 'character.mail.delete' needs a mail ID!`
            })

            return request({
                subUrl: `characters/${characterID}/mail/${mailID}`,
                requestType: 'DELETE',
                needsAuth: true
            })
        },
        /**
         * Get mail labels and unread counts.
         * @param {number} characterID 
         * @requires esi-mail.read_mail.v1
         * @returns a list of the users mail labels, unread counts for each label and a total unread count.
         */
        labels(characterID) {
            inputValidation({
                input: characterID,
                type: 'number',
                message: `The function 'character.mail.labels' needs a character ID!`
            })

            return request({
                subUrl: `characters/${characterID}/mail/labels/`,
                requestType: 'GET',
                needsAuth: true
            })
        },
        /**
         * Create a mail label.
         * @param {number} characterID 
         * @param {object} label Label example below.
         * @example 
         * {
                "color": "#ffffff",
                "name": "capt morgans spiced cum"
            }
         */
        createLabel(characterID, label) {
            inputValidation({
                input: characterID,
                type: 'number',
                message: `The function 'character.mail.createLabel' needs a character ID!`
            })
            inputValidation({
                input: label,
                type: 'object',
                message: `The function 'character.mail.createLabel' needs a label object!`
            })

            return request({
                subUrl: `characters/${characterID}/mail/labels/`,
                requestType: 'POST',
                body: label,
                needsAuth: true
            })
        },
        /**
         * Delete a mail label.
         * @param {number} characterID 
         * @param {number} labelID 
         * @requires esi-mail.organize_mail.v1
         */
        deleteLabel(characterID, labelID) {
            inputValidation({
                input: characterID,
                type: 'number',
                message: `The function 'character.mail.deleteLabel' needs a character ID!`
            })
            inputValidation({
                input: labelID,
                type: 'number',
                message: `The function 'character.mail.deleteLabel' needs a label ID!`,
            })

            return request({
                subUrl: `characters/${characterID}/mail/labels/${labelID}`,
                requestType: 'DELETE',
                needsAuth: true
            })
        },
        /**
         * Get mailing list subscriptions.
         * @param {number} characterID 
         * @requires esi-mail.read_mail.v1
         * @returns all mailing lists that the character is subscribed to.
         */
        mailingLists(characterID) {
            inputValidation({
                input: characterID,
                type: 'number',
                message: `The function 'character.mail.mailingLists' needs a character ID!`
            })

            return request({
                subUrl: `characters/${characterID}/mail/lists`,
                requestType: 'GET',
                needsAuth: true
            })
        },

    },
    market: {
        /**
         * List open orders from a character.
         * @param {number} characterID 
         * @requires esi-markets.read_character_orders.v1
         */
        orders(characterID) {
            inputValidation({
                input: characterID,
                type: 'number',
                message: `The function 'character.market.orders' needs a character ID!`
            })

            return request({
                subUrl: `characters/${characterID}/orders`,
                requestType: 'GET',
                needsAuth: true
            })
        },
        /**
         * List historical orders by a character.
         * @param {number} characterID 
         * @requires esi-markets.read_character_orders.v1
         */
        orderHistory(characterID) {
            inputValidation({
                input: characterID,
                type: 'number',
                message: `The function 'character.market.orderHistory' needs a character ID!`
            })

            return request({
                subUrl: `characters/${characterID}/orders/history`,
                requestType: 'GET',
                needsAuth: true
            })
        },
    }
}