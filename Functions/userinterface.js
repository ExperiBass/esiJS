const request = require('./esiJS-Utils/request')
const inputValidation = require('./esiJS-Utils/inputValidation')

module.exports = {
    autopilot: {
        /**
         * Set Autopilot Waypoint.
         * @param {number} destinationID The destination. Can be Station, Structure, or System.
         * @param {*} addToBeginning Whether to add the destination to the beginning of the route. Defaults to false.
         * @param {*} clearOtherWaypoints Whether to clear all other waypoints before adding the destination. Defaults to false.
         * @requires esi-ui.write_waypoint.v1
         */
        waypoint(destinationID, addToBeginning = false, clearOtherWaypoints = false) {
            inputValidation({
                input: destinationID,
                type: 'number',
                message: `The function 'ui.autopilot.waypoint' needs a destination ID!`
            })
            inputValidation({
                input: addToBeginning,
                type: 'boolean',
                message: `The parameter "addToBeginning" in the function 'ui.autopilot.waypoint' must be a boolean!`
            })
            inputValidation({
                input: clearOtherWaypoints,
                type: 'boolean',
                message: `The parameter "clearOtherWaypoints" in the function 'ui.autopilot.waypoint' must be a boolean!`
            })

            return request({
                subUrl: `ui/autopilot/waypoint`,
                requestType: 'POST',
                query: {
                    add_to_beginning: addToBeginning,
                    clear_other_waypoints: clearOtherWaypoints,
                    destination_id: destinationID
                },
                needsAuth: true
            })
        }
    },
    openWindow: {
        /**
         * Open Contract Window.
         * @param {number} contractID The contract to open.
         * @requires esi-ui.open_window.v1
         */
        contract(contractID) {
            inputValidation({
                input: contractID,
                type: 'number',
                message: `The function 'ui.openwindow.contract' requires a contract ID!`
            })

            return request({
                subUrl: `ui/openwindow/contract`,
                requestType: 'POST',
                query: {
                    contract_id: contractID
                },
                needsAuth: true
            })
        },
        /**
         * Open Information Window
         * @param {number} targetID The target to get the information of. Can be a character, corporation or alliance.
         * @requires esi-ui.open_window.v1
         */
        information(targetID) {
            inputValidation({
                input: targetID,
                type: 'number',
                message: `The function 'ui.openwindow.information' requires a target ID!`
            })

            return request({
                subUrl: `ui/openwindow/information`,
                requestType: 'POST',
                query: {
                    target_id: targetID
                },
                needsAuth: true
            })
        },
        /**
         * Open Market Details.
         * @param {number} itemID The item type to open in market window.
         * @requires esi-ui.open_window.v1
         */
        marketDetails(itemID) {
            inputValidation({
                input: itemID,
                type: 'number',
                message: `The function 'ui.openwindow.marketDetails' requires a item ID!`
            })

            return request({
                subUrl: `ui/openwindow/marketdetails`,
                requestType: 'POST',
                query: {
                    type_id: itemID
                },
                needsAuth: true
            })
        },
        /**
         * Open New Mail Window.
         * @param {object} mail The details of mail to create. Example below.
         * @example
         * {
            "body": "string",
            "recipients": [
                0
            ],
            "subject": "string",
            "to_corp_or_alliance_id": 0,
            "to_mailing_list_id": 0
            }
         */
        newMail(mail) {
            inputValidation({
                input: mail,
                type: 'object',
                message: `The function 'ui.openwindow.newMail' requires a mail object!`
            })

            return request({
                subUrl: `ui/openwindow/newmail`,
                requestType: 'POST',
                query: {
                    new_mail: mail
                },
                needsAuth: true
            })
        }
    }
}