const { request, inputValidation } = require('./util/util.js')

module.exports = {
    /**
     * Return information of an opportunities group.
     * @param {number} groupID
     * @returns {Promise<object>}
     */
    groupInfo(groupID) {
        inputValidation({
            input: groupID,
            type: 'number',
            message: `The function 'opportunities.groupInfo' requires a group ID!`,
        })

        return request({
            subUrl: `opportunity/groups/${groupID}`,
        })
    },
    /**
     * Return a list of opportunities groups.
     * @returns {Promise<object>}
     */
    groups() {
        return request({
            subUrl: `opportunities/groups`,
        })
    },
    /**
     * Return information of an opportunities task.

     * @param {number} groupID
     * @returns {Promise<object>}
     */
    taskInfo(taskID) {
        inputValidation({
            input: taskID,
            type: 'number',
            message: `The function 'opportunities.taskInfo' requires a task ID!`,
        })

        return request({
            subUrl: `opportunity/tasks/${groupID}`,
        })
    },
    /**
     * Return a list of opportunities tasks.

     * @returns {Promise<object>}
     */
    tasks() {
        return request({
            subUrl: `opportunities/tasks`,
        })
    },
}
