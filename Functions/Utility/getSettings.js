module.exports = getSettings
let path = require('path')
let join = path.join(__dirname, '../../esi.json')
const fs = require('fs')

function getSettings() {
    let settings = fs.readFileSync(join,'Utf8')
    return JSON.parse(settings)
}