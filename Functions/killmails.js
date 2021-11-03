const request = require('./util/request')
const inputValidation = require('./util/inputValidation')

module.exports = {
    /**
     * Return a single killmail from its ID and hash.

     * @param {number} killID
     * @param {string} killHash
     * @returns {object}
     */
    killmailInfo(killID, killHash) {
        inputValidation({
            input: killID,
            type: 'number',
            message: `The function 'killMail.killMailInfo' requires a kill ID!`
        })
        inputValidation({
            input: killHash,
            type: 'string',
            message: `The function 'killMail.killMailInfo' requires a kill hash!`
        })

        return request({
            subUrl: `killmails/${killID}/${killHash}`
        })
    }
}