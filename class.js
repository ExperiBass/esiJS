const path = require('path')
let log = require('./functions/util/log') // is reassigned if logging is false
const fs = require('fs')

/**
 * The esiClient class.
 */
const esiJS = class {
    /**
     * The Constructor. Valid arguments are `logging`, for enabling and disabling logging, and `token`, for passing in a token (which will be saved in the config).
     * `logging` defaults to `true`.
     * @example
     * let esiClient = new esiJS({
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
                    throw throwError(`There was a error while attempting to create the config file! Error: \n${e}`)
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
    alliance = require('./functions/alliance')
    character = require('./functions/character')
    contracts = require('./functions/contracts')
    corporation = require('./functions/corporation')
    dogma = require('./functions/dogma')
    fw = require('./functions/factionWarfare')
    incursions = require('./functions/incursions')
    industry = require('./functions/industry')
    insurance = require('./functions/insurance')
    killmails = require('./functions/killmails')
    loyalty = require('./functions/loyalty')
    market = require('./functions/market')
    opportunities = require('./functions/opportunities')
    pi = require('./functions/planetaryInteraction')
    routes = require('./functions/routes')
    search = require('./functions/search')
    sov = require('./functions/sovereignty')
    status = require('./functions/status')
    universe = require('./functions/universe')
    ui = require('./functions/userInterface')
    util = require('./functions/utility')
    wars = require('./functions/wars')
}
module.exports = esiJS