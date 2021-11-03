const path = require('path')
/**
 * @private
 */
module.exports = {
    localConfig: path.join(__dirname, `../../esi.json`),
    projectConfig: path.join(__dirname, '../../../esi.json'),
    projectPath: path.join(__dirname, `../../../../`),
    routes: ['latest', 'v1', 'legacy', 'dev'],
    server: 'esi.evetech.net'
}