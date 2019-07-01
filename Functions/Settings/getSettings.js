module.exports = getSettings

const fs = require('fs')
function getSettings() {
    let settings = fs.readFileSync(`./esi.json`,'Utf8')
    return settings;
}