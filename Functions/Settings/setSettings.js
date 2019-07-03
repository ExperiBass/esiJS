module.exports = setSettings

const fs = require('fs')

function setSettings(link = 'latest', dataSource = 'tranquility') {
    let server = 'https://esi.evetech.net/'
    let path = 'latest v1 legacy dev'.split(' ')
    let DS = 'tranqulity singularity'.split(' ')
    if (!link || !path.includes(link) || !dataSource || !DS.includes(dataSource)) {
        console.error(`setSettings needs its first arg to be one of these: ${path}, and its second arg to be one of these: ${DS}`)
        return Error(`setSettings needs first arg to be one of these: ${path}, and second arg to be one of these: ${DS}`)
    }
    link = `${server}${link}/`
    fs.writeFile('./esi.json', JSON.stringify({ link, dataSource }, null, 2), function(err) {
        if (err) {
            console.error(err)
            return Error(err)
        }
    })
    return link + '\n' + dataSource
}