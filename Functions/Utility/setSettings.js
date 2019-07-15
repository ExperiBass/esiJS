module.exports = setSettings

const fs = require('fs')
let path = require('path')
let join = path.join(__dirname, '../../esi.json')

function setSettings(link = 'latest', dataSource = 'tranquility') {
    let server = 'https://esi.evetech.net/'
    let path = 'latest v1 legacy dev'.split(' ')
    let DS = 'tranquility singularity'.split(' ')
    if (!link || !path.includes(link) || typeof link !== 'string' 
        || !dataSource || !DS.includes(dataSource) || typeof datasource !== 'string') {
        console.error(`setSettings needs its first arg to be one of these: ${path}, and its second arg to be one of these: ${DS}`)
        throw Error(`setSettings needs first arg to be one of these: ${path}, and second arg to be one of these: ${DS}`)
    }
    link = `${server}${link}/`
    fs.writeFileSync(join, JSON.stringify( { link, dataSource }, null, 2) )
    return link + '\n' + dataSource
}