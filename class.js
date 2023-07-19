const path = require('path')
const fs = require('fs')
let {log} = require('./src/util/util') // is reassigned if logging is disabled

/**
 * The esiClient class.
 */
const esiJS = class {
    /**
     * The Constructor. Valid arguments are `logging`, for enabling and disabling logging, and `token`, for passing in a token (which will be saved in the config).
     * `logging` defaults to `true`.
     * @param {object} esiJSoptions esiJS options.
     * @param {boolean} esiJSoptions.logging Enables or disables logging.
     * @param {string} esiJSoptions.token Token to be saved in the config for authed routes.
     * @example
     * const esiClient = new esiJS({
     *     logging: false, // Disables logging
     *     token: "THIS_IS_A_TOKEN"
     * })
     */
    constructor({
        logging = true,
        token = ''
    }) {
        if (!logging) {
            log = () => {}
        }
        /**
         * Checks for a config file in 'projectPath'. If it exists, it checks if it can read and write to the file. If not, it creates one.
         */
        const projectConfig = path.normalize(path.join(__dirname, '../../esi.json'))
        const projectPath = path.normalize(path.join(__dirname, `../../`))
        // Check for a ESI config file in the project directory
        try {
            log(`Checking for a config file in ${projectPath}...`, 'INFO')
            let fileExists = fs.existsSync(projectConfig)

            // If the file exists...
            if (fileExists) {

                // ...see if we can read it...
                try {
                    log(`Config file exists! Checking if I can read it...`, 'INFO')
                    fs.accessSync(projectConfig, fs.constants.R_OK)

                    // ...then see if we can write into it
                    try {
                        log(`I can read it! Checking if I can write into it...`, 'INFO')
                        fs.accessSync(projectConfig, fs.constants.W_OK)
                    } catch (e) {
                        log(`Couldn't write to 'esi.json', reverting to default configuration`, 'WARNING')
                        return false
                    }
                } catch (e) {
                    log(`Couldn't read config file, reverting to default configuration`, 'WARNING')
                    return false
                }

            } else {
                // If the file doesn't exist...
                log(`The config file doesn't exist! Reverting to default configuration and attempting to write to ${projectConfig}...`, 'INFO')
                try {
                    // ...attempt to create it
                    fs.writeFileSync(projectConfig, JSON.stringify(require('./esi.json'), null, 2))
                    log(`Sucessfully created config file in ${projectPath}!`, 'INFO')
                } catch (e) {
                    throw buildError(`There was a error while attempting to create the config file! Error: \n${e}`)
                }
                return false
            }

        } catch (e) {
            return
        }
        log(`I can read and write to the config file!`, 'INFO')
        if (token) {
            this.util.setSettings({
                authToken: token
            })
        }
    }
    alliance = require('./src/alliance')
    character = require('./src/character')
    contracts = require('./src/contracts')
    corporation = require('./src/corporation')
    dogma = require('./src/dogma')
    fw = require('./src/factionWarfare')
    incursions = require('./src/incursions')
    industry = require('./src/industry')
    insurance = require('./src/insurance')
    killmails = require('./src/killmails')
    loyalty = require('./src/loyalty')
    market = require('./src/market')
    opportunities = require('./src/opportunities')
    pi = require('./src/planetaryInteraction')
    routes = require('./src/routes')
    search = require('./src/search')
    sov = require('./src/sovereignty')
    status = require('./src/status')
    universe = require('./src/universe')
    ui = require('./src/userinterface')
    util = require('./src/utility')
    wars = require('./src/wars')
}
module.exports = esiJS