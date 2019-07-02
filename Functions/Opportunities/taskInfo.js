module.exports = taskInfo

const axios = require('axios')
const { link, dataSource } = require('../../esi.json')

async function taskInfo(ID) {
    let returningData;

    if (!ID || typeof ID !== 'number') {
        console.error(`the function 'taskInfo' requires a task group ID!`)
        return Error('taskInfo requires task group ID')
    }

    await axios.get(`${link}opportunity/tasks/${ID}?datasource=${dataSource}`)
        .then(response => {
            returningData = Promise.resolve(response.data)
        })
        .catch(function(e) {
            let error = e.response.data.error
            console.error(`From ESI:`,error)
            return Error(error)
        })

    return returningData;
}