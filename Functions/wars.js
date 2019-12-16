const request = require('./esiJS-Utils/request')
const inputValidation = require('./esiJS-Utils/inputValidation')

module.exports = {
    /**
     * Return details about a war.
     * @param {number} warID
     * @returns {object}
     */
    warInfo (warID) {
        inputValidation({ input: warID, type: 'number', message: `The function 'wars.warInfo' requires a war ID!` })
         
        return request({ subUrl: `wars/${warID}` })
    },
    /**
     * Return a list of kills related to a war.
     * @param {number} warID
     * @returns {object}
     */
    warKills (warID) {
        inputValidation({ input: warID, type: 'number', message: `The function 'wars.warkills' requires a war ID!` })
         
        return request({ subUrl: `wars/${warID}/killmails` })
    },
    /**
     * Return a list of wars.
     * @param {number} maxWarID Optional. Only return wars with ID smaller than this.
     * @returns {[number]}
     */
    wars (maxWarID = ' ') { // this should work
        return request({ 
            subUrl: `wars`, 
            query: {
                max_war_id: maxWarID 
            } 
        })
    }
}
