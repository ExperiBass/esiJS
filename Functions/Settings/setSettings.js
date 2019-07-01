module.exports = setSettings

const fs = require('fs')

function setSettings(link = 'https://esi.evetech.com/latest/') {
    fs.writeFile('./esi.json', JSON.stringify(link, null, 2), function(err) {
        if (err) {
            console.error(err)
            return Error(err)
        }
    })
    return true
}