const request = require('./esiJS-Utils/request')
const inputValidation = require('./esiJS-Utils/inputValidation')

module.exports = {
    /**
     * Return information of an opportunities group.
     * @async
     * @param {number} groupID 
     * @returns {object}
     */
    groupInfo (groupID) {
        inputValidation({ input: groupID, type: 'number', message: `The function 'opportunities.groupInfo' requires a group Id!` })

        return request({ subUrl: `opportunity/groups/${groupID}` })
    },
    /**
     * Return a list of opportunities groups.
     * @async
     * @returns {object}
     */
    groups () {
        return request({ subUrl: `opportunities/groups` })
    },
    /**
     * Return information of an opportunities task.
     * @async
     * @param {number} groupID 
     * @returns {object}
     */
    taskInfo (taskID) {
        inputValidation({ input: taskID, type: 'number', message: `The function 'opportunities.taskInfo' requires a task Id!` })

        return request({ subUrl: `opportunity/tasks/${groupID}` })
    },
    /**
     * Return a list of opportunities tasks.
     * @async
     * @returns {object}
     */
    tasks () {
        return request({ subUrl: `opportunities/tasks` })
    }
}
