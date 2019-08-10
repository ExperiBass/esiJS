const request = require('./Utility/request')
const inputValidation = require('./Utility/inputValidation')

module.exports = {
    groupInfo (groupID) {
        try {
            inputValidation({ input: groupID, type: 'number', message: `The function 'opportunities.groupInfo' requires a group Id!` })
        } catch (error) {
            throw Error(error)
        }

        return request({ subUrl: `opportunity/groups/${groupID}` })
    },
    groups () {
        return request({ subUrl: `opportunities/groups` })
    },
    taskInfo (groupID) {
        // TODO: shouldn't the input be taskId ?
        try {
            inputValidation({ input: groupID, type: 'number', message: `The function 'opportunities.taskInfo' requires a group Id!` })
        } catch (error) {
            throw Error(error)
        }

        return request({ subUrl: `opportunity/tasks/${groupID}` })
    },
    tasks () {
        return request({ subUrl: `opportunities/tasks` })
    }
}
