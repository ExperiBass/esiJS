module.exports = setSettings

const fs = require('fs')

function setSettings(link = 'https://esi.evetech.net/latest/', dataSource = 'tranquility') {
    fs.writeFile('./esi.json', JSON.stringify({ link, dataSource }, null, 2), function(err) {
        if (err) {
            console.error(err)
            return Error(err)
        }
    })
    return true
}

console.log(setSettings())