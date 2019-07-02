module.exports = setSettings

const fs = require('fs')

function setSettings(link = 'latest', dataSource = 'tranquility') {
    let server = 'https://esi.evetech.net/'
    link = `${server}${link}/`
    fs.writeFile('./esi.json', JSON.stringify({ link, dataSource }, null, 2), function(err) {
        if (err) {
            console.error(err)
            return Error(err)
        }
    })
    return link + '\n' + dataSource
}