const { request, inputValidation } = require('./util/util.js')

module.exports = {
    /**
     * Return details about a war.
     * @param {number} warID
     * @returns {Promise<object>}
     */
    warInfo(warID) {
        inputValidation({
            input: warID,
            type: 'number',
            message: `The function 'wars.warInfo' requires a war ID!`
        })

        return request({
            subUrl: `wars/${warID}`
        })
    },
    /**
     * Return a list of kills related to a war.
     * @param {number} warID
     * @returns {Promise<object>}
     */
    warKills(warID) {
        inputValidation({
            input: warID,
            type: 'number',
            message: `The function 'wars.warkills' requires a war ID!`
        })

        return request({
            subUrl: `wars/${warID}/killmails`
        })
    },
    /**
     * Return a list of wars.
     * @param {number} maxWarID Optional. Only return wars with ID smaller than this.
     * @returns {Promise<[number]>}
     */
    wars(maxWarID) {
        inputValidation({
            input: maxWarID,
            type: 'number',
            message: `The parameter 'maxWarID' in the function 'wars.wars' must be a number!`,
            optional: true
        })
        return request({
            subUrl: `wars`,
            query: {
                max_war_id: maxWarID
            }
        })
    }
}